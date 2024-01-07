import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ActivityTimelineComponent } from '../dashboard-components/activity-timeline/activity-timeline.component';
import { ProfileComponent } from '../dashboard-components/profile/profile.component';
import { OurVisiterComponent } from '../dashboard-components/our-visiter/our-visiter.component';
import { ContactsComponent } from '../dashboard-components/contacts/contacts.component';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgApexchartsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent]
})
export class DashboardModule {}
