import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICadespRequest } from './cadesp.model';
import { CadespService } from '../../services/cadesp.service';

@Component({
  selector: 'app-cadesp-form',
  templateUrl: './cadesp-form.component.html',
  styleUrls: ['./cadesp-form.component.scss']
})

export class CadespFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private cadespService: CadespService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title ='Cadesp';
    this.form = this.formBuilder.group({
      cnpj: new FormControl('', [Validators.required]),
    });

    this.formReady.emit(this.form);
  }

}
