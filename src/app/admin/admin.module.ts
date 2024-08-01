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
        FormsModule,
    ],
    providers: [
        CategoriesService,
    ]
})

export class AdminModule { }