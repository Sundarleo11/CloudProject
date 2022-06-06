import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PensionerDetailsComponent } from './PensionerDetails/pensioner-details.component';
import { PensionDisbursementComponent } from './PensionDisbursement/pension-disbursement.component';
import { PensionDetailComponent } from './PensionDetail/pension-detail.component';
import { ProcessPensionComponent } from './ProcessPension/process-pension.component';
import { PensionerByAadharComponent } from './PensionerByAadharCard/pensioner-by-aadhar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PensionerDetailsComponent,
    PensionDisbursementComponent,
    PensionDetailComponent,
    ProcessPensionComponent,
    PensionerByAadharComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
