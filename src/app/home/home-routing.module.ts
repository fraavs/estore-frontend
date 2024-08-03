import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { UserLoginComponent } from "./components/users/user-login/user-login.component";
import { UserRegistrationComponent } from "./components/users/user-registration/user-registration.component";
import { ProductdetailsComponent } from "./components/productdetails/productdetails.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'register',
                component: UserRegistrationComponent,
            },
            {
                path: 'login',
                component: UserLoginComponent,
            },
            {
                path: 'products',
                component: ProductListComponent,
            },
            {
                path: 'products/:id',
                component: ProductdetailsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule { }