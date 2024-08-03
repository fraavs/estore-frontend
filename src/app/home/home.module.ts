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
    ],
    providers: []
})

export class HomeModule { }