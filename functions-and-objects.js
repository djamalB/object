const obj = {
  name: "djamal",
  lustName: "Balaev",
};

function getName(a) {
  return a.name;
}
console.log(getName(obj));
console.log(getName(obj));
console.log(getName(obj));

const obj2 = [
  {
    firstname: "djon",
    lustName: "Alex",
  },
];

function getNames(a) {
  let first = a[0].firstname;
  let last = a[0].lustName;
  let arr = [first, last];
  return arr;
}
console.log(getNames(obj2));


const person = {
  firstname: "djamal",
};

const lastName = "balaev";

function concatNames(obj, lustName) {
  return obj.firstname + " " + lastName;
}

console.log(concatNames(person, lastName));

const firstPerson = {
  firstname: "Alvi",
  lastname: "Tsugaev",
  fathername: undefined,
};

function correctName(obj) {
  if (!obj.fathername) {
    return obj.firstname;
  } else {
    obj.firstname + obj.lastname + obj.fathername;
  }
}
console.log(correctName(firstPerson));
