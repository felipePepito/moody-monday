import * as fromMoodState from './reducer/mood-state.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
	moodStates: fromMoodState.State;
}

export const reducers: ActionReducerMap<AppState> = {
	moodStates: fromMoodState.moodStateReducer,
};

export const selectMoodStates = createFeatureSelector<fromMoodState.State>('moodStates');

export const getMoodStates = createSelector(
	selectMoodStates,
	(moodStates) => fromMoodState.selectAllMoodStates(moodStates)
);

export const getMoodStatesIds = createSelector(
	selectMoodStates,
	(moodStates) => fromMoodState.selectMoodStatesIds(moodStates)
);
