import _ from 'lodash';
import unused from '';

const a = require('./fdsafdsa');

var string = 'string';
let embedStr = `hello ${string}`
let number = 7;
const MY_CONSTANT = Symbol(1219147155);
let bool = true
let array = ["fdsaf",777, { fdsaf:'fdsafdas' }];
let [ a, ...b ] = [1,2];
let sum = true + 1 + 100 || false

const object = {
    name: 'tanphat',
    age: 67,
    [a]: 'computed key',
    [b]: "fdsaf",
    nestedArray(){ console.log(6) },
    string
};
let { name, age } = object;

embedStr.search(/^\w+\d{3:5}\b?\s.\S\W\D\\[a-zA-Z0-9]*(?:hel\slo)*$/g)

window.document.getElementById('fdsaf')
const arrowFunc = (name) => { console.log(name) };
function myFunction(used, unused) { return console.log(used) }
myFunction();
arrowFunc();


class a extends Console {
    constructor(name){
        this.name = name;
    }
    static say(name){ console.log(name) }

    getname(){}
}

export default class name extends Error {}
const i = new name();

let count = 0;
while(true) {
    count++;
    console.log(count)
    if (count === 100) break;
}

for(let i = 0; i < 100; i++) {
    if (i === 50) continue;
}

/* html script */
window.onload = function(){
    let script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"
    script.setAttribute('src', 'https://localhost:3000')
    let body = document.body.appendChild(script)
}







