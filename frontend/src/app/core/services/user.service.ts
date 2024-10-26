import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import User from '../dtos/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(protected override http: HttpClient) {
    super(http);
    this.setUrl("user");
   }



}
