import { Component, OnInit, Input } from '@angular/core';
import { ICensecResponse } from 'src/app/core/forms/censec-form/censec.model';

@Component({
  selector: 'app-censec-result',
  templateUrl: './censec-result.component.html',
  styleUrls: ['./censec-result.component.scss']
})
export class CensecResultComponent implements OnInit {
  @Input()
  response: ICensecResponse
  constructor() { }

  ngOnInit() {
  }

}
