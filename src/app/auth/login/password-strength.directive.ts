import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {passwordValidatorCreator} from './password-validator';

@Directive({
	selector: '[appPasswordStrength]',
	providers: [{
		provide: NG_VALIDATORS,
		useExisting: PasswordStrengthDirective,
		multi: true
	}]
})
export class PasswordStrengthDirective implements Validator {
	validate(control: AbstractControl): ValidationErrors | null {
		console.log('directive called');
		return passwordValidatorCreator()(control);
	}
}
