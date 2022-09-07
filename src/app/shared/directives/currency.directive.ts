import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxCurrency]'
})
export class CurrencyDirective implements OnInit {

  currencyChars = new RegExp('[\.,]', 'g'); // we're going to remove commas and dots

  constructor(private el:ElementRef, private renderer2: Renderer2, private decimalPipe: DecimalPipe) { }


  ngOnInit(): void {
    this.format(this.el.nativeElement.value)
  }

  @HostListener('input', ['$event.target.value'])
  onInput(e: string) {
    this.format(e);
  }

  @HostListener('paste',['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    this.format(event.clipboardData.getData('text/plain'));
  }

  format(val:string) {
    const numberFormat = parseInt(String(val).replace(this.currencyChars,''));

    // add commas
    const currency = this.decimalPipe.transform(numberFormat, '1.0');

    // replace the input value with formatted numbers
    this.renderer2.setProperty(this.el.nativeElement, 'value', currency);
  }

}
