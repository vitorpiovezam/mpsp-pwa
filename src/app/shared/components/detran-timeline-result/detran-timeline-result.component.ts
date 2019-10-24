import { Component, OnInit, Input } from '@angular/core';
import { IDetranTimeLineResponse } from 'src/app/core/forms/detran-vehicle-form/detran.model';

@Component({
  selector: 'app-detran-timeline-result',
  templateUrl: './detran-timeline-result.component.html',
  styleUrls: ['./detran-timeline-result.component.scss']
})
export class DetranTimelineResultComponent implements OnInit {
  @Input()
  response: IDetranTimeLineResponse
  constructor() { }

  ngOnInit() {
  }

}
