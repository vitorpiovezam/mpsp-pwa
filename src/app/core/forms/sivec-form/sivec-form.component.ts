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
  form: FormGroup;

  constructor(
    private sivecService: SivecService,
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

  search(sivecRequest: ISivecRequest) {
    this.sivecService.getFormData(sivecRequest).subscribe(
      res => console.log(res)
    )
  }

}
