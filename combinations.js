export class Combination {
  constructor(values = []) {
    this.values = values;
  }

  sum() {
    return this.values.reduce(
      (result, value) => result + value, 0
    )
  }
}