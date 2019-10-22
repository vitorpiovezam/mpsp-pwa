import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IArpenpResponse, IArpenpRequest } from '../forms/arpenp-form/arpenp.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class ArpenpService implements BaseResourceService  {
  http: HttpClient;

  constructor(http: HttpClient){ 
  }

  getFormData(arpenpRequest: IArpenpRequest): Observable<IArpenpResponse> {
    return this.http.get<IArpenpResponse>(`${environment.apiUrl}/${arpenpRequest.placeId}`);
  }

}