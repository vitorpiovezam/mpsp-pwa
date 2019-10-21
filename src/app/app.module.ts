import { ArispService } from './core/services/arisp.service';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveSearchComponent } from './pages/reactive-search/reactive-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ArispFormComponent } from './core/forms/arisp-form/arisp-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MySearchesComponent } from './pages/my-searches/my-searches.component';
import { HttpClientModule } from '@angular/common/http';
import { ArpenpFormComponent } from './core/forms/arpenp-form/arpenp-form.component';
import { ArpenpService } from './core/services/arpenp.service';
import { MatOptionModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveSearchComponent,
    ArispFormComponent,
    ArpenpFormComponent,
    MySearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    ArispService,
    ArpenpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
