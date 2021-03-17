import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TrackModule} from './track/track.module';
import {TrendModule} from './trend/trend.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TrackModule,
		TrendModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
