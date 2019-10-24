import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
  <mat-card>
    <mat-card-title>MPSP-PWA</mat-card-title>
  <mat-card-content>
    <form [formGroup]="form">
      <p>
        <mat-form-field class="block">
          <input type="text" matInput placeholder="Username" formControlName="username">
        </mat-form-field>
      </p>

      <p>
        <mat-form-field class="block">
          <input type="password" matInput placeholder="Password" formControlName="password">
        </mat-form-field>
      </p>

      <div class="button">
        <button type="submit" [routerLink]="['/my-searches']" mat-button>Login</button>
      </div>

    </form>
  </mat-card-content>
</mat-card>
  </div>
`,
  styles: [
    `
  mat-toolbar {
    display: none;
    overflow: hidden;
  } 

  :host {
    margin-top:-60px;
    display: flex;
    justify-content: center;
    margin: 100px 0px;
  }

  .mat-form-field class="block" {
    width: 100%;
    min-width: 300px;
  }

  mat-card-title,
  mat-card-content {
    display: flex;
    justify-content: center;
  }

  .error {
    padding: 16px;
    width: 300px;
    color: white;
    background-color: red;
  }

  .button {
    display: flex;
    justify-content: flex-end;
  }
`,
  ],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
