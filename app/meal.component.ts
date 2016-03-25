import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs:['meal'],
  template: `
    <p>{{ meal.name}}</p>
    <p>{{ meal.description }}</p>
    <p>{{ meal.calories }}</p>
  `
})

export class MealComponent {
  public meal: Meal;
}
