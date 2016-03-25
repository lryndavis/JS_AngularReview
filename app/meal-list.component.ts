import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { SortPipe } from './sort.pipe';


@Component ({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [SortPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
   <select (change)="onChange($event.target.value)" class="filter">
   <option value="all">Show All</option>
   <option value="healthy">Healthy</option>
   </select>
  <meal-display *ngFor="#currentMeal of mealList | sort:filterSort"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
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
  createMeal(meal:Meal): void {
    this.mealList.push(meal);
  }
  onChange(filterOption) {
    this.filterSort = filterOption;
  }
}
