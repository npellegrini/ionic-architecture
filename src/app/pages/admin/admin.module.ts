import { NgModule } from '@angular/core';
import { ADMIN_ROUTES } from './admin.routes';


//-- Components --//
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations:[
    DashboardComponent,
  ],
  exports: [
    DashboardComponent
  ],
  imports: [ADMIN_ROUTES],
})
export class AdminModule {}
