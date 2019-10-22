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

}