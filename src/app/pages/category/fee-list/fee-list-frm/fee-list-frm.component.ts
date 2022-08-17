import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../../common/enum/FormModeEnum';
import { resetForm } from '../../../../utils/utils';
import { FeeList, FeeListData } from '../service/fee';

@Component({
  selector: 'ngx-fee-list-frm',
  templateUrl: './fee-list-frm.component.html',
  styleUrls: ['./fee-list-frm.component.scss']
})
export class FeeListFrmComponent implements OnInit {

  formFeeList!: FormGroup;

  @Input() title: string = "";
  item: FeeList = {
    id: 0,
    header: '',
    description: '',
    money: 0,
    isChecked: false
  }

  @Input() mode: string = '';

  get id() {
    return this.formFeeList.get("id");
  }

  get header() {
    return this.formFeeList.get("header");
  }

  get description() {
    return this.formFeeList.get("description");
  }

  get money() {
    return this.formFeeList.get("money");
  }


  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<FeeListFrmComponent>, private service: FeeListData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();

  }

  formBuilder() {
    this.formFeeList = this.fb.group({
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
          resetForm(this.formFeeList, this.item);
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
