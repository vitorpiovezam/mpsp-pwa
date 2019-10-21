import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ISitelResponse, ISitelRequest } from '../forms/sitel-form/sitel.model';

@Injectable()
export class SitelService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(sitelRequest: ISitelRequest): Observable<ISitelResponse> {
    return this.http.post<ISitelResponse>(`${environment.apiUrl}`, sitelRequest);
  }

}