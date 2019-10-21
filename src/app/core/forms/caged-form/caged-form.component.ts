import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CagedService } from '../../services/caged.service';

@Component({
  selector: 'app-caged-form',
  templateUrl: './caged-form.component.html',
  styleUrls: ['./caged-form.component.scss']
})

export class CagedFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor(
    private cagedService: CagedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
