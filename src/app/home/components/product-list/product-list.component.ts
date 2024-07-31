import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get('/api/products').subscribe(
      (response: any) => {
        this.products = response;
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }



}
