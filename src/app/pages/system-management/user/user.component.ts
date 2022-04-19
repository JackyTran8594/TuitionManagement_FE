import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { DeleteComponent } from '../../../shared/delete/delete.component';
import { User, UserData } from './service/user';
import { UserFrmComponent } from './user-frm/user-frm.component';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  txtSearch = "";
  pageSize: number = 5;
  pageNumber: number = 2;
  totalItems: number = 0;
  listData: User[] = [];
  protected readonly $unsubcribe = new Subject<void>();

  constructor(private service: UserData, private dialog: NbDialogService, private toastr: NbToastrService, private router: Router) { }

  ngOnDestroy(): void {
    this.$unsubcribe.next();
    this.$unsubcribe.complete();
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.service.list(this.pageNumber, this.pageSize, this.txtSearch).subscribe(res => {
      console.log(res);
      this.listData = res.content;
      this.totalItems = res.totalElements
    });
  }

  changePageSize(event) {
    this.pageSize = event;
    this.search();
  }

  pageChanged(event) {
    this.pageNumber = event;
    this.search();
  }

  CheckedAll(event) {
    this.listData.forEach(value => {
      value.isChecked = event;
    });
  };

  isChecked(event, id: number) {
    if (id) {
      this.listData[id].isChecked = event;
    };
  };

  onCreate() {
    this.dialog.open(UserFrmComponent, {
      context: {
        title: "Thêm mới người dùng",
        create: true,
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(result => {
      if (result) {
        this.toastr.show("Thêm mới thành công", "", {
          status: "success",
          destroyByClick: true,
          duration: 2000,
        })

        setTimeout(() => {
          this.search();
        }, 1000);
      };
    }, err => {
      this.toastr.show("Có lỗi khi thêm mới", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  }

  onEdit(item: User) {
    this.router.navigate(['pages/user/profile'], { state: { username: item.login } });
  }

  // onEdit() {
  //   this.dialog.open(UserFrmComponent, {
  //     context: {
  //       title: "Chỉnh sửa người dùng",
  //       update: true,
  //     },
  //     hasBackdrop: true,
  //     closeOnBackdropClick: false
  //   }).onClose.subscribe(result => {
  //     if (result) {
  //       this.toastr.show("Chỉnh sửa thành công", "", {
  //         status: "success",
  //         destroyByClick: true,
  //         duration: 2000,
  //       })

  //       setTimeout(() => {
  //         this.search();
  //       }, 1000);
  //     };
  //   }, err => {
  //     this.toastr.show("Có lỗi khi chính sửa", err.message, {
  //       status: "danger",
  //       destroyByClick: true,
  //       duration: 2000,
  //     });
  //   });
  // };

  onView() {
    this.dialog.open(UserFrmComponent, {
      context: {
        title: "Chi tiết người dùng",
        view: true,
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    });
  };


  onDelete(id) {
    this.dialog.open(DeleteComponent, {
      context: {
        title: "Xóa người dùng",
        data: "Bạn có chắc muốn xóa người dùng này không"
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe(res => {
          if (res) {
            this.toastr.show("Xóa người dùng thành công", "", {
              status: "success",
              destroyByClick: true,
              duration: 2000,
            })

            setTimeout(() => {
              this.search();
            }, 1000);
          }
        })

      };
    }, err => {
      this.toastr.show("Có lỗi khi xóa người dùng", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  }



  onDeleteAll(event) {
    this.dialog.open(DeleteComponent, {
      context: {
        title: "Xóa nhiều người dùng"
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(result => {
      if (result) {
        let listId = this.listData.filter(x => x.isChecked).map(item => {
          return item.id;
        }) as number[];

        this.service.deleteAll(listId).subscribe(res => {
          if (res) {
            this.toastr.show("Xóa người dùng thành công", "", {
              status: "success",
              destroyByClick: true,
              duration: 2000,
            })

            setTimeout(() => {
              this.search();
            }, 1000);
          }
        })

      };
    }, err => {
      this.toastr.show("Có lỗi khi xóa người dùng", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  };

}
