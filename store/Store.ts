export class Store {
    private subsribers: Function[];
    private reducers: {[key: string] : any};
    private state: {};

    constructor(reducers = {}, initialState = {}) {
        this.reducers = reducers;
        this.state = initialState;
    }

    dispatch() {
        //get action (), user apropriate reducer
    }

    subscribe() {
        //add to arr
    }
}