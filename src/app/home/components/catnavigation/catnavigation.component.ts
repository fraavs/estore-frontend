import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css']
})
export class CatnavigationComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCategories();
  }
  
  loadCategories() {
    this.http.get('/api/categories').subscribe(
      (response: any) => {
        this.categories = response;
      },
      error => {
        console.log('Error fetching categories', error);
      }
    );
  }
}
