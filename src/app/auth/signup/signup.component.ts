import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	form: FormGroup;
	constructor(
		private fb: FormBuilder,
		private authService: AuthService
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
			confirm: ['', Validators.required]
		});
	}

	ngOnInit(): void {
	}

	signUp(): void {
		const val = this.form.value;
		if (val.email && val.password && val.password === val.confirm) {
			this.authService.signUp(val.email, val.password)
				.subscribe(
					() => console.log('User created successfully'),
					() => console.log('Error while creating user')
				);
		}
	}

}
