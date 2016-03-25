import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component ({
  selector: 'meal-info',
  inputs:['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <div class="meal-info">
      <i class="fa fa-angle-down"></i>
      <p>{{ meal.description }}</p>
      <p>Calorie Count: {{ meal.calories }}</p>
      <p>Eaten at {{ meal.time }}.</p>
      <h5 (click)="showEdit(meal)">Edit Me!</h5>
      <edit-meal-details *ngIf="show" [meal]="selectedMeal">
      </edit-meal-details>
    </div>
  `
})
export class MealInfoComponent {
  public show: boolean = false;
  public meal: Meal;
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  showEdit(clickedMeal: Meal) :void {
    this.show = !this.show;
    this.selectedMeal = clickedMeal;
  }
}
