import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { ISitelResponse, ISitelRequest } from '../forms/sitel-form/sitel.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class SitelService implements BaseResourceService{
  constructor(private http: HttpClient){ }

  getFormData(sitelRequest: ISitelRequest): Observable<ISitelResponse> {
    console.log(sitelRequest)
    return this.http.post<ISitelResponse>(`${environment.apiUrl}/siel`, sitelRequest);
  }

}