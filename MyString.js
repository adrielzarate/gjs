import join from './mystring.join.js';
import mayus from './mystring.mayus.js';

export default class MyString {
    constructor() {
        this.join = join;
        this.mayus = mayus;
    }
}