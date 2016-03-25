export class Meal {
  constructor(
    public name: string,
    public description: string,
    public calories: number,
    public time: string,
    public id?: number) {
  }
}
