import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs:['meal'],
  template: `
  <div class="meal-details">
    <h4>{{ meal.name}}</h4>
    <p>{{ meal.description }}</p>
    <p>Caloric Count: {{ meal.calories }}</p>
    <p>You ate {{ meal.name }} at {{ meal.time }}.</p>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
