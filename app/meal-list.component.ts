import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { SortPipe } from './sort.pipe';


@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [SortPipe],
  directives: [MealComponent, NewMealComponent],
  template: `
  <div class="col-md-8">
    <span class="todays-meals">Today's Meals:</span>
     <select (change)="onChange($event.target.value)" class="filter">
       <option value="all">Show All Meals</option>
       <option value="healthy">Healthy Meals</option>
       <option value="unhealthy">Unhealthy Meals</option>
     </select>
    <meal-display *ngFor="#currentMeal of mealList | sort:filterSort"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
    </meal-display>
  </div>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterSort: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  //adds new meal to meal-list
  createMeal(meal:Meal): void {
    this.mealList.push(meal);
  }
  //sorts meal by calorie count using pipe
  onChange(filterOption) {
    this.filterSort = filterOption;
  }
}
