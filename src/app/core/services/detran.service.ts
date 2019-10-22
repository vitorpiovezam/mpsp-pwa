import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IDetranCNHRequest } from '../forms/detran-cnh-form/detran.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class DetranService implements BaseResourceService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(detranRequest: IDetranCNHRequest): Observable<IDetranCNHRequest> {
    return this.http.post<IDetranCNHRequest>(`${environment.apiUrl}`, detranRequest);
  }

}