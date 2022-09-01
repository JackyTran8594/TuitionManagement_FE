import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { ResponseStatus } from '../../../../@core/constant/responseStatusEnum';
import { FormModeEnum } from '../../../../common/enum/formModeEnum';
import { resetForm } from '../../../../utils/utils';
import { TrainClass, TrainClassData } from '../service/train-class';

@Component({
  selector: 'ngx-train-class-frm',
  templateUrl: './train-class-frm.component.html',
  styleUrls: ['./train-class-frm.component.scss']
})
export class TrainClassFrmComponent implements OnInit {

  formTrainClass!: FormGroup;
  @Input() trainClassId!: number;

  @Input() title: string = "";
  item: TrainClass = {
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

  constructor(private fb: FormBuilder,
    private dialogRef: NbDialogRef<TrainClassFrmComponent>,
    private service: TrainClassData,
    private toastrService: NbToastrService) { }

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    this.formBuilder();
    if (this.trainClassId) {
      this.getById(this.trainClassId);
    }
  }

  formBuilder() {
    this.formTrainClass = this.fb.group({
      id: [null, []],
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
        if (res.result === ResponseStatus.OK) {
          resetForm(this.formTrainClass, res.data);
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

  addTrainClass() {
    let trainClass = {} as TrainClass;
    trainClass.id = this.id.value;
    trainClass.header = this.header.value;
    trainClass.description = this.description.value;
    trainClass.money = this.money.value;
    // trainClass.status = this.s

    return trainClass;
  }

  save() {

    let item = this.addTrainClass();

    // console.log(this.item);
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
