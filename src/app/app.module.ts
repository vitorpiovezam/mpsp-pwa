import { CagedWorkerFormComponent } from './core/forms/caged-worker-form/caged-worker-form.component';
import { CagedResponsibleFormComponent } from './core/forms/caged-responsible-form/caged-responsible-form.component';
import { DetranVehicleFormComponent } from './core/forms/detran-vehicle-form/detran-vehicle-form.component';
import { DetranTimeLineFormComponent } from './core/forms/detran-timeline-form/detran-timeline-form.component';
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
import { DetranCNHFormComponent } from './core/forms/detran-cnh-form/detran-cnh-form.component';
import { CensecFormComponent } from './core/forms/censec-form/censec-form.component';
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
import { MatSelectModule, MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ArispFormComponent } from './core/forms/arisp-form/arisp-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MySearchesComponent } from './pages/my-searches/my-searches.component';
import { HttpClientModule } from '@angular/common/http';
import { ArpenpFormComponent } from './core/forms/arpenp-form/arpenp-form.component';
import { ArpenpService } from './core/services/arpenp.service';
import { MatOptionModule } from '@angular/material/core';
import { LoginComponent } from './pages/login/login.component';
import { CagedCompanyFormComponent } from './core/forms/caged-company-form/caged-company-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MySearchesComponent,
    ReactiveSearchComponent,

    ArispFormComponent,
    ArpenpFormComponent,
    CadespFormComponent,
    CagedCompanyFormComponent,
    CagedResponsibleFormComponent,
    CagedWorkerFormComponent,
    CensecFormComponent,
    DetranCNHFormComponent,
    DetranTimeLineFormComponent,
    DetranVehicleFormComponent,
    InfocrimFormComponent,
    JucespFormComponent,
    SitelFormComponent,
    SivecFormComponent,
    LoginComponent
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
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
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
