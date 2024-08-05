import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { HeaderComponent } from './header/header.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule } from "@angular/forms";
import { CategoriesService } from "../home/services/categories/categories.service";
import { CategoriesStoreItem } from "../home/services/categories/categories.storeItem";
import { ProductsService } from "../home/services/products/products.service";
import { ProductsStoreItem } from "../home/services/products/products.storeItem";
import { OrdersService } from "../home/services/orders/orders.service";
import { MatIconModule } from '@angular/material/icon';
import { CartStoreItem } from "../home/services/cart/cart.storeItem";
import { UsersService } from "../home/services/users/users.service";


@NgModule({
    declarations: [
        AdminComponent,
        HeaderComponent,
        SidenavigationComponent,
        ProductsComponent,
        CategoriesComponent,
        OrdersComponent,
        SidenavigationComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        AdminRoutingModule,
        MatIconModule,
        FormsModule,
    ],
    providers: [
        CategoriesService,
        CategoriesStoreItem,
        ProductsService,
        ProductsStoreItem,
        CartStoreItem,
        UsersService,
        OrdersService,
    ]
})

export class AdminModule { }