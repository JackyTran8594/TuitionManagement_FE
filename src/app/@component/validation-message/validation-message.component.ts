import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-validation-message',
  styleUrls: ['./validation-message.component.scss'],
  template: `
  <ng-container>
    <div class="warning">
    <span class="caption status-danger"
      *ngIf="showMinLength"> Min {{ label }} length is {{ minLength }} symbols </span>
    <span class="caption status-danger"
      *ngIf="showMaxLength"> Max {{ label }} length is {{ maxLength }} symbols </span>
    <span class="caption status-danger" *ngIf="showPattern"> Incorrect {{ label }} </span>
    <span class="caption status-danger" *ngIf="showRequired"> {{ label }} is required</span>
    <span class="caption status-danger" *ngIf="showMin">Min value of {{ label }} is {{ min }}</span>
    <span class="caption status-danger" *ngIf="showMax">Max value of {{ label }} is {{ max }}</span>
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
