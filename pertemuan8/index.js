
// let age;
const arrPerson = ["anggge", "anj", 20, true, "Minahasa Tenggara"];


// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson [2];
// const notMarried = arrPerson[3];

// let [, , age, notMarried, address = "Ratahan"] = arrPerson

// console.log(age, notMarried, address);

// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);

// objek

let firstName, lastName;
const objPerson = {
    firstName:"angge",
    lasName: "anj",
    age: 20,
    notMarried: true,
    address: "Minahasa Tenggara",
};

// const firsName = objPerson.firstName;
// const lastName= objPerson.lastName;
// const age = objPerson.age;
// const notMarried = objPerson.notMarried;

// const  {firstName, lastName, age, notMarried} = objPerson;

// console.log(firstName, lastName, age, notMarried);

// let {firstName, lastName, address = "Ratahan"} = objPerson;
// let {firstName, lastName, ...rest} = objPerson;

// console.log(firstName, lastName, address);

const display = ({firstName, lastName}) => 
    `hallo nama saya ${firstName} ${lastName}`;
console.log(display(objPerson));