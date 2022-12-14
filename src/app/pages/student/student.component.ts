import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { FormModeEnum } from '../../common/enum/formModeEnum';
import { DeleteComponent } from '../../shared/delete/delete.component';
import { FeePaidFrmComponent } from './fee-paid-frm/fee-paid-frm.component';
import { ImportXmlComponent } from './import-xml/import-xml.component';
import { StudentData, Student } from './service/student';
import { StudentFrmComponent } from './student-frm/student-frm.component';

@Component({
  selector: 'ngx-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentData,
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
  listData: Student[] = []


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

  onAttach() {
    this.dialogService.open(ImportXmlComponent, {
      context: {
        title: "Import file XML",
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    })
  }

  onFeePaid(item) {
    this.dialogService.open(FeePaidFrmComponent, {
      context: {
        student: item,
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      console.log(res);
      if (res) {
        this.searchData()
      }
    })
  }

  onView(item): void {
    this.dialogService.open(StudentFrmComponent, {
      context: {
        title: "Xem chi ti???t thi???t b???",
        mode: FormModeEnum.VIEW,
        student_id: item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    })
  }

  onCreate(): void {
    this.dialogService.open(StudentFrmComponent, {
      context: {
        title: "T???o m???i h???c vi??n",
        mode: FormModeEnum.CREATE
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        console.log(res)
        this.searchData();
      }
    }, error => {
      this.toastrService.show(
        "Th???t b???i",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }

  onEdit(item): void {
    this.dialogService.open(StudentFrmComponent, {
      context: {
        title: "Ch???nh s???a thi???t b???",
        mode: FormModeEnum.UPDATE,
        student_id: item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.toastrService.show(
          "Th??nh c??ng",
          "Ch???nh s???a thi???t b??? th??nh c??ng",
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
        "Th???t b???i",
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
        title: "X??a thi???t b??? ",
        content: "thi???t b??? v???i m?? " + item.id
      },
      hasBackdrop: true,
      closeOnBackdropClick: false
    }).onClose.subscribe(res => {
      if (res) {
        this.service.delete(item.id).subscribe(res => {
          if (res) {
            this.toastrService.show(
              "Th??nh c??ng",
              "X??a thi???t b??? th??nh c??ng",
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
        "Th???t b???i",
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
        title: "X??a nhi???u thi???t b??? ",
        content: "c??c thi???t b??? n??y "
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
              "Th??nh c??ng",
              "X??a thi???t b??? th??nh c??ng",
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
        "Th???t b???i",
        error,
        {
          status: "danger",
          destroyByClick: true,
          duration: 2000,
        });
    })
  }
}
