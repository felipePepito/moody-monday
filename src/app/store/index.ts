import * as fromMoodState from './reducer/mood-state.reducer';
import * as fromAuthState from './reducer/auth.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
	moodStates: fromMoodState.State;
	authState: fromAuthState.State;
}

export const reducers: ActionReducerMap<AppState> = {
	moodStates: fromMoodState.moodStateReducer,
	authState: fromAuthState.authReducer
};

