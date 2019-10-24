import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ICensecResponse, ICensecRequest } from '../forms/censec-form/censec.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class CensecService implements BaseResourceService {
  constructor(private http: HttpClient){ }

  getFormData(censecRequest: ICensecRequest): Observable<ICensecResponse> {
    return this.http.post<ICensecResponse>(`${environment.apiUrl}`, censecRequest);
  }

}