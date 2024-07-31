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

@NgModule({
    declarations: [
        HomeComponent,
        UserLoginComponent,
        UserRegistrationComponent,
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        HomeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: []
})

export class HomeModule { }