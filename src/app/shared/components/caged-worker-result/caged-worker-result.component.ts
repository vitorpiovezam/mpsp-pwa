import { Component, OnInit, Input } from '@angular/core';
import { ICagedWorkerResponse } from 'src/app/core/forms/caged-responsible-form/caged.model';

@Component({
  selector: 'app-caged-worker-result',
  templateUrl: './caged-worker-result.component.html',
  styleUrls: ['./caged-worker-result.component.scss']
})
export class CagedWorkerResultComponent implements OnInit {

  @Input()
  response: ICagedWorkerResponse
  constructor() { }

  ngOnInit() {
  }

}
