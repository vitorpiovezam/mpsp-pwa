import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { ICagedWorkerResponse, ICagedWorkerRequest, ICagedCompanyResponse, ICagedCompanyRequest, ICagedResponsibleResponse, ICagedResponsibleRequest } from '../forms/caged-responsible-form/caged.model';

@Injectable()
export class CagedService implements BaseResourceService  {
  constructor(private http: HttpClient){ }

  getFormData() {
    
  }

  getWorkerData(cagedRequest: ICagedWorkerRequest, reportId: string): Observable<ICagedWorkerResponse> {
    return this.http.post<ICagedWorkerResponse>(`${environment.apiUrl}/cagedWorker`, cagedRequest, {
      headers: { 'reportId': reportId }
    });
  }

  getCompanyData(cagedRequest: ICagedCompanyRequest, reportId: string): Observable<ICagedCompanyResponse> {
    return this.http.post<ICagedCompanyResponse>(`${environment.apiUrl}/cagedCompany`, cagedRequest, {
      headers: { 'reportId': reportId }
    });
  }

  getResponsibleData(cagedRequest: ICagedResponsibleRequest, reportId: string): Observable<ICagedResponsibleResponse> {
    return this.http.post<ICagedResponsibleResponse>(`${environment.apiUrl}/cagedResponsible`, cagedRequest, {
      headers: { 'reportId': reportId }
    });
  }
}