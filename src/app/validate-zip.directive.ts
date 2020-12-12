import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateZip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateZipDirective,
      multi: true,
    },
  ],
})
export class ValidateZipDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value || value.length != 6 || value.startsWith('0')) {
      return {
        wrongZip : 'wrongZip'
      }
    }
    return null;
  }

}
