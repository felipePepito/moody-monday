import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoodTrackerComponent} from './track/mood-tracker/mood-tracker.component';
import {MoodTrendComponent} from './trend/mood-trend/mood-trend.component';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {WelcomeComponent} from './welcome.component';

const routes: Routes = [
	{path: '', component: WelcomeComponent},
	{path: 'mood-tracker', component: MoodTrackerComponent},
	{path: 'mood-trend', component: MoodTrendComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'logout', component: WelcomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
