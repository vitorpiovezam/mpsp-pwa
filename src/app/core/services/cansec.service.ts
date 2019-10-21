import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ICensecResponse, ICensecRequest } from '../forms/censec-form/censec.model';

@Injectable()
export class CensecService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(censecRequest: ICensecRequest): Observable<ICensecResponse> {
    return this.http.post<ICensecResponse>(`${environment.apiUrl}`, censecRequest);
  }

}