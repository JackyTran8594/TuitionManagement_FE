import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../../common/enum/FormModeEnum';
import { resetForm } from '../../../../utils/utils';
import { TrainClass, TrainClassData } from '../service/train-class';

@Component({
  selector: 'ngx-train-class-frm',
  templateUrl: './train-class-frm.component.html',
  styleUrls: ['./train-class-frm.component.scss']
})
export class TrainClassFrmComponent implements OnInit {

  formTrainClass!: FormGroup;

  @Input() title: string = "";
  item: TrainClass = {
    id: 0,
    header: '',
    description: '',
    money: 0,
    isChecked: false
  }

  @Input() mode: string = '';

  get id() {
    return this.formTrainClass.get("id");
  }

  get header() {
    return this.formTrainClass.get("header");
  }

  get description() {
    return this.formTrainClass.get("description");
  }

  get money() {
    return this.formTrainClass.get("money");
  }


  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<TrainClassFrmComponent>, private service: TrainClassData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();

  }

  formBuilder() {
    this.formTrainClass = this.fb.group({
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
          resetForm(this.formTrainClass, this.item);
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
