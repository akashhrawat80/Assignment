import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/task/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { TablesComponent } from 'src/app/task/tables/tables.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from 'src/app/task/about/about.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    TablesComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class DefaultModule { }
