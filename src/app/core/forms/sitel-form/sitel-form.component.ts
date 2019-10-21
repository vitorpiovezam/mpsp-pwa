import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ISitelRequest } from './sitel.model';
import { SitelService } from '../../services/sitel.service';

@Component({
  selector: 'app-sitel-form',
  templateUrl: './sitel-form.component.html',
  styleUrls: ['./sitel-form.component.scss']
})

export class SitelFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor(
    private sitelService: SitelService,
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

  search(sitelRequest: ISitelRequest) {
    this.sitelService.getFormData(sitelRequest).subscribe(
      res => console.log(res)
    )
  }

}
