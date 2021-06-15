import {Injectable} from '@angular/core';

import {Plugins} from '@capacitor/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, switchMap, tap} from "rxjs/operators";

const {Storage} = Plugins;
const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  //Function qui permet recuperer le token pour la connection
  async loadToken() {
    const token = await Storage.get({key: TOKEN_KEY});
    if (token && token.value) {
      console.log('set token :', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  //Function qui permet au utilizateur de se connecter
  login(credentials: { email, password }): Observable<any> {
    return this.http.post('https://reqres.in/api/login', credentials).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      })
    )
  }

  //Function qui permet au utilizateur de se creér un compte
  register(credentials: { email, password }): Observable<any> {
    return this.http.post('https://reqres.in/api/register', credentials).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      })
    )
  }

  //Function qui permet au utilizateur de se creér un compte
  // delete(credentials: { email, password }): Observable<any> {
  //   return this.http.delete('https://reqres.in/api/register', credentials).pipe(
  //     map((data: any) => data.token),
  //     switchMap(token => {
  //       return from(Storage.set({key: TOKEN_KEY, value: token}));
  //     })
  //   )
  // }

  //Function qui permet au utilizateur de se déconnecter
  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }
}
