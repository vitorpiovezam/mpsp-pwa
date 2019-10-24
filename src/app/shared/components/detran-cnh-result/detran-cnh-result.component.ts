import { Component, OnInit, Input } from '@angular/core';
import { IDetranCNHResponse } from 'src/app/core/forms/detran-vehicle-form/detran.model';

@Component({
  selector: 'app-detran-cnh-result',
  templateUrl: './detran-cnh-result.component.html',
  styleUrls: ['./detran-cnh-result.component.scss']
})
export class DetranCnhResultComponent implements OnInit {
  @Input()
  response: IDetranCNHResponse
  constructor() { }

  ngOnInit() {
  }

}
