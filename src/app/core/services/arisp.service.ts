import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { IArispRequest, IArispResponse } from '../definitions/arisp.model';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class ArispService {
  http: HttpClient;

  constructor(http: HttpClient){ 
  }

  getFormData(arispRequest: IArispRequest): Observable<IArispResponse> {
    return this.http.get<IArispResponse>(`${environment.apiUrl}/${arispRequest.cnpj}`);
  }

}