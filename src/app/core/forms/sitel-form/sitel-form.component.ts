import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ISitelRequest } from './sitel.model';
import { SitelService } from '../../services/sitel.service';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../format.datepicker';

@Component({
  selector: 'app-sitel-form',
  templateUrl: './sitel-form.component.html',
  styleUrls: ['./sitel-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})

export class SitelFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private sitelService: SitelService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Sitel';
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      motherName: new FormControl(''),
      birthDate: new FormControl('', [Validators.required]),
      documentNumber: new FormControl('',  [Validators.minLength(12), Validators.maxLength(12)]),
      processNumber: new FormControl('', [Validators.required]),
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }
}
