import {createAction, props} from '@ngrx/store';
import {User} from '../../model/user.entity';

export const register = createAction(
	'[Register Component] Register',
	props<{username: string, email: string, password: string}>()
);

export const login = createAction(
	'[Login Component] Login',
	props<{email: string, password: string}>()
);

export const logout = createAction(
	'[App Component] Logout'
);

export const registerSuccess = createAction(
	'[Auth API] Register Success',
	props<{user: User}>()
);

export const loginSuccess = createAction(
	'[Auth API] Login Success',
	props<{user: User}>()
);
