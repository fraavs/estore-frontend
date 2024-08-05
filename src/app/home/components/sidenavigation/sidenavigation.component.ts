import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { MatAccordion } from '@angular/material/expansion';
import { CategoriesService } from '../../services/categories/categories.service';
import { Product } from '../../types/product.type';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnInit {
  categories: Category[] = [];
  products: { [key: number]: Product[] } = {};

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  loadProducts(categoryId: number) {
    if (!this.products[categoryId]) {
      this.productsService.getProductsByCategory(categoryId).subscribe(data => {
        this.products[categoryId] = data;
      });
    }
    this.categorySelected.emit(categoryId);
  }

  @Output() categorySelected = new EventEmitter<number>();

  onTogglePanel(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  flag: boolean = false;

  reverseFlag() {
    this.flag = !this.flag;
  }
}
