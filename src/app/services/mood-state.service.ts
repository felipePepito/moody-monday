import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {MoodState} from '../model/mood-state.entity';
import {map} from 'rxjs/operators';

@Injectable()
export class MoodStateService {

	private apiUrl = environment.apiUrl + 'mood-state/';

	constructor(
		private http: HttpClient
	) {}

	getMoodStates(): Observable<MoodState[]> {
		return this.http.get<MoodState[]>(this.apiUrl)
			.pipe(
				map(moodStates => {
					for(let moodState of moodStates) {
						moodState.date = new Date(moodState.date);
					}
					return moodStates;

				})
			);
	}

	createMoodState(props: {moodState: MoodState}): Observable<any> {
		return this.http.post<MoodState>(this.apiUrl, props.moodState)
			.pipe(
				map(moodState => {
					moodState.date = new Date(moodState.date);
					return moodState;
				})
			);
	}

}
