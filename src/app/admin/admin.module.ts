import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { HeaderComponent } from './header/header.component';
import { SidenavigaionComponent } from './sidenavigaion/sidenavigaion.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
    declarations: [
        AdminComponent,
        HeaderComponent,
        SidenavigaionComponent,
        ProductsComponent,
        CategoriesComponent,
        OrdersComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        AdminRoutingModule,
    ],
    providers: [

    ]
})

export class AdminModule { }