import {Component, OnInit} from '@angular/core';
import {select, State, Store} from '@ngrx/store';
import {AppState, getMoodStates} from '../../store';
import {MoodState} from '../../model/mood-state.entity';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-mood-trend',
	templateUrl: './mood-trend.component.html',
	styleUrls: ['./mood-trend.component.css']
})
export class MoodTrendComponent implements OnInit {

	moodStates: Observable<MoodState[]>;

	constructor(private store: Store<AppState>) {
	}

	ngOnInit(): void {
		this.moodStates = this.store
			.pipe(
				select(getMoodStates)
			);
	}

}
