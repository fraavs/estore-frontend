import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { UserLoginComponent } from "./components/users/user-login/user-login.component";
import { UserRegistrationComponent } from "./components/users/user-registration/user-registration.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesService } from "./services/categories/categories.service";
import { CategoriesStoreItem } from "./services/categories/categories.storeItem";
import { ProductsService } from "./services/products/products.service";
import { ProductsStoreItem } from "./services/products/products.storeItem";
import { CartStoreItem } from "./services/cart/cart.storeItem";
import { UsersService } from "./services/users/users.service";
import { OrdersService } from "./services/orders/orders.service";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        HomeComponent,
        UserLoginComponent,
        UserRegistrationComponent,
        ProductListComponent,
        HeaderComponent,
        CatnavigationComponent,
        SidenavigationComponent,
        ProductsComponent,
        ProductdetailsComponent,
        CartComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
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

export class HomeModule { }