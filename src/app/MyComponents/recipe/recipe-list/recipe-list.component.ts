import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector:'app-recipe-list',
    templateUrl:'recipe-list.component.html'
})
export class RecipeListComponent{
    recipes: Recipe[] = [
        new Recipe('A Recipe Name','Recipe Decription','https://www.cookingcarnival.com/wp-content/uploads/2017/07/Pav-bhaji-768x1024.webp'),   
        new Recipe('A Recipe Name','Recipe Decription','https://www.cookingcarnival.com/wp-content/uploads/2017/07/Pav-bhaji-768x1024.webp')
]
    constructor(){
        console.log(this.recipes)
    }
}