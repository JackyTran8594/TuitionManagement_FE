import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { FormModeEnum } from '../../../common/enum/FormModeEnum';
import { Status, StatusList } from '../../../shared/other-object';
import { resetForm } from '../../../utils/utils';
import { FeeData } from '../../Fee/service/Fee';
import { Fee } from '../service/fee';

@Component({
  selector: 'ngx-fee-frm',
  templateUrl: './fee-frm.component.html',
  styleUrls: ['./fee-frm.component.scss']
})
export class FeeFrmComponent implements OnInit {

  formFee!: FormGroup;

  @Input() title: string = "";
  item: Fee = {
    id: 0,
    header: '',
    description: '',
    money: 0,
    fee_id: 0
  }
  @Input() mode: string = '';

  get id() {
    return this.formFee.get("id");
  }

  get header() {
    return this.formFee.get("header");
  }

  get description() {
    return this.formFee.get("description");
  }

  get money() {
    return this.formFee.get("money");
  }

  get fee_id() {
    return this.formFee.get("fee_id");
  }

  // listStatus: Status[] = []

  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private dialogRef: NbDialogRef<FeeFrmComponent>, private service: FeeData) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();

  }

  formBuilder() {
    this.formFee = this.fb.group({
      id: this.fb.control(0, []),
      header: this.fb.control(0, []),
      description: this.fb.control(0, [Validators.maxLength(1000)]),
      money: this.fb.control(0, []),
      fee_id: this.fb.control(0, [])
    })
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res) {
          resetForm(this.formFee, this.item);
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
