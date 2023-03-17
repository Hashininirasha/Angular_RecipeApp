import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredentsChnaged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngrediences(){
        return this.ingredients;

        
      }
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredentsChnaged.emit(this.ingredients.slice());
        
      }

      addIngredients(ingredients: Ingredient[]){
            // for(let ingredient of ingredients){
            //     this.addIngredient(ingredient);
            // }

    this.ingredients.push(...ingredients);
this.ingredentsChnaged.emit(this.ingredients.slice())
      }
}
