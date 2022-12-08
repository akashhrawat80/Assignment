import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AboutComponent } from './task/about/about.component';
import { DashboardComponent } from './task/dashboard/dashboard.component';
import { TablesComponent } from './task/tables/tables.component';

const routes: Routes = [
  { path : '', component: DefaultComponent,
   children:[
    {
    path: '' , component: DashboardComponent} ,
   {
    path: 'table', component: TablesComponent
  },
  {
    path: 'about', component: AboutComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
