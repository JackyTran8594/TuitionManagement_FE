import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { DeleteComponent } from '../../../shared/delete/delete.component';
import { User } from '../user/service/user';
import { AccountFrmComponent } from './account-frm/account-frm.component';
import { AccountData } from './service/account';

@Component({
  selector: 'ngx-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

 
  txtSearch = "";
  pageSize: number = 10;
  pageNumber: number = 1;
  totalItems: number = 0;
  listData: User[] = [];
  protected readonly $unsubcribe = new Subject<void>();

  constructor(private service: AccountData, private dialog: NbDialogService, private toastr: NbToastrService) { }

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
      this.totalItems = res.totalElements;
      this.listData = res.content;
    })
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
    this.dialog.open(AccountFrmComponent, {
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

  onUpdate() {
    this.dialog.open(AccountFrmComponent, {
      context: {
        title: "Chỉnh sửa người dùng",
        update: true,
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(result => {
      if (result) {
        this.toastr.show("Chỉnh sửa thành công", "", {
          status: "success",
          destroyByClick: true,
          duration: 2000,
        })

        setTimeout(() => {
          this.search();
        }, 1000);
      };
    }, err => {
      this.toastr.show("Có lỗi khi chính sửa", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  };

  onView() {
    this.dialog.open(AccountFrmComponent, {
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
  }

}
