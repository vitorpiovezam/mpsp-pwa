import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>  
      <mat-toolbar-row>
        <span class="logo">MPSP</span>
        <span><a [routerLink]="[ 'search' ]">Consultar</a></span>
        <span><a [routerLink]="[ 'my-searches' ]">Minhas Consultas</a></span>
      </mat-toolbar-row>
    </mat-toolbar>
    <div id="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .block,mat-form-field {
        display: block !important;
      }

      input {
        display: block !important;
      }
    `
  ]
})
export class AppComponent {
  title = 'mpsp-pwa';
}
