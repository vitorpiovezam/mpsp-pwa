import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class CagedService {
  http: HttpClient;

  constructor(http: HttpClient){ }


}