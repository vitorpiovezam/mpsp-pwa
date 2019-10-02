import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>  
      <mat-toolbar-row>
        <span>MPSP-PWA</span>
      </mat-toolbar-row>
    </mat-toolbar>
    <div id="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'mpsp-pwa';
}
