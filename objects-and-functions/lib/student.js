class Student {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.scores = [];
    this.avergeGrade = (number[1] * number[2]) / 2;
  }
  logScore(number) {
    this.scores.push(number);
  }
}

module.exports = Student;
