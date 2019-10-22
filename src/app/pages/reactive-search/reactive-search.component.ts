import { IDetranVehicleResponse } from './../../core/forms/detran-timeline-form/detran.model';
import { ArispService } from './../../core/services/arisp.service';
import { IJucespResponse } from './../../core/forms/jucesp-form/jucesp.model';
import { IInfocrimResponse } from './../../core/forms/infocrim-form/infocrim.model';
import { ICensecResponse } from './../../core/forms/censec-form/censec.model';
import { ICadespResponse } from './../../core/forms/cadesp-form/cadesp.model';
import { IArpenpResponse } from './../../core/forms/arpenp-form/arpenp.model';
import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { pipe, Observable } from 'rxjs';
import { IArispResponse, IArispRequest } from 'src/app/core/forms/arisp-form/arisp.model';
import { ISitelResponse } from 'src/app/core/forms/sitel-form/sitel.model';
import { ISivecResponse } from 'src/app/core/forms/sivec-form/sivec.model';
import { IDetranCNHResponse } from 'src/app/core/forms/detran-cnh-form/detran.model';
import { IDetranTimeLineResponse } from 'src/app/core/forms/detran-timeline-form/detran.model';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})  
export class ReactiveSearchComponent implements OnInit {
  form: FormGroup;
  isValid: boolean = false;

  arisp = false;
  arpenp = false;
  cadesp = false;
  caged = false;
  censec = false;
  detranCnh = false;
  detranTimeLine = false;
  detranVehicleLine = false;
  infocrim = false;
  jucesp = false;
  sitel = false;
  sivec = false;

  arispResponse: IArispResponse;
  arpenpResponse: IArpenpResponse;
  cadespResponse: ICadespResponse;
  cagedResponse: object;
  censecResponse: ICensecResponse;
  detranCNHResponse: IDetranCNHResponse;
  detranTimeLineResponse: IDetranTimeLineResponse;
  detranVehicleResponse: IDetranVehicleResponse;
  infocrimResponse: IInfocrimResponse;
  jucespResponse: IJucespResponse;
  sitelResponse: ISitelResponse;
  sivecResponse: ISivecResponse;

  constructor(
    private formBuilder: FormBuilder,
    private arispService: ArispService
    ) { 
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
  }

  disableControl(state: boolean, name: string) {
    state ? this.removeControl(name) : null;
  }

  addControl(name: string, form: FormGroup) {
    this.form.setControl(name, form);
  }

  removeControl(name: string) {
    this.form.removeControl(name);
  }

  search() {
    const formValues = Object.entries(this.form.value);

    for (const form of formValues) {
      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] == 'arisp') {
        const arispRequest: IArispRequest = formValues.filter(x => x[0] === 'arisp')[0][1];
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }
    }
  }
}
