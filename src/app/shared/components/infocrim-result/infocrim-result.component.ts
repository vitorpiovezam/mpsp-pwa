import { Component, OnInit, Input } from '@angular/core';
import { IInfocrimResponse } from 'src/app/core/forms/infocrim-form/infocrim.model';

@Component({
  selector: 'app-infocrim-result',
  templateUrl: './infocrim-result.component.html',
  styleUrls: ['./infocrim-result.component.scss']
})
export class InfocrimResultComponent implements OnInit {
  @Input()
  response: IInfocrimResponse
  constructor() { }

  ngOnInit() {
  }

}
