import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MoodState} from '../../model/mood-state.entity';
import {Action, createReducer, on} from '@ngrx/store';
import * as MoodStateActions from '../actions/mood-state.actions';


/*** Entity Adapter ***/
export function compareByDate(a: MoodState, b: MoodState): number {
	// sort older states before younger states
	return a.date.getTime() - b.date.getTime();
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
	on(MoodStateActions.createMoodStateSuccess, (state, {moodState}) => {
		return adapter.addOne(moodState, state);
	}),
	on(MoodStateActions.getMoodStatesSuccess, (state, {moodStates}) => {
		return adapter.addMany(moodStates, state);
	})
);



