import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/home/services/products/products.service';
import { CategoriesService } from 'src/app/home/services/categories/categories.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  categoryName: string = '';
  newProduct = {
    id: null,
    name: '',
    description: '',
    imgUrl: '',
    quantity: 0,
    price: 0,
    categoryId: 0,
  };

  // fileName: string | null = null;

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
      this.assignCategoryNames();
    });
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.fileName = this.fileName;
  //     const reader = new FileReader();
  //     reader.onload = e => this.newProduct.imgUrl = e.target?.result as string;
  //     reader.readAsDataURL(file);
  //   }
  // }

  addProduct() {
    if (this.newProduct.id) {
      this.updateProduct(this.newProduct.id);
    } else {
      let {id, ...newProductWithoutId} = this.newProduct;
      this.productsService.createProduct(newProductWithoutId).subscribe(response => {
        alert(response.message);
        this.loadProducts();
        this.resetForm();
      });
    };
  }

  onCategoryChange(event: any) {
    this.newProduct.categoryId = event.target.value;
  }

  assignCategoryNames() {
    this.products.forEach(product => {
      const category = this.categories.find(cat => cat.id === product.categoryId);
      product.categoryName = category ? category.name : 'Unknown'; // Add a categoryName field
    });
  }

  editProduct(product: any) {
    this.newProduct = { ...product };
    // this.fileName = null;
  }

  updateProduct(id: number) {
    this.productsService.updateProduct(id, this.newProduct).subscribe(response => {
      alert(response.message);
      this.loadProducts();
      this.resetForm();
      
    });
  }

  resetForm() {
    this.newProduct = {
      id: null,
      name: '',
      description: '',
      imgUrl: '',
      quantity: 0,
      price: 0,
      categoryId: 0,
    };
    // this.fileName = null;
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(response => {
      alert(response.message);
      this.loadProducts();
    });
  }

}
