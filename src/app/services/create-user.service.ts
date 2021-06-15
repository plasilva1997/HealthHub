import {Injectable} from '@angular/core';
import {RegisterModel} from '../models/register.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private url: string = 'http://localhost:3000/adduser';

  constructor(public http: HttpClient) {
  }

  add(user: RegisterModel) {
    return this.http.post<RegisterModel>(this.url, user);
  }
}
