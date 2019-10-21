import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IDetranResponse, IDetranRequest } from '../forms/detran-form/detran.model';

@Injectable()
export class DetranService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(detranRequest: IDetranRequest): Observable<IDetranResponse> {
    return this.http.post<IDetranResponse>(`${environment.apiUrl}`, detranRequest);
  }

}