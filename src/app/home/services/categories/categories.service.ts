import { Injectable } from '@angular/core';
import { Category } from '../../types/category.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://192.168.144.132:5231/api/admin/categories';

  constructor(private httpClient: HttpClient) { }


  // Create Category
  createCategory(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  // List Categories
  getCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }

  // Update Category
  updateCategory(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete Category
  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
