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
  form: FormGroup;

  constructor(
    private cadespService: CadespService,
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

  search(cadespRequest: ICadespRequest) {
    this.cadespService.getFormData(cadespRequest).subscribe(
      res => console.log(res)
    )
  }

}
