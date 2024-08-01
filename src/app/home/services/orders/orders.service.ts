import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = 'http://192.168.144.132:5231/api/admin/orders';

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  updateOrderStatus(id: number, status: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}/status`, { status });
  }

}
