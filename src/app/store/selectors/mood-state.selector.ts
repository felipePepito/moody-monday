import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMoodState from '../reducer/mood-state.reducer';
import {adapter} from '../reducer/mood-state.reducer';

/*** Selector ***/
const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors();

const selectMoodStatesFeature = createFeatureSelector<fromMoodState.State>('moodStates');

export const selectMoodStates = createSelector(
	selectMoodStatesFeature,
	(moodStates) => selectAll(moodStates)
);

export const selectMoodStatesIds = createSelector(
	selectMoodStatesFeature,
	(moodStates) => selectIds(moodStates)
);
