import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { ResponseStatus } from '../../../@core/constant/responseStatusEnum';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
import { StatusEnum } from '../../../common/enum/statusEnum';
import { resetForm } from '../../../utils/utils';
import { Student, StudentData } from '../service/student';

@Component({
  selector: 'ngx-student-frm',
  templateUrl: './student-frm.component.html',
  styleUrls: ['./student-frm.component.scss']
})
export class StudentFrmComponent implements OnInit {

  formStudent!: FormGroup;

  @Input() title: string = "";

  @Input() student_id!: number;

  @Input() mode: string = '';

  public $unsubscribe: Subject<boolean> = new Subject()

  get id() {
    return this.formStudent.get("id");
  }

  get registrationId() {
    return this.formStudent.get("registrationId");
  }

  get courseId() {
    return this.formStudent.get("courseId");
  }

  get citizenId() {
    return this.formStudent.get("citizenId");
  }

  get firstName() {
    return this.formStudent.get("firstName");
  }

  get tempName() {
    return this.formStudent.get("tempName");
  }

  get fullName() {
    return this.formStudent.get("fullName");
  }

  get image() {
    return this.formStudent.get("image");
  }
  get trainClassId() {
    return this.formStudent.get("trainClassId");
  }

  get note() {
    return this.formStudent.get("note");
  }

  get tuitionId() {
    return this.formStudent.get("tuitionId");
  }

  get feeId() {
    return this.formStudent.get("feeId");
  }

  get isChecked() {
    return this.formStudent.get("isChecked");
  }

  get createdBy() {
    return this.formStudent.get("createdBy");
  }

  get createdDate() {
    return this.formStudent.get("createdDate");
  }

  get lastModifiedBy() {
    return this.formStudent.get("lastModifiedBy");
  }

  get lastModifiedDate() {
    return this.formStudent.get("lastModifiedDate");
  }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder,
    private dialogRef: NbDialogRef<StudentFrmComponent>,
    private service: StudentData,
    private toastrService: NbToastrService) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();
    if (this.student_id && this.student_id > 0) {
      this.getById(this.student_id);
    }
  }

  formBuilder() {
    this.formStudent = this.fb.group({
      id: [null, []],
      studentId: ['', []],
      courseId: ['', []],
      citizenId: ['', []],
      firstName: ['', []],
      tempName: ['', []],
      fullName: ['', []],
      image: ['', []],
      trainClassId: ['', []],
      note: ['', []],
      createdBy: ['', []],
      createdDate: ['', []],
      lastModifiedBy: ['', []],
      lastModifiedDate: ['', []],
      status: ['', []],
      tuitionId: [0, []],
      feeId: [0, []],
      isChecked: [false, []],
    })
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res.result === ResponseStatus.OK) {
          resetForm(this.formStudent, res.data);
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
    let item = {} as Student;
    item.id = this.id.value;
    item.citizenId = this.citizenId.value;
    item.courseId = this.courseId.value;
    item.createdBy = this.createdBy.value;
    item.createdDate = this.createdDate.value;
    item.feeId = this.feeId.value;
    item.firstName = this.firstName.value;
    item.fullName = this.fullName.value;
    item.image = this.image.value;
    item.lastModifiedBy = this.lastModifiedBy.value;
    item.lastModifiedDate = this.lastModifiedDate.value;
    item.note = this.note.value;
    item.registrationId = this.registrationId.value;
    item.tempName = this.tempName.value;
    item.trainClassId = this.trainClassId.value;
    item.tuitionId = this.tuitionId.value;
    return item;
  }

  save() {

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
          },
          error: (err) => {
            console.log(err);
          }
        })

  }

}
