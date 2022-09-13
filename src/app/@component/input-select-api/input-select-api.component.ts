import { Component, EventEmitter, forwardRef, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-input-select-api',
  templateUrl: './input-select-api.component.html',
  styleUrls: ['./input-select-api.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectApiComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSelectApiComponent),
      multi: true
    }
  ]
})
export class InputSelectApiComponent implements OnInit, ControlValueAccessor, OnDestroy, OnChanges {

  @Input() apiParams: any = {};
  @Input() hidden: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() allowClear = true;
  @Input() allowSearch = true;
  @Input() selectedItem: any = {}
  @Input() placeHolder: string = '';
  @Input() classControl: any = '';
  @Input() items: any[] = [];

  @Output('onChange') eventOnChange = new EventEmitter<any>();
  @Output('onBlur') eventOnBlur = new EventEmitter<void>();

  public controlValue: any | null = null;
  public isLoading = false;
  public isInit = false;
  public listOption: any[] = [];
  public searchChange$ = new BehaviorSubject('');
  public searchPage$ = new BehaviorSubject(1);

  constructor() { }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
