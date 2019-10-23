import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CagedService } from '../../services/caged.service';

@Component({
  selector: 'app-caged-worker-form',
  templateUrl: './caged-worker-form.component.html',
  styleUrls: ['./caged-worker-form.component.scss']
})

export class CagedWorkerFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private cagedService: CagedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Caged';
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
