import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imobiliario',
  templateUrl: './imobiliario.component.html',
  styleUrls: ['./imobiliario.component.scss']
})
export class ImobiliarioComponent implements OnInit {
  form: FormArray;
  options: any[];

  arrayItems: {
    id: number;
    title: string;
  }[] = [];

  arispForm: FormGroup = new FormGroup({
    cnpj: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  addOption(name: string){
    this.arrayItems.push({id: 3, title: 'salve'});
  }

}
