import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinflist-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slServices: ShoppingListService) {

   }

  ngOnInit() {
    this.ingredients = this.slServices.getIngrediences();
    this.slServices.ingredentsChnaged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.ingredients;

      } 
    );
    }

    onEditItem(index: number){
      this.slServices.stratedEditing.next(index);
    }
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

