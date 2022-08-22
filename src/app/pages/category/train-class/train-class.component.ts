import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
import { DeleteComponent } from '../../../shared/delete/delete.component';
import { TrainClassData, TrainClass } from './service/train-class';
import { TrainClassFrmComponent } from './train-class-frm/train-class-frm.component';

@Component({
  selector: 'ngx-train-class',
  templateUrl: './train-class.component.html',
  styleUrls: ['./train-class.component.scss']
})
export class TrainClassComponent implements OnInit {

  constructor(private service: TrainClassData,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.pageSize = 10;
    this.txtSearch = "";
  }

  currentPage: number;
  pageSize: number;
  txtSearch: string;
  // page from server
  size = 0;
  totalElements = 0;
  //
  listData: TrainClass[] = []


  searchData() {
    this.service.paging(this.currentPage, this.pageSize, this.txtSearch).subscribe(res => {
      this.listData = res.content;
    })
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
    this.dialogService.open(TrainClassFrmComponent, {
      context: {
        title: "Xem chi tiết khóa học",
        mode: FormModeEnum.VIEW
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    })
  }

  onCreate(): void {
    this.dialogService.open(TrainClassFrmComponent, {
      context: {
        title: "Tạo mới khóa học",
        mode: FormModeEnum.CREATE
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Thêm khóa học thành công",
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

  onEdit(): void {
    this.dialogService.open(TrainClassFrmComponent, {
      context: {
        title: "Chỉnh sửa khóa học",
        mode: FormModeEnum.UPDATE
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Chỉnh sửa khóa học thành công",
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
        title: "Xóa khóa học ",
        content: "khóa học với mã " + item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.service.delete(item.id).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Thành công",
              "Xóa khóa học thành công",
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
        content: "các khóa học này "
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        let removeList: number[] = this.listData.filter((item) => item.isChecked).map(o => {
          return o.id;
        }) as number[];

        this.service.deleteList(removeList).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Thành công",
              "Xóa khóa học thành công",
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
