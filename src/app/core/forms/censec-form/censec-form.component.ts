import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CensecService } from '../../services/cansec.service';
import { ICensecRequest } from './censec.model';

@Component({
  selector: 'app-censec-form',
  templateUrl: './censec-form.component.html',
  styleUrls: ['./censec-form.component.scss']
})

export class CensecFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private censecService: CensecService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Censec';
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(censecRequest: ICensecRequest) {
    this.censecService.getFormData(censecRequest).subscribe(
      res => console.log(res)
    )
  }

}
