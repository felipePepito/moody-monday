import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {register} from '../../store/actions/auth.actions';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	registerForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl('')
	});

	onSubmit(): void {
	this.store.dispatch(register({
		username: this.registerForm.get('username').value,
		email: this.registerForm.get('email').value,
		password: this.registerForm.get('password').value
	}));
	}


	constructor(
		private store: Store
	) {}

	ngOnInit(): void {
	}

}
