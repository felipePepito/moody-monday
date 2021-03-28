import {createAction, props} from '@ngrx/store';
import {MoodState} from '../../model/mood-state.entity';

export const getMoodStates = createAction(
	'[MoodTrend Component] Get MoodStates'
);

export const getMoodStatesSuccess = createAction(
	'[MoodState API] MoodStates Loaded Success',
	props<{moodStates: MoodState[]}>()
);

export const createMoodState = createAction(
	'[MoodTracker Component] Create MoodState',
	props<{ moodState: MoodState }>()
);

export const createMoodStateSuccess = createAction(
	'[MoodState API] MoodState Created Success',
	props<{moodState: MoodState }>()
);
