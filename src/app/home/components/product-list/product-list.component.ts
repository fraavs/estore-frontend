import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // this.loadProducts();
  }

  // loadProducts() {
  //   this.http.get('/api/products').subscribe(
  //     (response: any) => {
  //       this.products = response;
  //     },
  //     error => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  // }



}
