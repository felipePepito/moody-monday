import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MoodState} from '../../model/mood-state.entity';
import {Action, createReducer, on} from '@ngrx/store';
import * as MoodTrackerActions from '../actions/mood-tracker.actions';
import * as MoodTrendActions from '../actions/mood-trend.actions';



/*** Entity Adapter ***/
export function compareByDate(a: MoodState, b: MoodState): number {
	// sort older states before younger states
	return b.date.getTime() - a.date.getTime();
}
export const adapter: EntityAdapter<MoodState> = createEntityAdapter<MoodState>({
	sortComparer: compareByDate
});

/*** Entity State ***/
export interface State extends EntityState<MoodState> {
}
export const initialState: State = adapter.getInitialState();


/*** Reducer ***/
export const moodStateReducer = createReducer(
	initialState,
	on(MoodTrackerActions.createMoodState, (state, {moodState}) => {
		return adapter.addOne(moodState, state);
	})
);


/*** Selector ***/
const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal
} = adapter.getSelectors();

export const selectMoodStatesIds = selectIds;
export const selectAllMoodStates = selectAll;
