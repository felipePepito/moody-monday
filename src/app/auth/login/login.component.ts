import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {login} from '../../store/actions/auth.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl('', [Validators.email, Validators.required]),
		password: new FormControl('', [Validators.required])
	});

	constructor(
		private store: Store
	) {}

	onSubmit(): void {
		this.store.dispatch(login({
			email: this.loginForm.get('email').value,
			password: this.loginForm.get('password').value
		}));
	}

	ngOnInit(): void {
	}

	get email(): AbstractControl { return this.loginForm.get('email'); }
	get password(): AbstractControl { return this.loginForm.get('password'); }
}
