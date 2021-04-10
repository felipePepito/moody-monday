import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {register} from '../../store/actions/auth.actions';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	registerForm = new FormGroup({
		username: new FormControl('', [Validators.required, Validators.minLength(2)]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)])
	});

	constructor(
		private store: Store
	) {}


	onSubmit(): void {
		this.store.dispatch(register({
			username: this.registerForm.get('username').value,
			email: this.registerForm.get('email').value,
			password: this.registerForm.get('password').value
		}));
	}


	ngOnInit(): void {
	}

	get username(): AbstractControl {return this.registerForm.get('username'); }
	get email(): AbstractControl { return this.registerForm.get('email'); }
	get password(): AbstractControl { return this.registerForm.get('password'); }

}
