import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {GridModule } from '@progress/kendo-angular-grid';

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { JobFormComponent } from './material-component/JobForm/jobForm.component';
import {ReactiveFormsModule } from '@angular/forms';
import { Formio, FormioModule, FormioAppConfig } from '@formio/angular';
//import { NgToastModule } from 'ng-angular-popup';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';  
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgScrolltopModule } from 'ng-scrolltop';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GridComponent } from './material-component/grid/grid.component';
import { MatCardModule } from '@angular/material/card'; 

import { DARK_MODE_OPTIONS } from 'angular-dark-mode';


@NgModule({
  declarations: [
    GridComponent,
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,  
    
  ],
  imports: [
    MatDialogModule,
    MdbModalModule,
    NgScrolltopModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule,
    DropDownsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormioModule,
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule,
    GridModule,
    InputsModule,
    ButtonsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatCardModule,
    NgToastModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }, {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '53180931222-j2gtoc5bdergiktr2r869a2f105m3ie7.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
          darkModeClass: 'dark-mode',
          lightModeClass: 'light-mode'
      }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
