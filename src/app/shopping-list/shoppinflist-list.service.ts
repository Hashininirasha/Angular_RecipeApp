import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredentsChnaged = new EventEmitter<Ingredient[]>();
    stratedEditing = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngrediences(){
        return this.ingredients.slice();

        
      }

      getIngredient(index: number){
          return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredentsChnaged.next(this.ingredients.slice());
        
      }

      addIngredients(ingredients: Ingredient[]){
            // for(let ingredient of ingredients){
            //     this.addIngredient(ingredient);
            // }

    this.ingredients.push(...ingredients);
this.ingredentsChnaged.next(this.ingredients.slice())
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredentsChnaged.next(this.ingredients.slice());

      }

      deleteIngredients(index: number){
        this.ingredients.slice(index, 1);
        this.ingredentsChnaged.next(this.ingredients.slice());
        
      }
}
