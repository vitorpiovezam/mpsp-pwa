import { SivecService } from './core/services/sivec.service';
import { SitelService } from './core/services/sitel.service';
import { JucespService } from './core/services/jucesp.service';
import { InfocrimService } from './core/services/infocrim.service';
import { DetranService } from './core/services/detran.service';
import { CensecService } from './core/services/cansec.service';
import { CagedService } from './core/services/caged.service';
import { CadespService } from './core/services/cadesp.service';
import { SivecFormComponent } from './core/forms/sivec-form/sivec-form.component';
import { SitelFormComponent } from './core/forms/sitel-form/sitel-form.component';
import { JucespFormComponent } from './core/forms/jucesp-form/jucesp-form.component';
import { InfocrimFormComponent } from './core/forms/infocrim-form/infocrim-form.component';
import { DetranFormComponent } from './core/forms/detran-form/detran-form.component';
import { CensecFormComponent } from './core/forms/censec-form/censec-form.component';
import { CagedFormComponent } from './core/forms/caged-form/caged-form.component';
import { CadespFormComponent } from './core/forms/cadesp-form/cadesp-form.component';
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
    MySearchesComponent,
    ReactiveSearchComponent,

    ArispFormComponent,
    ArpenpFormComponent,
    CadespFormComponent,
    CagedFormComponent,
    CensecFormComponent,
    DetranFormComponent,
    InfocrimFormComponent,
    JucespFormComponent,
    SitelFormComponent,
    SivecFormComponent
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
    ArpenpService,
    CadespService,
    CagedService,
    CensecService,
    DetranService,
    InfocrimService,
    JucespService,
    SitelService,
    SivecService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
