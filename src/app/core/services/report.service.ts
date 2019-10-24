import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ICensecResponse, ICensecRequest } from '../forms/censec-form/censec.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class ReportService {
  constructor(private http: HttpClient){ }

  getReports(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/reports`);
  }

}