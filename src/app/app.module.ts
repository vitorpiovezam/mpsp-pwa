import { ReportService } from './core/services/report.service';
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
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveSearchComponent } from './pages/reactive-search/reactive-search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { ArispFormComponent } from './core/forms/arisp-form/arisp-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MySearchesComponent } from './pages/my-searches/my-searches.component';
import { HttpClientModule } from '@angular/common/http';
import { ArpenpFormComponent } from './core/forms/arpenp-form/arpenp-form.component';
import { ArpenpService } from './core/services/arpenp.service';
import { MatOptionModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { LoginComponent } from './pages/login/login.component';
import { CagedCompanyFormComponent } from './core/forms/caged-company-form/caged-company-form.component';
import { ArispResultComponent } from './shared/components/arisp-result/arisp-result.component';
import { ArpenpResultComponent } from './shared/components/arpenp-result/arpenp-result.component';
import { CadespResultComponent } from './shared/components/cadesp-result/cadesp-result.component';
import { CagedCompanyResultComponent } from './shared/components/caged-company-result/caged-company-result.component';
import { CagedResponsibleResultComponent } from './shared/components/caged-responsible-result/caged-responsible-result.component';
import { CagedWorkerResultComponent } from './shared/components/caged-worker-result/caged-worker-result.component';
import { CensecResultComponent } from './shared/components/censec-result/censec-result.component';
import { DetranCnhResultComponent } from './shared/components/detran-cnh-result/detran-cnh-result.component';
import { DetranTimelineResultComponent } from './shared/components/detran-timeline-result/detran-timeline-result.component';
import { DetranVehicleResultComponent } from './shared/components/detran-vehicle-result/detran-vehicle-result.component';
import { InfocrimResultComponent } from './shared/components/infocrim-result/infocrim-result.component';
import { JucespResultComponent } from './shared/components/jucesp-result/jucesp-result.component';
import { SitelResultComponent } from './shared/components/sitel-result/sitel-result.component';
import { SivecResultComponent } from './shared/components/sivec-result/sivec-result.component';
import { ReportComponent } from './shared/components/report/report.component';

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
    LoginComponent,
    
    ArispResultComponent,
    ArpenpResultComponent,
    CensecResultComponent,
    CadespResultComponent,
    CagedCompanyResultComponent,
    CagedResponsibleResultComponent,
    CagedWorkerResultComponent,
    DetranCnhResultComponent,
    DetranTimelineResultComponent,
    DetranVehicleResultComponent,
    InfocrimResultComponent,
    JucespResultComponent,
    SitelResultComponent,
    SivecResultComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
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
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule
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
    SivecService,
    ReportService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
