import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/home/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];
  editingCategory: any = null;
  formError: boolean = false;

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
    if (!name || !description) {
      this.formError = true;
      return;
    }
    const data = { name, description };
    this.categoriesService.createCategory(data).subscribe(
      response => {
        console.log(response);
        this.getCategories(); // Refresh the list after creation
        this.resetForm();
      },
      error => console.error(error)
    );
  }

  resetForm() {
    this.formError = false;
  }

  setEditingCategory(category: any) {
    this.editingCategory = { ...category }
  }

  updateCategory(category: any) {
    const data = { name: category.name, description: category.description };
    this.categoriesService.updateCategory(category.id, data).subscribe(
      response => {
        console.log(response);
        const index = this.categories.findIndex(c => c.id === category.id);
        if (index !== -1) {
          this.categories[index] = { ...category };
        }
        this.cancelEdit();
      },
      error => console.error(error)
    );
  }

  cancelEdit() {
    this.editingCategory = null;
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
