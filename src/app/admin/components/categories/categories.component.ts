import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/home/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      data => this.categories = data,
      error => console.error(error)
    );
  }

  createCategory(name: string, description: string) {
    const data = { name, description };
    this.categoriesService.createCategory(data).subscribe(
      response => {
        console.log(response);
        this.getCategories(); // Refresh the list after creation
      },
      error => console.error(error)
    );
  }

  updateCategory(id: number, name: string, description: string) {
    const data = { name, description };
    this.categoriesService.updateCategory(id, data).subscribe(
      response => {
        console.log(response);
        this.getCategories(); // Refresh the list after update
      },
      error => console.error(error)
    );
  }

  deleteCategory(id: number) {
    this.categoriesService.deleteCategory(id).subscribe(
      response => {
        console.log(response);
        this.getCategories(); // Refresh the list after deletion
      },
      error => console.error(error)
    );
  }

}
