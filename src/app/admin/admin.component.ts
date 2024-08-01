import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // categories: any[] = [];
  // message: string = '';

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.loadCategories();
  // }

  // loadCategories() {
  //   this.http.get('/api/admin/categories').subscribe(
  //     (response: any) => {
  //       this.categories = response;
  //     },
  //     error => {
  //       console.error('Error fetching categories:', error);
  //     }
  //   );
  // }

  // createCategory(name: string, description: string) {
  //   this.http.post('/api/admin/categories', { name, description }).subscribe(
  //     response => {
  //       this.message = 'Category created successfully!';
  //       this.loadCategories(); // Refresh category list
  //     },
  //     error => {
  //       this.message = error.error.message || 'Failed to create category.';
  //     }
  //   );
  // }
}
