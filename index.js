import MyMath from './MyMath.js';
import MyString from './MyString.js';

const myMath = new MyMath();
const myString = new MyString();


console.log( myMath.subs(1,50,1) );
console.log( myString.mayus(myString.join('a', 'b', 'c')) );