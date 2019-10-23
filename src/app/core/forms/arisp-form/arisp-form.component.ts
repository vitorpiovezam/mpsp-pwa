import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IArispRequest, SearchType, PersonType, Cities } from './arisp.model';
import { ArispService } from '../../services/arisp.service';

@Component({
  selector: 'app-arisp-form',
  templateUrl: './arisp-form.component.html',
  styleUrls: ['./arisp-form.component.scss']
})

export class ArispFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  form: FormGroup;
  title = 'Arisp';

  searchType = SearchType;
  personType = PersonType;
  cities: string[] = Cities;


  constructor(
    private arispService: ArispService,
    private formBuilder: FormBuilder
  ) {
    
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      searchType: new FormControl(),
      personType: new FormControl(),
      cityNames: new FormControl(),
      cpfCnpj: new FormControl(''),
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(arispRequest: IArispRequest) {
    this.arispService.getFormData(arispRequest).subscribe(
      res => console.log(res)
    )
  }

}
