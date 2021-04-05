import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user.entity';
import {map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const ANONYMOUS_USER: User = {
	id: undefined,
	username: undefined,
	email: undefined,
	jwt: undefined
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

	user$: Observable<User> = this.subject.asObservable();

	isLoggedIn$: Observable<boolean> = this.user$.pipe(
		map(user => !!user.id)
	);

	constructor(
		private http: HttpClient
	) {
	}

	signUp(email: string, password: string): Observable<User> {
		return this.http.post<User>(environment.apiUrl + 'user/signup/', {email, password})
			.pipe(
				shareReplay(),
				tap(user => this.subject.next(user))
			);
	}

	login(email: string, password: string): Observable<User> {
		return this.http.post<User>(
			environment.apiUrl + 'auth/login/',
			{email, password}
			)
			.pipe(
				shareReplay()
			);
	}

	register(username: string, email: string, password: string): Observable<User> {
		return this.http.post<User>(
			environment.apiUrl + 'auth/register/',
			{username, email, password}
			)
			.pipe(
				shareReplay()
			);
	}
}
