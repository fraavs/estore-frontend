import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/home/services/products/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  newProduct = {
    name: '',
    description: '',
    imgUrl: '',
    quantity: 0,
    price: 0,
    categoryId: 0
  };



  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    this.productsService.createProduct(this.newProduct).subscribe(response => {
      alert(response.message);
      this.loadProducts();
      this.newProduct = {
        name: '',
        description: '',
        imgUrl: '',
        quantity: 0,
        price: 0,
        categoryId: 0
      };
    });
  }


  editProduct(product: any) {
    this.newProduct = { ...product };
  }

  updateProduct(id: number) {
    this.productsService.updateProduct(id, this.newProduct).subscribe(response => {
      alert(response.message);
      this.loadProducts();
      this.newProduct = {
        name: '',
        description: '',
        imgUrl: '',
        quantity: 0,
        price: 0,
        categoryId: 0
      };
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(response => {
      alert(response.message);
      this.loadProducts();
    });
  }

  

}
