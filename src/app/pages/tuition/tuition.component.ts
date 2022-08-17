import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { DeleteComponent } from '../../shared/delete/delete.component';
import { TuitionData, Tuition } from './service/tuition';
import { TuitionFrmComponent } from './tuition-frm/tuition-frm.component';

@Component({
  selector: 'ngx-tuition',
  templateUrl: './tuition.component.html',
  styleUrls: ['./tuition.component.scss']
})
export class TuitionComponent implements OnInit {

  constructor(private service: TuitionData,
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
  listData: Tuition[] = []


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
    this.dialogService.open(TuitionFrmComponent, {
      context: {
        title: "Xem chi tiết học phí",
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    })
  }

  onCreate(): void {
    this.dialogService.open(TuitionFrmComponent, {
      context: {
        title: "Tạo mới học phí",
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Thêm học phí thành công",
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
    this.dialogService.open(TuitionFrmComponent, {
      context: {
        title: "Chỉnh sửa học phí",
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Thành công",
          "Chỉnh sửa học phí thành công",
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
        title: "Xóa học phí ",
        content: "học phí với mã " + item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.service.delete(item.id).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Thành công",
              "Xóa học phí thành công",
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
        content: "các học phí này "
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
              "Xóa học phí thành công",
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
