import { Component, OnInit, Input } from '@angular/core';
import { IJucespResponse } from 'src/app/core/forms/jucesp-form/jucesp.model';

@Component({
  selector: 'app-jucesp-result',
  templateUrl: './jucesp-result.component.html',
  styleUrls: ['./jucesp-result.component.scss']
})
export class JucespResultComponent implements OnInit {
  @Input()
  response: IJucespResponse
  constructor() { }

  ngOnInit() {
  }

}
