import { Component } from "@angular/core";
import { Ingredients } from "../Shared/ingredients.model";

@Component({
    selector:'app-shopping',
    templateUrl:'shopping.component.html'
})
export class ShoppingComponent {
    ingredients:Ingredients[] = [
        new Ingredients('Apples',10),
        new Ingredients('Tamatoes',10)
]

}