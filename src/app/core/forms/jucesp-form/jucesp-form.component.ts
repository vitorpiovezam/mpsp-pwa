import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IJucespRequest } from './jucesp.model';
import { JucespService } from '../../services/jucesp.service';

@Component({
  selector: 'app-jucesp-form',
  templateUrl: './jucesp-form.component.html',
  styleUrls: ['./jucesp-form.component.scss']
})

export class JucespFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private jucespService: JucespService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Jucesp';
    this.form = this.formBuilder.group({
      companyName: new FormControl('', [Validators.required]),
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

}
