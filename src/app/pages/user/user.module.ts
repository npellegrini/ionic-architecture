import { NgModule } from '@angular/core';
import { USER_ROUTES } from './user.routes';


//-- Components --//
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations:[
    DashboardComponent,
  ],
  exports: [
    DashboardComponent
  ],
  imports: [USER_ROUTES],
})
export class UserModule {}