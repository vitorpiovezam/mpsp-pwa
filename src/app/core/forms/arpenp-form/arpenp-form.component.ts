import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IArpenpRequest } from './arpenp.model';
import { ArpenpService } from '../../services/arpenp.service';

@Component({
  selector: 'app-arpenp-form',
  templateUrl: './arpenp-form.component.html',
  styleUrls: ['./arpenp-form.component.scss']
})

export class ArpenpFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  title = 'Arpenp';
  form: FormGroup;

  constructor(
    private arpenpService: ArpenpService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      registryType: new FormControl('', [Validators.required]),
      processNumber: new FormControl('', [Validators.required]),
      placeId: new FormControl('', [Validators.required])
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.form);
  }

  search(arpenpRequest: IArpenpRequest) {
    this.arpenpService.getFormData(arpenpRequest).subscribe(
      res => console.log(res)
    )
  }

}
