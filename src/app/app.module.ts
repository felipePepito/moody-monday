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
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {AuthEffects} from './store/effects/auth.effects';
import {authReducer} from './store/reducer/auth.reducer';
import {WelcomeComponent} from './welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TrackModule,
		TrendModule,
		AuthModule,
		StoreModule.forRoot({
			moodStates: moodStateReducer,
			auth: authReducer
		}, {}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		EffectsModule.forRoot([
			MoodStateEffects,
			AuthEffects
		]),
		BrowserAnimationsModule
	],
	providers: [
		MoodStateService,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
