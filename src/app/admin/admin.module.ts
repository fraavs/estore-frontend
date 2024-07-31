import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations: [
        AdminComponent,
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