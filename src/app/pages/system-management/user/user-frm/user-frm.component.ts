import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Status, StatusList, UserType, UserTypes } from '../../../../shared/other-object';
import { User, UserData } from '../service/user';

@Component({
  selector: 'ngx-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.scss']
})
export class UserFrmComponent implements OnInit {

  @Input() title: string = '';
  @Input() create: boolean;
  @Input() update: boolean;
  @Input() view: boolean;
  item: User = {};
  UserTypes: UserType[] = [];
  listStatus: Status[] = [];
  selected: number;
  selectedStatus: number;
  
  passwordCheck: any = {};

  constructor(private dialogRef: NbDialogRef<UserFrmComponent>, private service: UserData) { }

  ngOnInit(): void {
    if (this.create) {
      this.selected = 5;
      this.selectedStatus = 0;
    }
    this.UserTypes = UserTypes;
    this.listStatus = StatusList;
  }

  close() {
    this.dialogRef.close();
  }

  onCheckPassword(item) {
    if (this.item.password == item) {
      return true;
    }
    return false;
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
