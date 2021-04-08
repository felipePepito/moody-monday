import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../auth/auth.service';
import {login, loginSuccess, logout, logoutSuccess, register, registerSuccess} from '../actions/auth.actions';
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
							map(user => loginSuccess({user})),
							tap(user => this.router.navigate(['mood-tracker']) )
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
							map(user => registerSuccess({user})),
							tap(user => 	this.router.navigate(['mood-tracker']))
						)
				)
			);
		}
	);

	logout = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(logout),
				tap(() => this.router.navigate([''])),
				map(() => logoutSuccess())
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
