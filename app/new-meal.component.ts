import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="add-form">
      <h3>Add a Meal:</h3>
        <fieldset class="form-group">
          <input placeholder="Your Meal" class="form-control" #newMeal>
        </fieldset>
        <fieldset class="form-group">
          <input placeholder="Details about your Meal" class="form-control #newDescription">
        </fieldset>
        <fieldset class="form-group">
          <input placeholder="Total Calories" class="form-control" #newCalories>
        </fieldset>
        <button (click)="addMeal(newMeal, newDescription, newCalories)" class=" btn btn-default btn-block add-button">Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userMeal: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement) {
    var newMeal = new Meal(userMeal.value, userDescription.value, parseInt(userCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    userMeal.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
