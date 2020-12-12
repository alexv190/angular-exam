import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appValidateEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateEmailDirective,
      multi: true,
    },
  ],
})
export class ValidateEmailDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value || !value.includes('@')) {
      return {
        wrongEmail: 'wrongEmail',
      };
    }
    return null;
  }
}
