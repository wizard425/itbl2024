import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { LevenshteinDTO } from '../dtos/LevenshteinDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlinePasswordService extends BaseService<LevenshteinDTO> {

  constructor(http: HttpClient) {
    super(http);
  }


  getLevenshteinDistanceToCommonPWD(passwordToCheck: string): Observable<number>{
    const dto : LevenshteinDTO = {
      password : passwordToCheck
    }
    let ret = this.http.post<number>(environment.baseUrl + "password/levenshtein" , dto);
    if (ret == null)
      throw Error("Fehler");
    
    return ret;
  }

}
