import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CagedService } from '../../services/caged.service';

@Component({
  selector: 'app-caged-responsible-form',
  templateUrl: './caged-responsible-form.component.html',
  styleUrls: ['./caged-responsible-form.component.scss']
})

export class CagedResponsibleFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;
  searchType: string[] = [
    'CNPJ',
    'CEI',
    'CPF',
    'Razão Social/Nome',
    'CREA'
  ];

  constructor(
    private cagedService: CagedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Caged Responsavel';
    this.form = this.formBuilder.group({
      searchType: new FormControl([Validators.required]),
      term: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
