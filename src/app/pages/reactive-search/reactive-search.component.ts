import { ICagedWorkerRequest, ICagedCompanyRequest } from './../../core/forms/caged-responsible-form/caged.model';
import { ICagedCompanyResponse, ICagedWorkerResponse, ICagedResponsibleRequest } from './../../core/forms/caged-worker-form/caged.model';
import { DetranTimeLineRequest } from './../../core/forms/detran-cnh-form/detran.model';
import { ISivecRequest } from './../../core/forms/sivec-form/sivec.model';
import { SitelService } from './../../core/services/sitel.service';
import { JucespService } from './../../core/services/jucesp.service';
import { InfocrimService } from './../../core/services/infocrim.service';
import { CensecService } from './../../core/services/cansec.service';
import { CagedService } from './../../core/services/caged.service';
import { CadespService } from './../../core/services/cadesp.service';
import { IDetranVehicleResponse, IDetranTimeLineRequest, IDetranVehicleRequest } from './../../core/forms/detran-timeline-form/detran.model';
import { ArispService } from './../../core/services/arisp.service';
import { IJucespResponse, IJucespRequest } from './../../core/forms/jucesp-form/jucesp.model';
import { IInfocrimResponse } from './../../core/forms/infocrim-form/infocrim.model';
import { ICensecResponse, ICensecRequest } from './../../core/forms/censec-form/censec.model';
import { ICadespResponse, ICadespRequest } from './../../core/forms/cadesp-form/cadesp.model';
import { IArpenpResponse, IArpenpRequest } from './../../core/forms/arpenp-form/arpenp.model';
import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { pipe, Observable } from 'rxjs';
import { IArispResponse, IArispRequest } from 'src/app/core/forms/arisp-form/arisp.model';
import { ISitelResponse, ISitelRequest } from 'src/app/core/forms/sitel-form/sitel.model';
import { ISivecResponse } from 'src/app/core/forms/sivec-form/sivec.model';
import { IDetranCNHResponse, IDetranCNHRequest } from 'src/app/core/forms/detran-cnh-form/detran.model';
import { IDetranTimeLineResponse } from 'src/app/core/forms/detran-timeline-form/detran.model';
import { ArpenpService } from 'src/app/core/services/arpenp.service';
import { DetranService } from 'src/app/core/services/detran.service';
import { SivecService } from 'src/app/core/services/sivec.service';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})  
export class ReactiveSearchComponent implements OnInit {
  form: FormGroup;
  isValid: boolean = false;

  arisp = false;
  arpenp = false;
  cadesp = false;
  cagedCompany = false;
  cagedResponsible = false;
  cagedWorker = false;
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
  cagedCompanyResponse: ICagedCompanyResponse;
  cagedResponsibleResponse: ICagedResponsibleRequest;
  cagedWorkerResponse: ICagedWorkerResponse;
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
    private arispService: ArispService,
    private arpenpService: ArpenpService,
    private cadespService: CadespService,
    private cagedService: CagedService,
    private censecService: CensecService,
    private detranService: DetranService,
    private infocrimService: InfocrimService,
    private jucespService: JucespService,
    private sitelService: SitelService,
    private sivecService: SivecService
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

  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  search() {
    const formValues = Object.entries(this.form.value);

    for (const [i, form] of formValues.entries()){
      if (form[0] === 'arisp') {
        const arispRequest = form[i] as IArispRequest; 
        this.arispService.getFormData(arispRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'arpenp') {
        const arpenpRequest = form[i] as IArpenpRequest; 
        this.arpenpService.getFormData(arpenpRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'cadesp') {
        const cadespRequest = form[i] as ICadespRequest; 
        this.arispService.getFormData(cadespRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'cagedWorker') {
        const cagedWorkerRequest = form[i] as ICagedWorkerRequest; 
        this.cagedService.getWorkerData(cagedWorkerRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'cagedResponsible') {
        const cagedRequest = form[i] as ICagedResponsibleRequest; 
        this.cagedService.getResponsibleData(cagedRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'cagedCompany') {
        const cagedRequest = form[i] as ICagedCompanyRequest;
        this.cagedService.getCompanyData(cagedRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'censec') {
        const censecRequest = form[i] as ICensecRequest; 
        this.censecService.getFormData(censecRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'detranCnh') {
        const detranCnhRequest = form[i] as IDetranCNHRequest; 
        this.detranService.getCnhData(detranCnhRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'detranTimeLine') {
        const detranTimeLineRequest = form[i] as IDetranTimeLineRequest; 
        this.detranService.getTimelineData(detranTimeLineRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'detranVehicleLine') {
        const detranVehicleRequest = form[i] as IDetranVehicleRequest;
        this.detranService.getVehicleData(detranVehicleRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'infocrim') {
        this.infocrimService.getFormData().subscribe(x => console.log(x))
      }

      if (form[0] === 'jucesp') {
        const jucespRequest = form[i] as IJucespRequest; 
        this.jucespService.getFormData(jucespRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'sitel') {
        const sitelRequest = form[i] as ISitelRequest; 
        this.sitelService.getFormData(sitelRequest).subscribe(x => console.log(x))
      }

      if (form[0] === 'sivec') {
        const sivecRequest = form[i] as ISivecRequest; 
        this.sivecService.getFormData(sivecRequest).subscribe(x => console.log(x))
      }
    }
  }
}
