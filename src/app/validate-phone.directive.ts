import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidatePhone]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatePhoneDirective,
      multi: true,
    },
  ],
})
export class ValidatePhoneDirective {


  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let value = control.value as string;
    const pattern = new RegExp(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/);
    if (!pattern.test(value)) {
      //ошибка валидации
      return {
        wrongPhone: 'wrongPhone'
      };
    }
    return null;
  }
}
