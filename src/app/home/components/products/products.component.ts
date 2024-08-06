import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { Product } from '../../types/product.type';
import { Category } from '../../types/category.type';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { ProductsStoreItem } from '../../services/products/products.storeItem';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  allProducts: Product[] = [];
  categories: Category[] = [];


  constructor(
    private productsService: ProductsService, 
    private categoriesService: CategoriesService,
    private cart: CartStoreItem,
    private productsStore: ProductsStoreItem,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAllProduct().subscribe(data => {
      this.allProducts = data;
      this.products = data;
    });
  }

  updateProducts(categoryId: number) {
    if (categoryId) {
      this.products = this.allProducts.filter(product => product.categoryId === categoryId);
    } else {
      this.products = this.allProducts;
    }
  }

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
  
}