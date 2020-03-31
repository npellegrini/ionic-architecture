import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

//-- Components --//
import { PagesPage } from './pages.page';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';



@NgModule({
  declarations:[
    // DashboardComponent  
  ],
  exports: [
  ],
  imports: [ 
    PAGES_ROUTES,
    AdminModule,
    UserModule  
  ],
})
export class PagesModule {}
