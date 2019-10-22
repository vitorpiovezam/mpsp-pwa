import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { pipe, Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})  
export class ReactiveSearchComponent implements OnInit {
  form: FormGroup;
  isValid: boolean = false;

  arisp = false;
  arpenp = false;
  cadesp = false;
  caged = false;
  censec = false;
  detranCnh = false;
  detranTimeLine = false;
  detranVehicleLine = false;
  infocrim = false;
  jucesp = false;
  sitel = false;
  sivec = false;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
  }

  disableControl(state: boolean, name: string) {
    state ? this.removeControl(name) : null;
  }

  addControl(name: string, form: FormGroup) {
    this.form.setControl(name, form);
  }

  removeControl(name: string) {
    this.form.removeControl(name);
  }

  search() {
    console.log(Object.entries(this.form.value));
  }
}
