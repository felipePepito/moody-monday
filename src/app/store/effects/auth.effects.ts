import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../auth/auth.service';
import {login, loginSuccess, register, registerSuccess} from '../actions/auth.actions';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

	login = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(login),
				mergeMap(value =>
					this.authService.login(value.email, value.password)
						.pipe(
							map(user => loginSuccess({user}))
						)
				)
			);
		}
	);

	register = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(register),
				mergeMap(value =>
					this.authService.register(value.username, value.email, value.password)
						.pipe(
							tap(user => 	this.router.navigate(['mood-tracker'])),
							map(user => registerSuccess({user}))
						)
				)
			);
		}
	);

	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router
	) {
	}
}
