import { Routes, RouterModule } from "@angular/router";

//--Components--//

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
    },   
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then( m => m.UserModule)
    },   
  ];

  export const PAGES_ROUTES = RouterModule.forChild(routes);