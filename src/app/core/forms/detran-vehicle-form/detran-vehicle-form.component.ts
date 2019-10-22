import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IDetranCNHRequest } from './detran.model';
import { DetranService } from '../../services/detran.service';

@Component({
  selector: 'app-detran-vehicle-form',
  templateUrl: './detran-vehicle-form.component.html',
  styleUrls: ['./detran-vehicle-form.component.scss']
})

export class DetranVehicleFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private detranService: DetranService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Detran CNH';
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(detranRequest: IDetranCNHRequest) {
    this.detranService.getFormData(detranRequest).subscribe(
      res => console.log(res)
    )
  }

}
