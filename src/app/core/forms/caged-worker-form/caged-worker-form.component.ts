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
  searchType: string[] = [
    'PIS/PASEP',
    'CPF',
    'NOME',
  ];
  constructor(
    private cagedService: CagedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Caged Trabalhador';
    this.form = this.formBuilder.group({
      searchType: new FormControl(null, [Validators.required]),
      term: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
