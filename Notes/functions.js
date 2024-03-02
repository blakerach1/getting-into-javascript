function greetStudent(student) {
  console.timeLog(`Hello, ${student.name}.`);
}

// we know that student is an object, because when we access the student, we are then also sourcing it's name property

function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}

var left = timeRemaining(42, 240);
console.log(left);
left; // 198
