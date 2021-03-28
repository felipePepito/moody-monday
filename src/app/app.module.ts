import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrackModule} from './track/track.module';
import {TrendModule} from './trend/trend.module';
import {StoreModule} from '@ngrx/store';
import {moodStateReducer} from './store/reducer/mood-state.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {MoodStateService} from './services/mood-state.service';
import {MoodStateEffects} from './store/effects/mood-state.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TrackModule,
		TrendModule,
		StoreModule.forRoot({
			moodStates: moodStateReducer
		}, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([
			MoodStateEffects
		])
	],
	providers: [
		MoodStateService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
