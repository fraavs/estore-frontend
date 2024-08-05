import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriesStoreItem } from '../../services/categories/categories.storeItem';
import { NavigationEnd, Router } from '@angular/router';
import { Category } from '../../types/category.type';
import { filter } from 'rxjs';


@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css']
})
export class CatnavigationComponent {
  @Output()
  categoryCliked: EventEmitter<number> = new EventEmitter<number>();

  displayOptions: boolean = true;

  constructor(public categoriesStore: CategoriesStoreItem, private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.displayOptions = (event as NavigationEnd).url === 'home/products' ? true : false;
    })
  }

  onCategoryClick(category: Category): void {
    this.categoryCliked.emit(category.id);
  }

}
