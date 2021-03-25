import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoodTrackerComponent} from './mood-tracker/mood-tracker.component';
import {FormsModule} from '@angular/forms';


@NgModule({
	declarations: [MoodTrackerComponent],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class TrackModule {
}
