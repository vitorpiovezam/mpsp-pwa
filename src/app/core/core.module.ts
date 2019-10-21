import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArispFormComponent } from './forms/arisp-form/arisp-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveSearchComponent } from '../pages/reactive-search/reactive-search.component';
import { MySearchesComponent } from '../pages/my-searches/my-searches.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArispFormComponent, ReactiveSearchComponent, MySearchesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
    MatTabsModule
  ],
})
export class CoreModule { }
