import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IJucespResponse, IJucespRequest } from '../forms/jucesp-form/jucesp.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class JucespService implements BaseResourceService {
  constructor(private http: HttpClient){ }

  getFormData(jucespRequest: IJucespRequest, reportId: string): Observable<IJucespResponse> {
    return this.http.post<IJucespResponse>(`${environment.apiUrl}/jucesp`, {
      headers: { 'reportId': reportId }
    });
  }

}