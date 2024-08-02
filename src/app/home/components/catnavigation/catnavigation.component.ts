import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';


@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrls: ['./catnavigation.component.css']
})
export class CatnavigationComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) { }


  ngOnInit(): void {
    this.getCategories();
}
  getCategories() {
    this.categoriesService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error(error) 
    );
  }

}
