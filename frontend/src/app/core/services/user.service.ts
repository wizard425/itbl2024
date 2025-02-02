import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import User from '../dtos/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(protected override http: HttpClient) {
    super(http);
    this.setUrl("user");
  }

  addToClass(userId: number, className: string): Observable<User> {
    return this.http.get<User>(environment.baseUrl + this.url + "/addToClass/" + userId + "/" + className);
  }

  addPoints(userId: number, points: number): Observable<User> {
    return this.http.get<User>(environment.baseUrl + this.url + "/addpoints/" + userId + "/" + points);
  }

}
