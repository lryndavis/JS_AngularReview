import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <div class="header">
       <h1>Meal Journal</h1>
       <h3>What did you eat today?</h3>
     </div>
     <meal-list
     [mealList]="meals">
     </meal-list>
   </div>
  `
  })
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      //delicious sample meals for testing purposes
      new Meal("Hot Pretzel with Cheese", "I ate all of this", 4000, "1:00am", 0),
      new Meal("Nachos", "I ate all of this", 8000, "1:30pm", 1),
      new Meal("Fondue", "I ate so much fondue", 3000, "2:45pm",  2),
    ];
  }
}
