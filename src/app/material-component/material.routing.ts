import { Routes } from '@angular/router';

import { JobFormComponent } from './JobForm/jobForm.component';
import { GridComponent } from './grid/grid.component'; 
import { MenuComponent } from './menu/menu.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';  

export const MaterialRoutes: Routes = [
{
    path: 'jobForm',
    component: JobFormComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  
  {
    path: 'menu',
    component: MenuComponent
  },
   
  {
    path: 'dashboard',
    component: DashboardComponent
  },
   
];
