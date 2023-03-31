import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandLordFormComponent } from './components/land-lord-form/land-lord-form.component';
import { LandLordListComponent } from './components/land-lord-list/land-lord-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandLordFormComponent,
    LandLordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
