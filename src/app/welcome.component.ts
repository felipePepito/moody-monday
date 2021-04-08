import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './store/selectors/auth.selector';
import {logout} from './store/actions/auth.actions';

@Component({
	selector: 'app-welcome',
	template: '' +
		'<h1>Welcome to the MoodState App!</h1>' +
		'<p>Please Log in or Register to continue.</p>'
})
export class WelcomeComponent {

}
