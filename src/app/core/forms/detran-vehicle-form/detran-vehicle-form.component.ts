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
    this.title = 'Detran Veiculo';
    this.form = this.formBuilder.group({
      board: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      renavam: new FormControl('', [Validators.required])
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }
}
