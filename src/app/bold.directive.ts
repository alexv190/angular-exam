import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  @HostBinding('style.font-weight')
  styleFont = "bold";

  constructor() { }

}
