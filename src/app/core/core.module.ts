import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArispFormComponent } from './forms/arisp-form/arisp-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveSearchComponent } from '../pages/reactive-search/reactive-search.component';
import { ImobiliarioComponent } from './components/imobiliario/imobiliario.component';
import { MySearchesComponent } from '../pages/my-searches/my-searches.component';

@NgModule({
  declarations: [ArispFormComponent, ReactiveSearchComponent, ImobiliarioComponent, MySearchesComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule
  ],
})
export class CoreModule { }
