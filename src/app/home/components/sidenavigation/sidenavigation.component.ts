import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {

  products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();  
  }

  fetchProducts() {
    this.productsService.getProducts().subscribe((data: any[]) => {
      this.products = data.map(product => ({ ...product, isOpen: false}));
    });
  }

  toggleDropdown(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.isOpen = !product.isOpen;
    }
  }

  selectVariant(variantId: number) {
    console.log( `Selected variant ID: ${variantId}`);
  }

}
