import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealInfoComponent } from './meal-info.component';


@Component ({
  selector: 'meal-display',
  inputs:['meal'],
  directives: [MealInfoComponent],
  template: `
    <h4 (click)="showInfo(meal)">{{ meal.name }}</h4>
    <meal-info *ngIf="show" [meal]="selectedMeal"></meal-info>
  `
})

export class MealComponent {
  public show: boolean = false;
  public meal: Meal;
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  showInfo(clickedMeal: Meal) :void {
    this.show = !this.show;
    this.selectedMeal = clickedMeal;
  }
}
