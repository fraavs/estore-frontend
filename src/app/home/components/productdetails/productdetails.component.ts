import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../types/product.type';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartStoreItem } from '../../services/cart/cart.storeItem';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy {

  product: Product = {
    id: 0,
    name: '',
    imgUrl: '',
    price: 0,
    quantity: 0,
    description: '',
    categoryId: 0,
  };
  subscription: Subscription = new Subscription();

  constructor(private productsService: ProductsService, private activateRoute: ActivatedRoute, private cart: CartStoreItem) { }

  ngOnInit(): void {
    const id: number = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.subscription.add(
      this.productsService.getProductById(id).subscribe(product => {
        this.product = product[0];
      })
    );
  }

  addToCart() {
    this.cart.addProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
