import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ResponseStatus } from '../../../@core/constant/responseStatusEnum';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
import { StatusEnum } from '../../../common/enum/statusEnum';
import { resetForm } from '../../../utils/utils';
import { TuitionData, Tuition } from '../../tuition/service/tuition';
import { TuitionFrmComponent } from '../../tuition/tuition-frm/tuition-frm.component';
import { Student } from '../service/student';

@Component({
  selector: 'ngx-fee-paid-frm',
  templateUrl: './fee-paid-frm.component.html',
  styleUrls: ['./fee-paid-frm.component.scss']
})
export class FeePaidFrmComponent implements OnInit {
  formTuition!: FormGroup;

  @Input() title: string = "";

  @Input() tuitionId!: number;
  @Input() student!: Student;

  @Input() mode: string = '';

  loadingSpinner = false;

  currentPage: number = 1;
  pageSize: number = 10;
  txtSearch: string = '';
  // page from server
  size = 0
  totalPages = 0;
  totalElements = 0;
  //
  listData: Tuition[] = [];

  public $unsubscribe: Subject<boolean> = new Subject()

  get id() {
    return this.formTuition.get("id");
  }

  get money() {
    return this.formTuition.get("money");
  }

  get timeStamp() {
    return this.formTuition.get("timeStamp");
  }

  get isChecked() {
    return this.formTuition.get("isChecked");
  }

  // get createdBy() {
  //   return this.formTuition.get("createdBy");
  // }

  // get createdDate() {
  //   return this.formTuition.get("createdDate");
  // }

  // get lastModifiedBy() {
  //   return this.formTuition.get("lastModifiedBy");
  // }

  // get lastModifiedDate() {
  //   return this.formTuition.get("lastModifiedDate");
  // }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder,
    private dialogRef: NbDialogRef<TuitionFrmComponent>,
    private service: TuitionData,
    private toastrService: NbToastrService) {
    
     }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.title = "Thu phí học viên: " + this.student.registrationId + " - " + this.student.fullName;

    this.formBuilder();
    // if (this.studentId) {
    //   this.getById(this.studentId);
    // }
    this.searchData();
  }

  searchData() {
    this.txtSearch = (this.student.registrationId) ? this.student.registrationId : '';
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

  formBuilder() {
    this.formTuition = this.fb.group({
      id: [null, []],
      studentId: ['', []],
      money: ['', []],
      timeStamp: [new Date(), []],
      // createdBy: ['', []],
      // createdDate: ['', []],
      // lastModifiedBy: ['', []],
      // lastModifiedDate: ['', []],
      status: ['', []],
      isChecked: [false, []],
    })
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res.result === ResponseStatus.OK) {
          resetForm(this.formTuition, res.data);
        } else if (res.result === ResponseStatus.FAIL) {
          this.toastrService.show(
            "Lỗi",
            "Đã có lỗi xảy ra",
            {
              status: "danger",
              destroyByClick: true,
              duration: 2000,
            });

          setTimeout(() => {
            this.close();
          }, 2500);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  close() {
    this.dialogRef.close();
  }


  public buildObject() {
    let item = {} as Tuition;
    item.id = this.id.value;
    item.studentId = (this.student.registrationId) ? this.student.registrationId : '';
    item.money = this.money.value;
    item.timeStamp = this.timeStamp.value;
    return item;
  }

  save() {
    this.loadingSpinner = true;
    let item = this.buildObject();
    const result$ = (this.mode === FormModeEnum.CREATE) ? this.service.create(item) : this.service.update(item);
    result$
      .pipe(take(1))
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            if (res.result === StatusEnum.OK) {
              this.toastrService.show(
                "Thành công",
                "Thêm thiết bị thành công",
                {
                  status: "success",
                  destroyByClick: true,
                  duration: 2000,
                });

              setTimeout(() => {
                this.dialogRef.close(res);
              }, 2000);
            }
            this.loadingSpinner = false;
          },
          error: (err) => {
            console.log(err);
          }
        })

  }

}
