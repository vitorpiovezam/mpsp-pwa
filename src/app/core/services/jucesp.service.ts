import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IJucespResponse, IJucespRequest } from '../forms/jucesp-form/jucesp.model';

@Injectable()
export class JucespService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(jucespRequest: IJucespRequest): Observable<IJucespResponse> {
    return this.http.post<IJucespResponse>(`${environment.apiUrl}`, jucespRequest);
  }

}