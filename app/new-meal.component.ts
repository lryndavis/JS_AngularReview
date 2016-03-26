import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="col-md-4">
      <h3>Add a Meal:</h3>
        <fieldset class="form-group">
          <input placeholder="Your Meal" class="form-control" #newFood>
        </fieldset>
        <fieldset class="form-group">
          <input placeholder="Details about your Meal" class="form-control" #newDescription>
        </fieldset>
        <fieldset class="form-group">
          <input placeholder="Total Calories" class="form-control" #newCalories>
        </fieldset>
        <fieldset class="form-group">
          <input placeholder="When was this meal eaten?" class="form-control" #newTime>
        </fieldset>
        <button (click)="addMeal(newFood, newDescription, newCalories, newTime)" class="btn btn-default btn-block add-button">ADD</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  //creates new Meal object 
  addMeal(userFood: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement, userTime: HTMLInputElement) {
    var newMeal = new Meal(userFood.value, userDescription.value, parseInt(userCalories.value), userTime.value);
    this.onSubmitNewMeal.emit(newMeal);
    userFood.value = "";
    userDescription.value = "";
    userCalories.value = "";
    userTime.value = "";
  }
}
