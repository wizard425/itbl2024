import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { SchoolClass } from '../dtos/SchoolClass';
import { HttpClient } from '@angular/common/http';
import { RanklistEntry } from '../dtos/RanklistEntry';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolclassService extends BaseService<SchoolClass> {

  constructor(protected override http: HttpClient) {
    super(http);
    this.setUrl("class");
  }

  getRanklist(schoolClassId: number): Observable<RanklistEntry[]> {
    return this.http.get<RanklistEntry[]>(environment.baseUrl + this.url + "/ranklist/" + schoolClassId);
  }


}
