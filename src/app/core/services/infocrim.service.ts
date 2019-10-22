import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IInfocrimResponse } from '../forms/infocrim-form/infocrim.model';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class InfocrimService implements BaseResourceService {
  http: HttpClient;

  constructor(http: HttpClient){ }

  getFormData(): Observable<IInfocrimResponse> {
    return this.http.get<IInfocrimResponse>(`${environment.apiUrl}`);
  }

}