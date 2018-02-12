import { EDIT_PRODUCT } from '../actions/action.types';

const initialState = {
    data: [],
    loading: false,
    loaded: false
}
export const products = (state = initialState, action) => {
    switch(action.type){
        case EDIT_PRODUCT:
            const newProduct = action.payload;
            return {...state, newProduct}; 
        default: 
            return state;
    }
}