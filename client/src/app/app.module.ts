import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandLordFormComponent } from './components/land-lord-form/land-lord-form.component';
import { LandLordListComponent } from './components/land-lord-list/land-lord-list.component';

import { LandLordService } from './services/land-lord.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyService } from './services/property.service';
import { AdvisorFormComponent } from './components/advisor-form/advisor-form.component';
import { AdvisorListComponent } from './components/advisor-list/advisor-list.component';
import { AdvisorService } from './services/advisor.service';
import { LLPFormComponent } from './components/llp-form/llp-form.component';
import { LlpListComponent } from './components/llp-list/llp-list.component';
import { LlpService } from './services/llp.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandLordFormComponent,
    LandLordListComponent,
    PropertyFormComponent,
    PropertyListComponent,
    AdvisorFormComponent,
    AdvisorListComponent,
    LLPFormComponent,
    LlpListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LandLordService, PropertyService, AdvisorService,LlpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
