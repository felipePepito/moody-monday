import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	isLoggedIn$ = this.authService.isLoggedIn$;

	constructor(
		private authService: AuthService
	) {}
}
