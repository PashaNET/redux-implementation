import { EDIT_PRODUCT } from '../actions/action.types';

export const products = (state, action) => {
    switch(action.type){
        case EDIT_PRODUCT:
            const newProduct = action.payload;
            return [...state, newProduct]; 
        default: 
            return state;
    }
}