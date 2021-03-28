import * as fromMoodState from './reducer/mood-state.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
	moodStates: fromMoodState.State;
}

export const reducers: ActionReducerMap<AppState> = {
	moodStates: fromMoodState.moodStateReducer,
};

