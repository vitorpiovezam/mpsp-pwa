import { IDetranTimeLineResponse } from 'src/app/core/forms/detran-timeline-form/detran.model';
import { IDetranCNHResponse } from 'src/app/core/forms/detran-cnh-form/detran.model';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { IDetranCNHRequest } from '../forms/detran-cnh-form/detran.model';
import { BaseResourceService } from './base-resource.service';
import { IDetranVehicleRequest, IDetranTimeLineRequest, IDetranVehicleResponse } from '../forms/detran-timeline-form/detran.model';

@Injectable()
export class DetranService implements BaseResourceService {
  constructor(private http: HttpClient){ }

  getFormData(foo: any) { }

  getCnhData(detranRequest: IDetranCNHRequest, reportId: string): Observable<IDetranCNHResponse> {
    return this.http.post<IDetranCNHResponse>(`${environment.apiUrl}/detranCNH`, detranRequest, {
      headers: { 'reportId': reportId }
    });
  }

  getVehicleData(detranRequest: IDetranVehicleRequest, reportId: string): Observable<IDetranVehicleResponse> {
    return this.http.post<IDetranVehicleResponse>(`${environment.apiUrl}/detranVehicle`, detranRequest, {
      headers: { 'reportId': reportId }
    });
  }

  getTimelineData(detranRequest: IDetranTimeLineRequest, reportId: string): Observable<IDetranTimeLineResponse> {
    return this.http.post<IDetranTimeLineResponse>(`${environment.apiUrl}/detranTimeLine`, detranRequest, {
      headers: { 'reportId': reportId }
    });
  }

}