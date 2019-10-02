import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ReactiveSearchComponent } from './core/pages/reactive-search/reactive-search.component';

const routes: Routes = [
  { path: '', component: ReactiveSearchComponent },
  { path: 'search', component: ReactiveSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
