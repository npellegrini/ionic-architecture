import { Routes, RouterModule } from "@angular/router";

//--Components--//
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '', component: DashboardComponent, pathMatch:'full'
    },
    // {
    //   path: '', redirectTo: 'admin/dashboard', pathMatch:'full'
    // },
  ];

  export const USER_ROUTES = RouterModule.forChild(routes);