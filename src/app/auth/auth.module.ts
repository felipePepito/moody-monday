import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
	declarations: [SignupComponent, RegisterComponent, LoginComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class AuthModule {
}
