var str:string = "fdsaf";
let embedStr:string = `this is ${str + 5}`;

let num:number = 10;
let isOn:boolean = false;

let arrNum: number[] = [1,2,3];
const arrNum2: Array<number> = [5,6,4];
let tuple:[string, number];
tuple = ['tanphat', 40];
tuple[2] = 5;
tuple[3] = 'fdsaf'
tuple[4] = true // error

const obj = {
  name: 'tanphat',
  age: 45,
}

enum Color{ green, red, yellow };
let eye = Color.yellow;

interface User {
  name:string
  age:number
  [k:string]: any
}

function getName(user:User):number{
  console.log(`name ${user.name} is ${user.age} years old.`);
  return user.age;
}

//9966b8




