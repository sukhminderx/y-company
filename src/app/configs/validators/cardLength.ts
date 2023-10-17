import { AbstractControl, ValidationErrors } from '@angular/forms';

export const cardLength = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.length !== 16 || Number.isNaN(+control.value)
    ? { wrongCard: true }
    : null;
};
