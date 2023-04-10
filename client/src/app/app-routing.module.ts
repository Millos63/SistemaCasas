import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandLordListComponent } from './components/land-lord-list/land-lord-list.component';
import { LandLordFormComponent } from './components/land-lord-form/land-lord-form.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { AdvisorListComponent } from './components/advisor-list/advisor-list.component';
import { AdvisorFormComponent } from './components/advisor-form/advisor-form.component';
import { LlpListComponent } from './components/llp-list/llp-list.component';
import { LLPFormComponent } from './components/llp-form/llp-form.component';

const routes: Routes = [
  //Rutas de LandLord
  {path:'', redirectTo:'/LandLords',pathMatch:'full'},
  {path: 'LandLords', component: LandLordListComponent},
  {path: 'LandLords/add', component: LandLordFormComponent}, 
  {path: 'LandLords/add/:idLandLord', component: LandLordFormComponent},

  //Rutas de Property
  {path:'', redirectTo:'/Properties',pathMatch:'full'},
  {path: 'Properties', component: PropertyListComponent},
  {path: 'Properties/add', component: PropertyFormComponent}, 
  {path: 'Properties/add/:idProperty', component: PropertyFormComponent},

  //Rutas de Advisor
  {path:'', redirectTo:'/Advisors',pathMatch:'full'},
  {path: 'Advisors', component: AdvisorListComponent},
  {path: 'Advisors/add', component: AdvisorFormComponent}, 
  {path: 'Advisors/add/:idAdvisor', component: AdvisorFormComponent},

  {path:'', redirectTo:'/LandLordsProperties', pathMatch:'full'},
  {path:'LandLordsProperties', component:LlpListComponent},
  {path:'LandLordsProperties/add', component: LLPFormComponent},
  {path:'LandLordsProperties/add/:idLandLord/:idProperty', component: LLPFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
