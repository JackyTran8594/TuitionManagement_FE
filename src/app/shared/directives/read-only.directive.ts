import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxReadOnly]'
})
export class ReadOnlyDirective implements OnInit {

  @Input() ngxReadOnly;
  constructor(private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.setNgxReadOnly(this.ngxReadOnly);
  }

  private setNgxReadOnly(item: any) {
    if (item == true) {
      this.renderer2.setAttribute(this.el.nativeElement, 'readonly', '');
    }
  }


}
