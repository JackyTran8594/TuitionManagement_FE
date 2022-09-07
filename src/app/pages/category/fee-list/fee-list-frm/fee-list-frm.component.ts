import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { ResponseStatus } from '../../../../@core/constant/responseStatusEnum';
import { FormModeEnum } from '../../../../common/enum/formModeEnum';
import { resetForm } from '../../../../utils/utils';
import { FeeList, FeeListData } from '../service/fee';

@Component({
  selector: 'ngx-fee-list-frm',
  templateUrl: './fee-list-frm.component.html',
  styleUrls: ['./fee-list-frm.component.scss']
})
export class FeeListFrmComponent implements OnInit {

  formFeeList!: FormGroup;
  @Input() feeListId!: number;

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

  constructor(private fb: FormBuilder,
    private dialogRef: NbDialogRef<FeeListFrmComponent>,
    private service: FeeListData,
    private toastrService: NbToastrService) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();
    if (this.feeListId) {
      this.getById(this.feeListId);
    }
  }

  formBuilder() {
    this.formFeeList = this.fb.group({
      id: [null, []],
      header: ['', []],
      description: ['', []],
      money: ['', []],
      isChecked: [false, []],
    })
  }

  buildObject(): FeeList {
    let item = {} as FeeList;
    item.id = this.id.value;
    item.header = this.header.value;
    item.description = this.description.value;
    console.log(this.money.value.replace(/[,]/g,''));
    item.money = Number(this.money.value.replace(/[,]/g,''));
    return item;
  }



  getById(id) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res.result === ResponseStatus.OK) {
          resetForm(this.formFeeList, res.data);
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

  save() {
    let item = this.buildObject();
    const result$ = (this.mode === FormModeEnum.CREATE) ? this.service.create(item) : this.service.update(item);

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
