import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateWeb]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateWebDirective,
      multi: true,
    },
  ],
})
export class ValidateWebDirective {

 
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (!value) {
      return {
        wrongWeb : 'wrongWeb'
      }
    }
    const correct = (value.startsWith('http://') || value.startsWith('https://')) && value.includes('.');
    if (!correct) {
      return {
        wrongWeb : 'wrongWeb'
      }
    }
    return null;
  }

}
