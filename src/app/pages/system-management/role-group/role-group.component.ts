import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { DeleteComponent } from '../../../shared/delete/delete.component';
import { RoleGroupFrmComponent } from './role-group-frm/role-group-frm.component';
import { RoleGroup, RoleGroupData } from './service/role-group';

@Component({
  selector: 'ngx-role-group',
  templateUrl: './role-group.component.html',
  styleUrls: ['./role-group.component.scss']
})
export class RoleGroupComponent implements OnInit, OnDestroy {

  txtSearch = "";
  pageSize: number = 10;
  pageNumber: number = 1;
  totalItems: number = 0;
  listData: RoleGroup[] = [];
  protected readonly $unsubcribe = new Subject<void>();

  constructor(private service: RoleGroupData, private dialog: NbDialogService, private toastr: NbToastrService) { }


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
    });

    this.service.getAll();
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
    this.dialog.open(RoleGroupFrmComponent, {
      context: {
        title: "Thêm mới nhóm quyền",
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

  onEdit(item) {
    this.dialog.open(RoleGroupFrmComponent, {
      context: {
        title: "Chỉnh sửa nhóm quyền",
        update: true,
        item: item
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

  onView(item) {
    this.dialog.open(RoleGroupFrmComponent, {
      context: {
        title: "Chi tiết nhóm quyền",
        view: true,
        item: item
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    });
  };


  onDelete(id) {
    this.dialog.open(DeleteComponent, {
      context: {
        title: "Xóa nhóm quyền",
        data: "Bạn có chắc muốn xóa nhóm quyền này không"
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe(res => {
          if (res) {
            this.toastr.show("Xóa nhóm quyền thành công", "", {
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
      this.toastr.show("Có lỗi khi xóa nhóm quyền", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  }



  onDeleteAll(event) {
    this.dialog.open(DeleteComponent, {
      context: {
        title: "Xóa nhiều nhóm quyền"
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
            this.toastr.show("Xóa nhóm quyền thành công", "", {
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
      this.toastr.show("Có lỗi khi xóa nhóm quyền", err.message, {
        status: "danger",
        destroyByClick: true,
        duration: 2000,
      });
    });
  }

}
