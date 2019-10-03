import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveSearchComponent } from './pages/reactive-search/reactive-search.component';
import { MySearchesComponent } from './pages/my-searches/my-searches.component';

const routes: Routes = [
  { path: '', component: ReactiveSearchComponent },
  { path: 'search', component: ReactiveSearchComponent },
  { path: 'my-searches', component: MySearchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
