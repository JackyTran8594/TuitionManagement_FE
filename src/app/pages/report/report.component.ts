import { Component, OnInit } from '@angular/core';
import { Student } from '../student/service/student';
import { Report, ReportData } from './service/report';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private service: ReportData) { }

  ngOnInit(): void {
    this.searchData();
  }

  currentPage: number = 1;
  pageSize: number = 10;
  txtSearch: string = '';
  // page from server
  size = 0
  totalPages = 0;
  totalElements = 0;
  //
  listData: Report[] = []

  searchData() {
    this.service.paging(this.currentPage, this.pageSize, this.txtSearch).subscribe({
      next: (res) => {
        console.log(res);
        this.listData = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  changePageSize(event) {
    console.log(event);
    if (event != this.size) {
      this.currentPage = 1;
    }
    this.searchData();
  }

  pageChanged(page: any) {
    this.currentPage = page;
    this.searchData();
  }



}
