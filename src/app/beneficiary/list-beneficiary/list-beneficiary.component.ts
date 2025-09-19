import { Component, OnInit } from '@angular/core';
import { BeneficiaryService, Beneficiary } from '../beneficiary.service';

@Component({
  selector: 'app-list-beneficiary',
  templateUrl: './list-beneficiary.component.html',
  styleUrls: ['./list-beneficiary.component.css']
})
export class ListBeneficiaryComponent implements OnInit {
  beneficiaries: Beneficiary[] = [];
  customerCRN = ''; 

  constructor(private service: BeneficiaryService) {}

  ngOnInit() {
    this.loadBeneficiaries();
  }

  loadBeneficiaries() {
    this.service.getBeneficiaries(this.customerCRN).subscribe(res => {
      this.beneficiaries = res;
    });
  }

  approve(id: number) {
    this.service.updateStatus(id, 'Approved').subscribe(() => this.loadBeneficiaries());
  }

  reject(id: number) {
    this.service.updateStatus(id, 'Rejected').subscribe(() => this.loadBeneficiaries());
  }
}

