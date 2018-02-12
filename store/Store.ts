export class Store {
    subscribers: Function[] = [];
    private reducers: { [key: string] : any };
    private state: { [key: string]: any };

    constructor(reducers = {}, initialState = {}) {
        this.reducers = reducers;
        this.state = initialState;
    }

    dispatch(action) {
        this.state = this.reduce(this.state, action);
        this.subscribers.forEach((subscriberFunction) => {
            subscriberFunction(this.value);
        });
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(subsriber => subsriber !== fn);
    }

    get value(): { [key: string]: any } {
        return this.state;
    }

    private reduce(state, action): any {
        let newState = {};

        for(let reducerName in this.reducers) {
            newState[reducerName] = this.reducers[reducerName](this.state[reducerName], action);
        }

        return newState;
    }
}