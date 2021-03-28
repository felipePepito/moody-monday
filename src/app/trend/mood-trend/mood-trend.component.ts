import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {MoodState} from '../../model/mood-state.entity';
import {Observable} from 'rxjs';
import {getMoodStates} from '../../store/actions/mood-state.actions';
import {selectMoodStates} from '../../store/selectors/mood-state.selector';

@Component({
	selector: 'app-mood-trend',
	templateUrl: './mood-trend.component.html',
	styleUrls: ['./mood-trend.component.css']
})
export class MoodTrendComponent implements OnInit {

	moodStates: Observable<MoodState[]>;

	constructor(
		private store: Store<AppState>
	)	{}

	ngOnInit(): void {
		this.moodStates = this.store
			.pipe(
				select(selectMoodStates)
			);
		this.store.dispatch(getMoodStates());
	}

}
