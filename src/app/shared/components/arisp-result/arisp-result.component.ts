import { Component, OnInit, Input } from '@angular/core';
import { IArispResponse, ArispRegistry } from 'src/app/core/forms/arisp-form/arisp.model';

@Component({
  selector: 'app-arisp-result',
  templateUrl: './arisp-result.component.html',
  styleUrls: ['./arisp-result.component.scss'],
})
export class ArispResultComponent implements OnInit {

  @Input()
  response = { registries: [] } as IArispResponse;
  
  constructor() { }

  ngOnInit() {
  }

}
