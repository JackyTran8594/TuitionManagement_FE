import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Status, StatusList } from '../../../../shared/other-object';
import { Account, AccountData } from '../service/account';

@Component({
  selector: 'ngx-account-frm',
  templateUrl: './account-frm.component.html',
  styleUrls: ['./account-frm.component.scss']
})
export class AccountFrmComponent implements OnInit {


  @Input() title: string = '';
  @Input() create: boolean;
  @Input() update: boolean;
  @Input() view: boolean;
  item: Account = {};
  listStatus: Status[] = [];
  selected: number;
  selectedStatus: number;
  
  passwordCheck: any = {};

  constructor(private service: AccountData, private dialogRef: NbDialogRef<AccountFrmComponent>) { }

  ngOnInit(): void {
    if (this.create) {
      // this.selected = 5;
      // this.selectedStatus = 0;
    }
    this.listStatus = StatusList;
  }

  close() {
    this.dialogRef.close();
  }

 
  save() {
    if (this.create) {
      this.service.create(this.item).subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      });
    }
    if (this.update) {
      this.service.update(this.item).subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);
      });
    }
  }
}
