import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-info',
  inputs:['meal'],
  template: `
      <p>{{ meal.description }}</p>
      <p>{{ meal.calories }}</p>
      <p>{{ meal.time }}</p>
  `
})


  export class MealInfoComponent {
    public meal: Meal;
  }
