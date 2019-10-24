import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InfocrimService } from '../../services/infocrim.service';

@Component({
  selector: 'app-infocrim-form',
  templateUrl: './infocrim-form.component.html',
  styleUrls: ['./infocrim-form.component.scss']
})

export class InfocrimFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;
  institutions: string[] = [
    'Policia Civil',
    'Policia Militar',
    'Prefeituras'
  ]

  constructor(
    private infocrimService: InfocrimService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Infocrim';
    this.form = this.formBuilder.group({
      institution: new FormControl(null, [Validators.required]),
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }
}
