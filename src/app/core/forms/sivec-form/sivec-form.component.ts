import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ISivecRequest } from './sivec.model';
import { SivecService } from '../../services/sivec.service';

@Component({
  selector: 'app-sivec-form',
  templateUrl: './sivec-form.component.html',
  styleUrls: ['./sivec-form.component.scss']
})

export class SivecFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;
  searchType = [
    'RG',
    'Nome',
    'Matricula SAP'
  ]

  constructor(
    private sivecService: SivecService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Sivec';
    this.form = this.formBuilder.group({
      searchType: new FormControl(null, Validators.required),
      term: new FormControl('', [Validators.required]),
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
