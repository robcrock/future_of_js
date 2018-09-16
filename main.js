const student = {
  name: "Richard Kalehoff",
  guardian: "Mr. Kalehoff"
};

const teacher = {
  name: "Mrs. Wilson",
  room: "N231"
}

function getClothing(isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!';
  } else {
    let hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

var note = `${teacher.name} ,

Please excure ${student.name},
He is recovering from the flu.

Thank you,

${student.guardian}`;

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

// Calling the function getArea() does not return what
// I would have expected. Pulling the varialbe outside
// of the circle object means it loses it's reference
// to this.
let {radius, getArea, getCircumference} = circle;

// Here's another interesting example of how destructuring
// can be used to assign variables.
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);