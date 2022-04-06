import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  txtSearch = "";
  pageSize: number = 10;
  pageNumber:number = 1;
  totalItems:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  search() {

  }

  changePageSize(event) {

  }

  pageChanged(event) {

  }

  onCreate() {

  }

  onDeleteAll(event) {

  }

}
