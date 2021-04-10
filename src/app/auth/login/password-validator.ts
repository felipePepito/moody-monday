import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidatorCreator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {

		const value = control.value;

		if (!value) {
			return null;
		}

		const hasUppercase = /[A-Z]/.test(value);
		const hasLowercase = /[a-z]/.test(value);
		const hasNumber = /[0-9]/.test(value);
		const length = value.length >= 8;

		const isValid = hasUppercase && hasLowercase && hasNumber && length;
		return isValid ? null : {passwordStrength: true};
	};
}
