import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
   <h1>Check Out All These Meal</h1>
   <meal-list
   [mealList]="meals"
   (onMealSelect)="mealWasSelected($event)">
   </meal-list>
   </div>
  `
  })
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Hot Pretzel with Cheese", "I ate all of this", 4000, 0),
      new Meal("Nachos", "I ate all of this", 8000, 1),
      new Meal("Fish", "I ate all the fish", 300, 2),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
