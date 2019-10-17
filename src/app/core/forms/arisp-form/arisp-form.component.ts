import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IArispRequest } from '../../definitions/arisp.model';
import { ArispService } from '../../services/arisp.service';

@Component({
  selector: 'app-arisp-form',
  templateUrl: './arisp-form.component.html',
  styleUrls: ['./arisp-form.component.scss']
})

export class ArispFormComponent implements OnInit {

  arispService: ArispService;
  form: FormGroup = new FormGroup({
    cnpj: new FormControl('', Validators.required)
  })

  constructor(arispService: ArispService) { }

  ngOnInit() {
  }

  search(arispRequest: IArispRequest) {
    this.arispService.getFormData(arispRequest).subscribe(
      res => console.log(res)
    )
  }

}
