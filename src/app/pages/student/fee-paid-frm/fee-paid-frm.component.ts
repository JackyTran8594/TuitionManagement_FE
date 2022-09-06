import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ResponseStatus } from '../../../@core/constant/responseStatusEnum';
import { StatusEnum } from '../../../common/enum/statusEnum';
import { SearchParam } from '../../../shared/searchParam';
import { buildParam, resetForm } from '../../../utils/utils';
import { TuitionData, Tuition } from '../../tuition/service/tuition';
import { TuitionFrmComponent } from '../../tuition/tuition-frm/tuition-frm.component';
import { Student } from '../service/student';

@Component({
  selector: 'ngx-fee-paid-frm',
  templateUrl: './fee-paid-frm.component.html',
  styleUrls: ['./fee-paid-frm.component.scss']
})
export class FeePaidFrmComponent implements OnInit, AfterViewInit, AfterContentInit {
  formTuition!: FormGroup;

  @Input() title: string = "";

  @Input() tuitionId!: number;
  @Input() student!: Student;

  @Input() mode: string = '';

  loadingSpinner = false;

  currentPage = 1;
  pageSize = 10;
  // txtSearch: string = '';
  searchParam: SearchParam = {

  }
  // page from server
  size = 0
  totalPages = 0;
  totalItems = 0;
  //
  listDataTuition: Tuition[] = [];

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

  get trainClassId() {
    return this.formTuition.get("trainClassId");
  }

  get objectListId() {
    return this.formTuition.get("objectListId");
  }

  get feeList() {
    return this.formTuition.get("feeList");
  }

  get fee() {
    return this.formTuition.get('fee');
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
    this.formBuilder();
  }

  ngAfterContentInit(): void {
    //  this.searchData();
  }

  ngAfterViewInit(): void {
    // this.searchData();
  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.title = "Thu phí học viên: " + this.student.registrationId + " - " + this.student.fullName;


    // if (this.studentId) {
    //   this.getById(this.studentId);
    // }
    // this.searchData();
    this.getAllWithId();
  }

  getAllWithId() {
    console.log(this.student.id);
    this.service.getAllWithId(this.student.id).subscribe({
      next: (res) => {
        console.log(res);
        this.listDataTuition = res.listData;
        this.totalItems = (res.listData.length) ? res.listData.length : 0
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // searchData() {
  //   this.searchParam.id = (this.student.id) ? this.student.id : null;
  //   let params = buildParam(this.searchParam);
  //   this.service.paging(this.currentPage, this.pageSize, params).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.listDataTuition = res.content;
  //       this.totalItems = res.totalElements;
  //       this.totalPages = res.totalPages;
  //       this.size = res.size
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // changePageSize(event) {
  //   console.log(event);
  //   if (event != this.size) {
  //     this.currentPage = 1;
  //   }
  //   this.searchData();
  // }

  // pageChanged(page: any) {
  //   this.currentPage = page;
  //   this.searchData();
  // }

  formBuilder() {
    this.formTuition = this.fb.group({
      id: [null, []],
      studentId: ['', []],
      money: ['', []],
      timeStamp: [new Date(), []],
      trainClassId: ['', []],
      objectListId: ['', []],
      feeList: ['', []],
      fee: ['', []],
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
    item.studentId = (this.student.id) ? this.student.id : null;
    item.money = this.money.value;
    item.timeStamp = this.timeStamp.value;
    return item;
  }

  save() {
    this.loadingSpinner = true;
    let item = this.buildObject();
    const result$ = this.service.create(item);
    result$
      .pipe(take(1))
      .subscribe(
        {
          next: (res) => {
            console.log(res);
            if (res.result === StatusEnum.OK) {
              this.toastrService.show(
                "Thành công",
                "Thu phí thành công",
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
