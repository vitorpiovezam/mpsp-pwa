import { Component, OnInit, Input } from '@angular/core';
import { ICadespResponse } from 'src/app/core/forms/cadesp-form/cadesp.model';

@Component({
  selector: 'app-cadesp-result',
  templateUrl: './cadesp-result.component.html',
  styleUrls: ['./cadesp-result.component.scss']
})
export class CadespResultComponent implements OnInit {

  @Input()
  response: ICadespResponse;
  constructor() { }

  ngOnInit() {
  }

}
