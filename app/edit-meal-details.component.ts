import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs:['meal'],
  template: `
  <div class="edit-meal-info">
    <h3>Edit Meal Info</h3>
    <fieldset class="form-group">
      <input [(ngModel)]="meal.name" class="form-control" />
    </fieldset>
    <fieldset class="form-group">
      <input [(ngModel)]="meal.description" class="form-control" />
    </fieldset>
    <fieldset class="form-group">
      <input [(ngModel)]="meal.calories" class="form-control" />
    </fieldset>
  </div>
   `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
