import { Component, OnInit, Input } from '@angular/core';
import { IDetranVehicleResponse } from 'src/app/core/forms/detran-timeline-form/detran.model';

@Component({
  selector: 'app-detran-vehicle-result',
  templateUrl: './detran-vehicle-result.component.html',
  styleUrls: ['./detran-vehicle-result.component.scss']
})
export class DetranVehicleResultComponent implements OnInit {
  @Input()
  response: IDetranVehicleResponse
  constructor() { }

  ngOnInit() {
  }

}
