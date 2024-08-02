import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://192.168.144.132:3000/api/admin/products';
  private apiUrlclient = 'http://192.168.144.132:3000/api/product';

  constructor(private httpClient: HttpClient) { }

  createProduct(product: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, product);
  }

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrl);
  }

  getAllProduct(): Observable<any[]> {
    return this.httpClient.get<any>(this.apiUrlclient);
  }


  updateProduct(id: number, product: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
