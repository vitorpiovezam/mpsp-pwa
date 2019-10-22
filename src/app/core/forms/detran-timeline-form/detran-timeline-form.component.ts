import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IDetranTimeLineRequest } from './detran.model';
import { DetranService } from '../../services/detran.service';

@Component({
  selector: 'app-detran-timeline-form',
  templateUrl: './detran-timeline-form.component.html',
  styleUrls: ['./detran-timeline-form.component.scss']
})

export class DetranTimeLineFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private detranService: DetranService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Detran timeline';
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(detranRequest: IDetranTimeLineRequest) {
  
  }

}
