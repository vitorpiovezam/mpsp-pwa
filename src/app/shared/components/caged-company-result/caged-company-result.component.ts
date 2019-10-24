import { ICagedCompanyResponse } from './../../../core/forms/caged-worker-form/caged.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caged-company-result',
  templateUrl: './caged-company-result.component.html',
  styleUrls: ['./caged-company-result.component.scss']
})
export class CagedCompanyResultComponent implements OnInit {

  @Input()
  response: ICagedCompanyResponse
  constructor() { }

  ngOnInit() {
  }

}
