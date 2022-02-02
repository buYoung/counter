import {makeObservable, observable, action} from "mobx"

export default class Counter {
    count = 0;
    constructor() {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
            incrementByAmount: action,

        })
    }

    increment() {
        console.log("inc", this.count);
        this.count++;
    }
    decrement() {
        console.log("dec", this.count);
        this.count--;
    }
    incrementByAmount(value) {
        console.log("amount", this.count);
        this.count += value;
    }

}