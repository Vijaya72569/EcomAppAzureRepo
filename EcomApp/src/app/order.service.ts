import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
private apiUrl="https://orderapi2025-fmhjamd0bjfnctct.canadacentral-01.azurewebsites.net/api/Order"
  constructor(private http:HttpClient) { }

   placeOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
