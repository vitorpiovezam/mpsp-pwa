import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IArispResponse, IArispRequest } from '../forms/arisp-form/arisp.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class ArispService implements BaseResourceService {

  constructor(private http: HttpClient){ }

  getFormData(arispRequest: IArispRequest ,reportId: string): Observable<IArispResponse> {
    return this.http.post<IArispResponse>(`${environment.apiUrl}/arisp`, arispRequest, {
      headers: { 'reportId': reportId }
    });
  }

}