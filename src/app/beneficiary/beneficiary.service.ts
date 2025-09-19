import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Beneficiary {
  beneficiaryId?: number;
  nickName: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
  customerCRN: string;
  status?: 'Pending' | 'Approved' | 'Rejected';
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private apiUrl = 'https://localhost:7130/api/Beneficiaries'; // Backend URL

  constructor(private http: HttpClient) { }

  addBeneficiary(beneficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(this.apiUrl, beneficiary);
  }

  getBeneficiaries(customerCRN: string): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`${this.apiUrl}/$001`);
    
  }

  updateStatus(id: number, status: 'Approved' | 'Rejected'): Observable<Beneficiary> {
    return this.http.put<Beneficiary>(`${this.apiUrl}/update-status/${id}?status=${status}`, {});
  }
}
