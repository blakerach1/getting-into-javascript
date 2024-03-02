// the way we repeat things

var students = [];

for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}

// evaluation clause is included in the for loop (i < students.length)
// arr[i] - we are accessing the value at the i position of the array

for (let student of students) {
  greetStudent(student);
}

// the above is an iterator, it simply gets / accesses all the values in the array

while (students.length > 0) {
  let student = students.pop();
  greetStudent(student);
}

// the above is popping each student off the array, until the length is 0
// the shift() method will take values off the front of the array
