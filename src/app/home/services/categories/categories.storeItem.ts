import { StoreItem } from "src/app/shared/storeItem";
import { Category } from "../../types/category.type";
import { Injectable } from "@angular/core";
import { CategoriesService } from "./categories.service";
import { Observable, map } from "rxjs";


@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]> {
    constructor(private categoriesService: CategoriesService) {
        super([]);
    }

    async loadCategories() {
        this.categoriesService.getCategories().subscribe(categories => {
            this.setValue(categories);
        })
    }

    get categories$(): Observable<Category[]> {
        return this.value$;
    }

    // get topLevelCategories$(): Observable<Category[]> {
    //     return this.value$.pipe(
    //         map((categories) =>
    //             categories.filter((category) => category.parent_category_id === null)
    //         )
    //     );
    // }
}