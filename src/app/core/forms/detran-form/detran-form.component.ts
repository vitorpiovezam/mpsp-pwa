import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IDetranRequest } from './detran.model';
import { DetranService } from '../../services/detran.service';

@Component({
  selector: 'app-detran-form',
  templateUrl: './detran-form.component.html',
  styleUrls: ['./detran-form.component.scss']
})

export class DetranFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title: string;
  form: FormGroup;

  constructor(
    private detranService: DetranService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title = 'Detran';
    this.form = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      cep: new FormControl('')
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(detranRequest: IDetranRequest) {
    this.detranService.getFormData(detranRequest).subscribe(
      res => console.log(res)
    )
  }

}
