const person = {
  name: "Alice",
  lastName: "Parker",
  student: true
};

console.log(person.student);

console.log(person.lastName);

console.log(person.name);

const personWalk = {
  stepsThisWeek: 200,
  addSteps: function (steps) {
    this.stepsThisWeek += steps;
  }
};

personWalk.addSteps(250);

console.log(personWalk.stepsThisWeek);
