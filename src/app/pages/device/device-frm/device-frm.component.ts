import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Subject } from 'rxjs';
import { Device, DeviceData } from '../service/device';

@Component({
  selector: 'ngx-device-frm',
  templateUrl: './device-frm.component.html',
  styleUrls: ['./device-frm.component.scss']
})
export class DeviceFrmComponent implements OnInit, OnDestroy {

  @Input() title: string = "";
  @Input() item: Device = {}
  @Input() view: Boolean;
  @Input() create: Boolean;
  @Input() update: Boolean;
  
  protected readonly unsubcribe$ = new Subject<void>();

  constructor(private dialogRef: NbDialogRef<DeviceFrmComponent>, private service: DeviceData) { }
 
  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  ngOnInit(): void {
    // if(this.view) {
       
    // }
    // if(this.update) {
       
    // }
    // if(this.create) {
       
    // }
  }


  close() {
    this.dialogRef.close();
  }

  save() {
    if(this.create) {
      this.service.create(this.item).subscribe(res => {
        console.log(res);
        if(res) {
          this.dialogRef.close(res);
        }
      });
    }
    if(this.update) {
      this.service.update(this.item).subscribe(res => {
        console.log(res);
        if(res) {
          this.dialogRef.close(res);
        }
      });
    }
    
    
  }

}
