import {Component, OnInit} from '@angular/core';
import {MoodState} from '../../model/mood-state.entity';
import {select, Store} from '@ngrx/store';
import {createMoodState} from '../../store/actions/mood-tracker.actions';
import {getMoodStatesIds} from '../../store';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
	selector: 'app-mood-tracker',
	templateUrl: './mood-tracker.component.html',
	styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent implements OnInit {

	moodState: MoodState;
	ids: Observable<string[] | number[]>;

	constructor(private store: Store) {

	}

	ngOnInit(): void {
		this.moodState = {
			id: 0,
			date: new Date(),
			valence: 0,
			arousal: 0,
			sadness: 0,
			anger: 0,
		};
		this.ids = this.store.pipe(
			select(getMoodStatesIds)
		);
	}

	submitMoodState(): void {

		this.ids
			.pipe(first())
			.subscribe(
			list => {
				const moodState: MoodState = { ... this.moodState };
				if (list[0] === undefined) {
					moodState.id = 0;
				} else {
					moodState.id = Number(list[0]) + 1;
				}
				this.store.dispatch(createMoodState({moodState}));
			});
	}

}
