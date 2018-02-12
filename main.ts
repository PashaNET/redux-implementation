import { comments, products } from './reducers';
import { Store } from './store/Store';

const store = new Store({
    comments,
    products
});

//test
