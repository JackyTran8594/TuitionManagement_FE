import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../common/enum/FormModeEnum';
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
    id: 0,
    header: '',
    description: '',
    money: 0,
    Student_id: 0
  }
  @Input() mode: string = '';

  get id() {
    return this.formStudent.get("id");
  }

  get header() {
    return this.formStudent.get("header");
  }

  get description() {
    return this.formStudent.get("description");
  }

  get money() {
    return this.formStudent.get("money");
  }

  get Student_id() {
    return this.formStudent.get("Student_id");
  }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<StudentFrmComponent>, private service: StudentData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();
   
  }

  formBuilder() {
    this.formStudent = this.fb.group({
      id: [0, []],
      header: ['', [],],
      description: ['', [Validators.maxLength(1000)]],
      money: [0, []],
      Student_id: [0, []]
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

  save() {

    const result$ = (this.mode === FormModeEnum.CREATE) ? this.service.create(this.item) : this.service.update(this.item);

    result$.subscribe(
      {
        next: (res) => {
          if (res) {
            this.dialogRef.close(res);
          }
        },
        error: (err) => {
          console.log(err);
        }
      })

  }

}
