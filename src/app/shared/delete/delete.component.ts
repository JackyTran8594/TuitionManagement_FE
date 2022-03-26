import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  data: string;

  constructor(private dialogRef: NbDialogRef<DeleteComponent>) {

  }

  ngOnInit(): void {
    this.data = "Bạn có chắc muốn xóa"
    if (this.content) {
      this.data = this.data + "" + this.content;
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(true);
  }
}
