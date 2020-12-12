import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMandatory]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MandatoryDirective,
      multi: true,
    },
  ],
})
export class MandatoryDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value) {
      return {
        empty : 'empty'
      }
    }
    return null;
  }


}
