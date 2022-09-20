import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchParam } from '../../shared/searchParam';
import { TrainClass, TrainClassData } from '../category/train-class/service/train-class';
import { Student } from '../student/service/student';
import { Report, ReportData } from './service/report';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private service: ReportData,
    private trainClassService: TrainClassData) { }

  ngOnInit(): void {
    this.searchData();
  }

  searchParam: SearchParam = {}

  trainClass: TrainClass[] = []

  currentPage: number = 1;
  pageSize: number = 10;
  txtSearch: string = '';
  // page from server
  size = 0
  totalPages = 0;
  totalElements = 0;
  //
  listData: Report[] = [];

  //
  @ViewChild('advancedSearch', { static: true }) accordion;
  toggleOn: boolean;
  toggleOff: boolean;


  toggleSearch() {
    this.accordion.toggle();
    this.toggleOn = !this.toggleOn;
    this.toggleOff = !this.toggleOff;
  }

  getDataCombo() {
    this.trainClassService.getAll().subscribe({
      next: (res) => {
        this.trainClass = res.listData;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  searchData() {
    this.service.paging(this.currentPage, this.pageSize, this.searchParam).subscribe({
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


  onRefresh() {
    this.searchParam = {};
    this.searchData();
  }

  exportExcel() {
    this.service.exportExcel(this.searchParam).subscribe({
      next: (res) => {
        console.log(res);
        let dataType = res.type;
        let binaryData = [];
        binaryData.push(res);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
        downloadLink.setAttribute('download', "Báo cáo" + "_" + new Date().getTime() + ".xlsx")
        document.body.appendChild(downloadLink);
        downloadLink.click();

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onView() {

  }



}
