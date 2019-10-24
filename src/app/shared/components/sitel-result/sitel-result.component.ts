import { Component, OnInit, Input } from '@angular/core';
import { ISitelResponse } from 'src/app/core/forms/sitel-form/sitel.model';

@Component({
  selector: 'app-sitel-result',
  templateUrl: './sitel-result.component.html',
  styleUrls: ['./sitel-result.component.scss']
})
export class SitelResultComponent implements OnInit {
  @Input()
  response: ISitelResponse
  constructor() { }

  ngOnInit() {
  }

}
