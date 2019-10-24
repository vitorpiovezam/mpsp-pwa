import { Component, OnInit, Input } from '@angular/core';
import { ICagedResponsibleResponse } from 'src/app/core/forms/caged-responsible-form/caged.model';

@Component({
  selector: 'app-caged-responsible-result',
  templateUrl: './caged-responsible-result.component.html',
  styleUrls: ['./caged-responsible-result.component.scss']
})
export class CagedResponsibleResultComponent implements OnInit {
  @Input()
  response: ICagedResponsibleResponse
  constructor() { }

  ngOnInit() {
  }

}
