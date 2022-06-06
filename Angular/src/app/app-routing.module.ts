import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PensionDetailComponent } from './PensionDetail/pension-detail.component';
import { PensionDisbursementComponent } from './PensionDisbursement/pension-disbursement.component';
import { PensionerByAadharComponent } from './PensionerByAadharCard/pensioner-by-aadhar.component';
import { PensionerDetailsComponent } from './PensionerDetails/pensioner-details.component';
import { ProcessPensionComponent } from './ProcessPension/process-pension.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  
  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"pensionerDetails",
    component:PensionerDetailsComponent
  },
  {
    path:"pensionDisbursement",
    component:PensionDisbursementComponent
  },
  {
    path:"pensionDetail",
    component:PensionDetailComponent
  },
  {
    path:"processPension",
    component:ProcessPensionComponent
  },
  {
    path:"pensionerByAaadhar",
    component:PensionerByAadharComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
