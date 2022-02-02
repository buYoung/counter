import Counter from "./count/Count_mobx";

export class RootStore {
    counter;

    constructor() {
        this.counter = new Counter();
    }
}