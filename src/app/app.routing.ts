import { Routes } from '@angular/router'; 
import { FullComponent } from './layouts/full/full.component'; 
import { DashboardComponent } from './material-component/dashboard/dashboard.component'; 
import { AuthGuard } from './shared/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

//      {path: "login", component: LoginComponent},
      {path: "dashboard", component: DashboardComponent},
 
      // {
      //   path: 'material-component',
      //   loadChildren:
      //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule), canActivate: [AuthGuard]

      // },
      {
        path: 'material-component',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)

      },  
    ]
  }
];
