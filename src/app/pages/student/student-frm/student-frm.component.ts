import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
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
  item: Student = {
    studentId: '',
    courseId: '',
    citizenId: '',
    firstName: '',
    tempName: '',
    fullName: '',
    image: '',
    trainClassId: '',
    note: '',
    tuitionId: 0,
    feeId: 0,
    isChecked: false
  }

  @Input() mode: string = '';

  get id() {
    return this.formStudent.get("id");
  }

  get studentId() {
    return this.formStudent.get("studentId");
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
      createdDate:['', []],
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
        if (res) {
          resetForm(this.formStudent, this.item);
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


  public convertStudent() {
    let item = {} as Student;
    item.id = this.id.value;
    item.citizenId = this.citizenId.value;
    item.courseId = this.courseId.value;
    // item.createdBy = this.
  }

  save() {


    const result$ = (this.mode === FormModeEnum.CREATE) ? this.service.create(this.item) : this.service.update(this.item);

    result$.subscribe(
      {
        next: (res) => {
          console.log(res);
          if (res) {
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
