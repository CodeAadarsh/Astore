import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { ShoppingComponent } from './MyComponents/shopping/shopping.component';
import { RecipeComponent } from './MyComponents/recipe/recipe.component';
import { RecipeListComponent } from './MyComponents/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './MyComponents/recipe/recipe-detail/recipe-detail.component';
import { shopEditComponent } from './MyComponents/shopping/shopEdit/shopEdit.component';
import { RecipeItemComponent } from './MyComponents/recipe/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    shopEditComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
