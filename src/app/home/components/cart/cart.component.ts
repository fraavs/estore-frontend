import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { CartItem } from '../../types/cart.type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  constructor(
    public cartStore: CartStoreItem,
    private router: Router,
    private usersService: UsersService,
  ) {
    
  }

  ngOnInit(): void {

  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }

  navigateToHome() {
    this.router.navigate(['home/products']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
