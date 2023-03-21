import {
  Component,
  OnInit,

  EventEmitter,
  Output,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinflist-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private slServer: ShoppingListService) { }
 

  ngOnInit() {
    this.subscription = this.slServer.stratedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slServer.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    );
  }

  onSubmit(form: NgForm) {
 
      const value = form.value;
 // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
if (this.editMode){
  this.slServer.updateIngredient(this.editedItemIndex, newIngredient);
}else{
  this.slServer.addIngredient(newIngredient);
}
this.editMode = false;
form.reset();
    // this.ingredientAdded.emit(newIngredient);
    // this.slServer.addIngredient(newIngredient);
    
   
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;

  }

  onDelete(){
    this.slServer.deleteIngredients(this.editedItemIndex);
    
    this.onClear();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
