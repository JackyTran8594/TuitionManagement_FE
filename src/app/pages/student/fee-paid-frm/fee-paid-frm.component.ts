import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ResponseStatus } from '../../../@core/constant/responseStatusEnum';
import { StatusEnum } from '../../../common/enum/statusEnum';
import { CommonService } from '../../../common/service/common.service';
import { SearchParam } from '../../../shared/searchParam';
import { resetForm } from '../../../utils/utils';
import { FeeList } from '../../category/fee-list/service/fee';
import { ObjectType } from '../../category/object-type/service/object-type';
import { TrainClass } from '../../category/train-class/service/train-class';
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
  listFeeList: FeeList[] = [];
  listObjectType: ObjectType[] = [];
  listTrainClass: TrainClass[] = [];

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

  get teacher() {
    return this.formTuition.get('teacher');
  }


  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder,
    private dialogRef: NbDialogRef<TuitionFrmComponent>,
    private service: TuitionData,
    private commonService: CommonService,
    private toastrService: NbToastrService) {
    this.listFeeList = this.commonService.getFeeList();
    this.listObjectType = this.commonService.getObjectType();
    this.listTrainClass = this.commonService.getTrainClass();
    console.log(this.listFeeList);
    this.formBuilder();
  }



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.title = "Thu phí học viên: " + this.student.registrationId + " - " + this.student.fullName;
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


  formBuilder() {
    this.formTuition = this.fb.group({
      id: [null, []],
      studentId: [null, []],
      money: [null, []],
      timeStamp: [new Date(), []],
      trainClassId: [null, []],
      objectListId: [null, []],
      feeList: [null, []],
      fee: [null, []],
      teacher: [null, []],
      // createdBy: ['', []],
      // createdDate: ['', []],
      // lastModifiedBy: ['', []],
      // lastModifiedDate: ['', []],
      status: [null, []],
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
