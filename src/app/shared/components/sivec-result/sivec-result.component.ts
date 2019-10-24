import { Component, OnInit, Input } from '@angular/core';
import { ISivecResponse } from 'src/app/core/forms/sivec-form/sivec.model';

@Component({
  selector: 'app-sivec-result',
  templateUrl: './sivec-result.component.html',
  styleUrls: ['./sivec-result.component.scss']
})
export class SivecResultComponent implements OnInit {
  @Input()
  response: ISivecResponse
  constructor() { }

  ngOnInit() {
  }

}
