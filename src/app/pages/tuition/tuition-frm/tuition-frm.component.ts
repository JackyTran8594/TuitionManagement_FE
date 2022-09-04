import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../common/enum/formModeEnum';
import { resetForm } from '../../../utils/utils';
import { Tuition, TuitionData } from '../service/tuition';

@Component({
  selector: 'ngx-tuition-frm',
  templateUrl: './tuition-frm.component.html',
  styleUrls: ['./tuition-frm.component.scss']
})
export class TuitionFrmComponent implements OnInit {

  formTuition!: FormGroup;

  @Input() title: string = "";
  item: Tuition = {
    id: 0,
    studentId: '',
    money: 0,
    timeStamp: new Date(),
    note: '',
    isChecked: false
  }

  @Input() mode: string = '';

  get id() {
    return this.formTuition.get("id");
  }

  get header() {
    return this.formTuition.get("header");
  }


  get money() {
    return this.formTuition.get("money");
  }

  get timeStamp() {
    return this.formTuition.get("timeStamp");
  }


  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<TuitionFrmComponent>, private service: TuitionData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();

  }

  formBuilder() {
    this.formTuition = this.fb.group({
      id: [0, []],
      header: ['', []],
      description: ['', []],
      money: [0, []],
      isChecked: [false, []],
    })
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res) {
          resetForm(this.formTuition, this.item);
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
