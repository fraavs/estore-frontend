import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

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

  @ViewChild(ProductsComponent) productsComponent!: ProductsComponent;

  onCategorySelected(categoryId: number) {
    this.productsComponent.updateProducts(categoryId);
  }



}
