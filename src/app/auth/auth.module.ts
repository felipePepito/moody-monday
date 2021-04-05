import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
	declarations: [SignupComponent, RegisterComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class AuthModule {
}
