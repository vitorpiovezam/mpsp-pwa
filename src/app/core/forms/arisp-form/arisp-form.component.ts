import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-arisp-form',
  templateUrl: './arisp-form.component.html',
  styleUrls: ['./arisp-form.component.scss']
})
export class ArispFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    cnpj: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

}
