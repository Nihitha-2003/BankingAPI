import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';

import { BeneficiaryService } from './beneficiary/beneficiary.service';

@NgModule({
  declarations: [
    AppComponent,
    // AddBeneficiaryComponent,
    // ListBeneficiaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BeneficiaryModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
