import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ISivecRequest, ISivecResponse } from '../forms/sivec-form/sivec.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class SivecService implements BaseResourceService{
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(sivecRequest: ISivecRequest): Observable<ISivecResponse> {
    return this.http.post<ISivecResponse>(`${environment.apiUrl}`, sivecRequest);
  }

}