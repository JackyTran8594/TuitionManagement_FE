import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../../common/enum/formModeEnum';
import { resetForm } from '../../../../utils/utils';
import { ObjectType, ObjectTypeData } from '../service/object-type';

@Component({
  selector: 'ngx-object-type-frm',
  templateUrl: './object-type-frm.component.html',
  styleUrls: ['./object-type-frm.component.scss']
})
export class ObjectTypeFrmComponent implements OnInit {

  formObjectType!: FormGroup;

  @Input() title: string = "";
  // item: ObjectType = {
  //   id: 0,
  //   header: '',
  //   description: '',
  //   money: 0,
  //   slop: 0,
  //   shift: 0,
  //   isSpecific: false,
  //   isChecked: false
  // }

  @Input() mode: string = '';

  get id() {
    return this.formObjectType.get("id");
  }

  get header() {
    return this.formObjectType.get("header");
  }

  get description() {
    return this.formObjectType.get("description");
  }

  get money() {
    return this.formObjectType.get("money");
  }

  get slop() {
    return this.formObjectType.get("slop");
  }

  get shift() {
    return this.formObjectType.get("shift");
  }

  get isSpecific() {
    return this.formObjectType.get("isSpecific");
  }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<ObjectTypeFrmComponent>, private service: ObjectTypeData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();
    console.log(this.mode);
  }

  formBuilder() {
    this.formObjectType = this.fb.group({
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
          resetForm(this.formObjectType, res);
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

  buildObject(): ObjectType {
    let item = {} as ObjectType;
    item.id = this.id.value;
    item.header = this.header.value;
    item.description = this.description.value;
    item.money = this.money.value;
    item.slop = this.slop.value;
    item.shift = this.shift.value;
    item.isSpecific = this.isSpecific.value;
    return item;
  }

  save() {
    let item = this.buildObject();
    const result$ = (this.mode === FormModeEnum.CREATE) ? this.service.create(item) : this.service.update(item);

    result$.subscribe(
      {
        next: (res) => {
          console.log(res);
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
