import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Meal[], args){
    var desiredSortState = args[0];
    if (desiredSortState === "healthy"){
      return input.filter((meal) => {
      return (meal.calories <= 300);
    });
  } else if (desiredSortState === "unhealthy"){
    return input.filter((meal) => {
      return (meal.calories > 300);
    });
  } else {
    return input;
    }
  }
}
