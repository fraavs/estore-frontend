import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../types/category.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://192.168.144.132:3000/api/admin/categories';

  constructor(private httpClient: HttpClient) { }


  // Create Category
  createCategory(data: any): Observable<Category[]> {
    return this.httpClient.post<Category[]>(`${this.apiUrl}`, data);
  }

  // List Categories
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}`);
  }

  // Update Category
  updateCategory(id: number, data: any): Observable<Category[]> {
    return this.httpClient.put<Category[]>(`${this.apiUrl}/${id}`, data);
  }

  // Delete Category
  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete<Category[]>(`${this.apiUrl}/${id}`);
  }

}
