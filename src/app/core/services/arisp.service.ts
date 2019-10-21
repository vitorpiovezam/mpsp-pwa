import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IArispResponse, IArispRequest } from '../forms/arisp-form/arisp.model';

@Injectable()
export class ArispService {
  http: HttpClient;

  constructor(http: HttpClient){ 
  }

  getFormData(arispRequest: IArispRequest): Observable<IArispResponse> {
    return this.http.get<IArispResponse>(`${environment.apiUrl}/${arispRequest.cnpj}`);
  }

}