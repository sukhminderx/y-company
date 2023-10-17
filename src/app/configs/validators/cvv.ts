import { AbstractControl, ValidationErrors } from '@angular/forms';

export const cvv = (control: AbstractControl): ValidationErrors | null => {
  return control.value.length !== 3 || Number.isNaN(+control.value)
    ? { wrongCVV: true }
    : null;
};
