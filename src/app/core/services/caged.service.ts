import { ICagedWorkerRequest, ICagedWorkerResponse, ICagedCompanyRequest, ICagedCompanyResponse, ICagedResponsibleRequest, ICagedResponsibleResponse } from './../forms/caged-form/caged.model';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class CagedService implements BaseResourceService  {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData() {
    
  }

  getWorkerData(cagedRequest: ICagedWorkerRequest): Observable<ICagedWorkerResponse> {
    return this.http.post<ICagedWorkerResponse>(`${environment.apiUrl}/cagedWorker`, { cagedRequest }, { headers: { relatoryId: '1'}});
  }

  getCompanyData(cagedRequest: ICagedCompanyRequest): Observable<ICagedCompanyResponse> {
    return this.http.post<ICagedCompanyResponse>(`${environment.apiUrl}/cagedCompany`, { cagedRequest }, { headers: { relatoryId: '1'}});
  }

  getResponsibleData(cagedRequest: ICagedResponsibleRequest): Observable<ICagedResponsibleResponse> {
    return this.http.post<ICagedResponsibleResponse>(`${environment.apiUrl}/cagedResponsible`, { cagedRequest }, { headers: { relatoryId: '1'}});
  }
}