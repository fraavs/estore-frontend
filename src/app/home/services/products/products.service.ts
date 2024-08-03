import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../types/product.type';


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

  getProducts(query?: string): Observable<Product[]> {
    if (query) {
      this.apiUrl += '?' +query;
    }
    return this.httpClient.get<any>(this.apiUrl);
  }

  getAllProduct(query?: string): Observable<Product[]> {
    if (query) {
      this.apiUrl += '?' +query;
    }
    return this.httpClient.get<any>(this.apiUrlclient);
  }

  getProductById(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrlclient}/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
