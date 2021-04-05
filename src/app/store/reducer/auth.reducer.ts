import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../../model/user.entity';
import {createReducer, on} from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface State extends EntityState<User> {}
export const initialState: State = adapter.getInitialState();

export const authReducer = createReducer(
	initialState,
	on(AuthActions.loginSuccess, (state, {user}) =>
		adapter.addOne(user, state)
	),
	on(AuthActions.registerSuccess, (state, {user}) =>
		adapter.addOne(user, state)
	),
	on(AuthActions.logout, state =>
		adapter.removeAll(state)
	)
);


