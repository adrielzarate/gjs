import sum from './mymath.sum.js';
import subs from './mymath.subs.js';

export default class MyMath {
    constructor() {
        this.sum = sum;
        this.subs = subs;
    }
}