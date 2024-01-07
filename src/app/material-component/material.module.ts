import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing'; 
import { MenuComponent } from './menu/menu.component';   
import { GridModule } from "@progress/kendo-angular-grid";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs"; 
import {  FormioModule, FormioAppConfig } from '@formio/angular'; 
import { AuthService } from '../services/auth.service';
import { AppConfig } from '../shared/formio-config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns"; 
import { MatCardModule } from '@angular/material/card'; 
import { JobFormComponent } from './JobForm/jobForm.component';
//import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    FormioModule,
    NgApexchartsModule,
    DropDownsModule,
    MatCardModule,


  ],
  providers:  [AuthService ,{provide: FormioAppConfig, useValue: AppConfig},],
  entryComponents: [ ],
  declarations: [ 
    MenuComponent, 
    DashboardComponent,
    JobFormComponent, 
  ]
})
export class MaterialComponentsModule {}
