import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { ShareService } from '../../../shared/share.service';

@Component({
  selector: 'ngx-import-xml',
  templateUrl: './import-xml.component.html',
  styleUrls: ['./import-xml.component.scss']
})
export class ImportXmlComponent implements OnInit {

  title!: string;
  file!: File;

  constructor(
    private dialogRef: NbDialogRef<ImportXmlComponent>,
    private shareService: ShareService,
    private toastrService: NbToastrService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
 
  }

  onChangeFile(event) {
    console.log(event.target.files);
    this.file = event.target.files[0];
  }

  save() {
    if(this.file) {
      this.shareService.uploadFile(this.file, 'student/importFileXml').subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
  
        }
      })
    } else {
      this.toastrService.show(
        "Cảnh báo",
        "Bạn chưa chọn file",
        {
          status: "warning",
          destroyByClick: true,
          duration: 2000,
        });
    }
 
  }

  close() {
    this.dialogRef.close();
  }

}
