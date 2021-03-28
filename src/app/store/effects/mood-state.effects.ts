import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MoodStateService} from '../../services/mood-state.service';
import {createMoodState, createMoodStateSuccess, getMoodStates, getMoodStatesSuccess} from '../actions/mood-state.actions';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class MoodStateEffects {

	getMoodStates = createEffect(
		() => this.actions$.pipe(
			ofType(getMoodStates),
			mergeMap(() => this.moodStateService.getMoodStates()
				.pipe(
					map(moodStates => getMoodStatesSuccess({moodStates})),
					// TODO Add Error Handling
				))
		)
	);

	createMoodState = createEffect(
		() => this.actions$.pipe(
			ofType(createMoodState),
			mergeMap((moodState) => this.moodStateService.createMoodState(moodState)
				.pipe(
					map(moodState => createMoodStateSuccess({moodState}))
					// TODO Add Error Handling
				))
		)
	);

	constructor(
		private actions$: Actions,
		private moodStateService: MoodStateService
	) {}


}
