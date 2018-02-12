import { comments, products } from './reducers';
import { Store } from './store/Store';
import { commentActions } from './actions/comments';

const store = new Store({
    comments,
    products
});

/* TEST */

//some component which wait for data
const subscriber = (data) => {
    console.log('subsciber retrived data', data)
};

store.subscribe(subscriber);

//some place where action occured (new comment)
store.dispatch(commentActions.addComment({id: 1, text: 'Some text here'}));
console.log('STORE', store.value);

store.unsubscribe(subscriber);
console.log('subscribers', store.subscribers);

