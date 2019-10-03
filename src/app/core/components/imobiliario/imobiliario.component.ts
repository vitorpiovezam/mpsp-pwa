import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-imobiliario',
  templateUrl: './imobiliario.component.html',
  styleUrls: ['./imobiliario.component.scss']
})
export class ImobiliarioComponent implements OnInit {
  arisp: FormControl;

  constructor() { }

  ngOnInit() {
    this.arisp = new FormControl(true);
  }

}
