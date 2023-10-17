import { AbstractControl, ValidationErrors } from '@angular/forms';

export const verifyPass = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')!;
  const confirm = control.get('confirm')!;

  return password.value !== confirm.value ? { mismatch: true } : null;
};
