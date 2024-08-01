import { Component } from '@angular/core';
import { OrdersComponent } from '../components/orders/orders.component';
import { ProductsComponent } from '../components/products/products.component';
import { CategoriesComponent } from '../components/categories/categories.component';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent {

  selectedComponent: any = CategoriesComponent;

  selectComponent(component: string) {
    switch (component) {
      case 'categories':
        this.selectedComponent = CategoriesComponent;
        break;
      case 'products':
        this.selectedComponent = ProductsComponent;
        break;
      case 'orders':
        this.selectedComponent = OrdersComponent;
        break;
      default:
        this.selectedComponent = CategoriesComponent;
    }
  }
}
