import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Category } from '../../types/category.type';
import { filter } from 'rxjs';
import { Product } from '../../types/product.type';
import { ProductsService } from '../../services/products/products.service';
import { CategoriesService } from '../../services/categories/categories.service';


@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css']
})
export class CatnavigationComponent implements OnInit {

  @Output() categorySelected = new EventEmitter<number>();

  categories: Category[] = [];
  products: { [key: number]: Product[] } = {};
  displayOptions: boolean = true;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.displayOptions = (event as NavigationEnd).url === '/home/products' ? true : false;
    })
  }

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

  onCategoryClicked(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }

}
