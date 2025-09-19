import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ListBeneficiaryComponent } from './list-beneficiary/list-beneficiary.component';

const benroutes: Routes = [
  { path: 'add', component: AddBeneficiaryComponent },
  { path: 'list', component: ListBeneficiaryComponent },
  { path: '', redirectTo: 'add', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AddBeneficiaryComponent,
    ListBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(benroutes)   
  ]
})
export class BeneficiaryModule { }
