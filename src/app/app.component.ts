import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './store/selectors/auth.selector';
import {logout} from './store/actions/auth.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	isLoggedIn$ = this.store
		.pipe(
			select(isLoggedIn)
		);

	constructor(
		private authService: AuthService,
		private store: Store
	) {}

	logout(): void {
		this.store.dispatch(logout());
	}
}
