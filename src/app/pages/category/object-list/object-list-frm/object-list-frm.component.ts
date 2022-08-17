import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../../common/enum/FormModeEnum';
import { resetForm } from '../../../../utils/utils';
import { ObjectList, ObjectListData } from '../service/object-list';

@Component({
  selector: 'ngx-object-list-frm',
  templateUrl: './object-list-frm.component.html',
  styleUrls: ['./object-list-frm.component.scss']
})
export class ObjectListFrmComponent implements OnInit {

  formObjectList!: FormGroup;

  @Input() title: string = "";
  item: ObjectList = {
    id: 0,
    header: '',
    description: '',
    money: 0,
    slop: 0,
    shift: 0,
    isSpecific: false,
    isChecked: false
  }

  @Input() mode: string = '';

  get id() {
    return this.formObjectList.get("id");
  }

  get header() {
    return this.formObjectList.get("header");
  }

  get description() {
    return this.formObjectList.get("description");
  }

  get money() {
    return this.formObjectList.get("money");
  }

  get slop() {
    return this.formObjectList.get("slop");
  }

  get shift() {
    return this.formObjectList.get("shift");
  }

  get isSpecific() {
    return this.formObjectList.get("isSpecific");
  }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<ObjectListFrmComponent>, private service: ObjectListData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();

  }

  formBuilder() {
    this.formObjectList = this.fb.group({
      id: [0, []],
      header: ['', []],
      description: ['', []],
      money: [0, []],
      slop: [0, []],
      shift: [0, []],
      isSpecific: [false, []],
      isChecked: [false, []],
    })
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res) {
          resetForm(this.formObjectList, this.item);
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
