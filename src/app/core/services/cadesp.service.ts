import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ICadespResponse, ICadespRequest } from '../forms/cadesp-form/cadesp.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class CadespService implements BaseResourceService  {
  constructor(private http: HttpClient){ }

  getFormData(cadespRequest: ICadespRequest,reportId: string): Observable<ICadespResponse> {
    return this.http.post<ICadespResponse>(`${environment.apiUrl}/cadesp`, cadespRequest, {
      headers: { 'reportId': reportId }
    });
  }

}