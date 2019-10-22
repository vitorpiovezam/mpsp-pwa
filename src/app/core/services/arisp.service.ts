import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IArispResponse, IArispRequest } from '../forms/arisp-form/arisp.model';

@Injectable()
export class ArispService {

  constructor(private http: HttpClient){ 
  }

  getFormData(arispRequest: IArispRequest): Observable<IArispResponse> {
    console.log(arispRequest)
    return this.http.post<IArispResponse>(`${environment.apiUrl}/arisp`, { arispRequest }, { headers: { relatoryId: '1'}});
  }

}