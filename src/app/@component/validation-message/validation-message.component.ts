import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-validation-message',
  styleUrls: ['./validation-message.component.scss'],
  template: `
  <ng-container>
    <div class="warning">
    <span class="caption status-danger"
      *ngIf="showMinLength"> Tối thiểu trường {{ label }} là {{ minLength }} ký tự </span>
    <span class="caption status-danger"
      *ngIf="showMaxLength"> Tối đa trường {{ label }} là {{ maxLength }} ký tự </span>
    <span class="caption status-danger" *ngIf="showPattern"> Sai định dạng trường {{ label }} </span>
    <span class="caption status-danger" *ngIf="showRequired">Trường {{ label }} là bắt buộc</span>
    <span class="caption status-danger" *ngIf="showMin">Giá trị tối thiểu của {{ label }} là {{ min }}</span>
    <span class="caption status-danger" *ngIf="showMax">Giá trị tối đa của {{ label }} là {{ max }}</span>
  </div>
</ng-container>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidationMessageComponent),
      multi: true,
    }
  ]
})
export class ValidationMessageComponent {

  @Input() label: string = '';
  @Input() showRequired?: boolean;
  @Input() min?: number;
  @Input() showMin?: boolean;
  @Input() max?: boolean;
  @Input() showMax?: boolean;
  @Input() minLength?: boolean;
  @Input() showMinLength?: boolean;
  @Input() maxLength?: number;
  @Input() showMaxLength?: boolean;
  @Input() showPattern?: boolean;


}
