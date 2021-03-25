import {createAction, props} from '@ngrx/store';
import {MoodState} from '../../model/mood-state.entity';

export const createMoodState = createAction(
	'[MoodTracker Component] Create MoodState',
	props<{ moodState: MoodState }>()
);

