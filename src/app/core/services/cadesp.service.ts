import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ICadespResponse, ICadespRequest } from '../forms/cadesp-form/cadesp.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class CadespService implements BaseResourceService  {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(cadespRequest: ICadespRequest): Observable<ICadespResponse> {
    return this.http.post<ICadespResponse>(`${environment.apiUrl}`, cadespRequest);
  }

}