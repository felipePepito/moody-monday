import {Component, OnInit} from '@angular/core';
import {MoodState} from '../../model/mood-state.entity';
import {Store} from '@ngrx/store';
import {createMoodState} from '../../store/actions/mood-state.actions';
import {AppState} from '../../store';

@Component({
	selector: 'app-mood-tracker',
	templateUrl: './mood-tracker.component.html',
	styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent implements OnInit {

	moodState: MoodState;

	constructor(
		private store: Store<AppState>
	) {}

	ngOnInit(): void {
		this.moodState = {
			id: undefined,
			date: new Date(),
			valence: 4,
			arousal: 4,
			sadness: 4,
			anger: 4
		};
	}

	submitMoodState(): void {
		const moodState: MoodState = { ... this.moodState };
		this.store.dispatch(createMoodState({moodState}));
	}

}
