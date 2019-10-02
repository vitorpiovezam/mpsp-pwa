import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArispFormComponent } from './components/arisp-form/arisp-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveSearchComponent } from './pages/reactive-search/reactive-search.component';
import { ImobiliarioComponent } from './components/imobiliario/imobiliario.component';

@NgModule({
  declarations: [ArispFormComponent, ReactiveSearchComponent, ImobiliarioComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule
  ],
})
export class CoreModule { }
