import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
import { DeleteComponent } from '../../../shared/delete/delete.component';
import { ObjectTypeFrmComponent } from './object-type-frm/object-type-frm.component';
import { ObjectTypeData, ObjectType } from './service/object-type';

@Component({
  selector: 'ngx-object-type',
  templateUrl: './object-Type.component.html',
  styleUrls: ['./object-Type.component.scss']
})
export class ObjectTypeComponent implements OnInit {

  constructor(private service: ObjectTypeData,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.searchData();
  }

  currentPage: number = 1;
  pageSize: number = 10;
  txtSearch: string = '';
  // page from server
  size = 0
  totalPages = 0;
  totalElements = 0;
  //
  listData: ObjectType[] = []


  searchData() {
    this.service.paging(this.currentPage, this.pageSize, this.txtSearch).subscribe({
      next: (res) => {
        console.log(res);
        this.listData = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  changePageSize(event) {
    console.log(event);
    if (event != this.size) {
      this.currentPage = 1;
    }
    this.searchData();
  }

  pageChanged(page: any) {
    this.currentPage = page;
    this.searchData();
  }

  checkedAll(event) {
    this.listData.forEach(item => {
      item.isChecked = event;
    })
  }

  isChecked(event, index: number) {
    this.listData[index].isChecked = event;
  }

  onView(item): void {
    this.dialogService.open(ObjectTypeFrmComponent, {
      context: {
        title: "Xem chi tiết đối tượng",
        mode: FormModeEnum.VIEW,
        objectTypeId: item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    })
  }

  onCreate(): void {
    this.dialogService.open(ObjectTypeFrmComponent, {
      context: {
        title: "Tạo mới đối tượng",
        mode: FormModeEnum.CREATE
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Thêm đối tượng thành công",
          {
            status: "success",
            destroyByClick: true,
            duration: 2000,
          });

        setTimeout(() => {
          this.searchData();
        }, 1000);
      }
    }, error => {
      this.toastrService.show(
        "Thất bại",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }

  onEdit(item): void {
    this.dialogService.open(ObjectTypeFrmComponent, {
      context: {
        title: "Chỉnh sửa đối tượng",
        mode: FormModeEnum.UPDATE,
        objectTypeId: item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Chỉnh sửa đối tượng thành công",
          {
            status: "success",
            destroyByClick: true,
            duration: 2000,
          });

        setTimeout(() => {
          this.searchData();
        }, 1000);
      }
    }, error => {
      this.toastrService.show(
        "Thất bại",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }

  onDelete(item): void {
    this.dialogService.open(DeleteComponent, {
      context: {
        title: "Xóa đối tượng ",
        content: "đối tượng với mã " + item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.service.delete(item.id).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Thành công",
              "Xóa đối tượng thành công",
              {
                status: "success",
                destroyByClick: true,
                duration: 2000,
              });

            setTimeout(() => {
              this.searchData();
            }, 1000);
          }
        })

      }
    }, error => {
      this.toastrService.show(
        "Thất bại",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }

  onDeleteAll(item): void {
    this.dialogService.open(DeleteComponent, {
      context: {
        title: "Xóa nhiều danh sách ",
        content: "các đối tượng này "
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        let removeType: number[] = this.listData.filter((item) => item.isChecked).map(o => {
          return o.id;
        }) as number[];

        this.service.deleteList(removeType).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Thành công",
              "Xóa đối tượng thành công",
              {
                status: "success",
                destroyByClick: true,
                duration: 2000,
              });

            setTimeout(() => {
              this.searchData();
            }, 1000);
          }
        })

      }
    }, error => {
      this.toastrService.show(
        "Thất bại",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }


}
