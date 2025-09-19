import { Component } from '@angular/core';
import { BeneficiaryService, Beneficiary } from '../beneficiary.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']

})
export class AddBeneficiaryComponent {
  beneficiary: Beneficiary = {
    nickName: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
    customerCRN: ''
  };

  constructor(private service: BeneficiaryService) {}

  submit() {
    this.service.addBeneficiary(this.beneficiary).subscribe(res => {
      alert('Beneficiary added successfully! Pending for approval.');
      this.beneficiary = { nickName: '', accountNumber: '', bankName: '', ifsc: '', customerCRN: '' };
    }, err => {
      alert('Error adding beneficiary');
    });
  }
}
