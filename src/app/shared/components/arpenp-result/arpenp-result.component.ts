import { Component, OnInit, Input } from '@angular/core';
import { IArpenpResponse } from 'src/app/core/forms/arpenp-form/arpenp.model';

@Component({
  selector: 'app-arpenp-result',
  templateUrl: './arpenp-result.component.html',
  styleUrls: ['./arpenp-result.component.scss']
})
export class ArpenpResultComponent implements OnInit {

  @Input()
  response: IArpenpResponse
  constructor() { }

  ngOnInit() {
  }

}
