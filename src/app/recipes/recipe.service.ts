import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinflist-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/originals/14/27/06/1427062d6b6104c4cadbf5a0c7e71491.jpg',[
            new Ingredient('meat',1),
            new Ingredient('Apple',2)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.eatwell101.com/wp-content/uploads/2018/04/sausage-and-potato.jpg', [
            new Ingredient('Buns',3),
            new Ingredient('Apple',2)
        ])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();

      }

      addIbgredientsToShoppinfList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
    }
    

