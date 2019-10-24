import { ICagedWorkerRequest, ICagedCompanyRequest, ICagedResponsibleResponse } from './../../core/forms/caged-responsible-form/caged.model';
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
import { IInfocrimResponse, IInfocrimRequest } from './../../core/forms/infocrim-form/infocrim.model';
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
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})  
export class ReactiveSearchComponent implements OnInit {
  form: FormGroup;
  isValid: boolean = false;

  arisp = true;
  arpenp = false;
  cadesp = false; // crash
  cagedCompany = false; 
  cagedResponsible = false;
  cagedWorker = false;
  censec = false;
  detranCnh = false; // crash
  detranTimeLine = false;
  detranVehicle = false; // crash
  infocrim = false; // wkhtmltopdf crash
  jucesp = false;
  sitel = false;
  sivec = false;

  arispLoading = false;
  arpenpLoading = false;
  cadespLoading = false;
  cagedCompanyLoading = false;
  cagedResponsibleLoading = false;
  cagedWorkerLoading = false;
  censecLoading = false;
  detranCnhLoading = false;
  detranTimeLineLoading = false;
  detranVehicleLoading = false;
  infocrimLoading = false;
  jucespLoading = false;
  sitelLoading = false;
  sivecLoading = false;

  arispResponse: IArispResponse;
  arpenpResponse: IArpenpResponse;
  cadespResponse: ICadespResponse;
  cagedCompanyResponse: ICagedCompanyResponse;
  cagedResponsibleResponse: ICagedResponsibleResponse;
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

  isEmpty() {
    return (
    this.arisp ||
    this.arpenp ||
    this.cadesp ||
    this.cagedCompany ||
    this.cagedResponsible ||
    this.cagedWorker ||
    this.censec ||
    this.detranCnh ||
    this.detranTimeLine ||
    this.detranVehicle ||
    this.infocrim ||
    this.jucesp ||
    this.sitel ||
    this.sivec
    );
  }

  isLoading() {
    return (
      this.arispLoading ||
      this.arpenpLoading ||
      this.cadespLoading ||
      this.cagedCompanyLoading ||
      this.cagedResponsibleLoading ||
      this.cagedWorkerLoading ||
      this.censecLoading ||
      this.detranCnhLoading ||
      this.detranTimeLineLoading ||
      this.detranVehicleLoading ||
      this.infocrimLoading ||
      this.jucespLoading ||
      this.sitelLoading ||
      this.sivecLoading
      );
  }

  search(entries: {}) {
    const formValues = Object.entries(this.form.value);

    for (const [i, form] of formValues.entries()){
      if (form[0] === 'arisp') {
        const arispRequest = form[1] as IArispRequest; 
        this.arispLoading = true;
        this.arispService.getFormData(arispRequest).subscribe(x => {
          this.arispLoading = false
          this.arispResponse = x
        });
      }

      if (form[0] === 'arpenp') {
        const arpenpRequest = form[1] as IArpenpRequest; 
        this.arpenpLoading = true;
        this.arpenpService.getFormData(arpenpRequest).subscribe(x => {
          this.arpenpLoading = false
          this.arpenpResponse = x
        })
      }

      if (form[0] === 'cadesp') {
        const cadespRequest = form[1] as ICadespRequest; 
        this.cadespLoading = true;
        this.cadespService.getFormData(cadespRequest).subscribe(x => {
          this.cadespLoading = false
          this.cadespResponse = x
        })
      }

      if (form[0] === 'cagedWorker') {
        const cagedWorkerRequest = form[1] as ICagedWorkerRequest; 
        this.cagedWorkerLoading = true;
        this.cagedService.getWorkerData(cagedWorkerRequest).subscribe(x => {
          this.cagedWorkerLoading = false
          this.cagedWorkerResponse = x
        })
      }

      if (form[0] === 'cagedResponsible') {
        const cagedRequest = form[1] as ICagedResponsibleRequest; 
        this.cagedResponsibleLoading = true;
        this.cagedService.getResponsibleData(cagedRequest).subscribe(x => {
          this.cagedResponsibleLoading = false
          this.cagedResponsibleResponse = x
        })
      }

      if (form[0] === 'cagedCompany') {
        const cagedRequest = form[1] as ICagedCompanyRequest;
        this.cagedCompanyLoading = true;
        this.cagedService.getCompanyData(cagedRequest).subscribe(x => {
          this.cagedCompanyLoading = false
          this.cagedCompanyResponse = x
        })
      }

      if (form[0] === 'censec') {
        const censecRequest = form[1] as ICensecRequest; 
        this.censecLoading = true;
        this.censecService.getFormData(censecRequest).subscribe(x => {
          this.censecLoading = false
          this.censecResponse = x
        })
      }

      if (form[0] === 'detranCnh') {
        const detranCnhRequest = form[1] as IDetranCNHRequest; 
        this.detranCnhLoading = true;
        this.detranService.getCnhData(detranCnhRequest).subscribe(x => {
          this.detranCnhLoading = false
          this.detranCNHResponse = x
        })
      }

      if (form[0] === 'detranTimeline') {
        const detranTimeLineRequest = form[1] as IDetranTimeLineRequest; 
        this.detranTimeLineLoading = true;
        this.detranService.getTimelineData(detranTimeLineRequest).subscribe(x => {
          this.detranTimeLineLoading = false
          this.detranTimeLineResponse = x
        })
      }

      if (form[0] === 'detranVehicle') {
        const detranVehicleRequest = form[1] as IDetranVehicleRequest;
        this.detranVehicleLoading = true;
        this.detranService.getVehicleData(detranVehicleRequest).subscribe(x => {
          this.detranVehicleLoading = false
          this.detranVehicleResponse = x
        })
      }

      if (form[0] === 'infocrim') {
        const infocrimRequest = form[1] as IInfocrimRequest; 
        this.infocrimLoading = true;
        this.infocrimService.getFormData(infocrimRequest).subscribe(x => {
          this.infocrimLoading = false;
          this.infocrimResponse = x
        })
      }

      if (form[0] === 'jucesp') {
        const jucespRequest = form[1] as IJucespRequest; 
        this.jucespLoading = true;
        this.jucespService.getFormData(jucespRequest).subscribe(x => {
          this.jucespLoading = false
          this.jucespResponse = x
        })
      }

      if (form[0] === 'sitel') {
        const sitelRequest = form[1] as ISitelRequest; 
        this.sitelLoading = true;
        this.sitelService.getFormData(sitelRequest).subscribe(x => {
          this.sitelLoading = false
          this.sitelResponse = x
        })
      }

      if (form[0] === 'sivec') {
        const sivecRequest = form[1] as ISivecRequest; 
        this.sivecLoading = true;
        this.sivecService.getFormData(sivecRequest).subscribe(x => {
          this.sivecLoading = false
          this.sivecResponse = x
        })
      }
    }
  }
}
