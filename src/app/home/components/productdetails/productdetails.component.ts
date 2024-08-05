import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../types/product.type';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private productsService: ProductsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.subscription.add(
      this.productsService.getProductById(id).subscribe((product: Product) => {
          this.product = product;
      },
      error => {
        console.error('There was an error while fetching the product: ', error);
      }
    )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
