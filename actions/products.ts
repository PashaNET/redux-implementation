import { EDIT_PRODUCT } from './action.types';

export const products = {
    edit(id) {
        return {
            type: EDIT_PRODUCT,
            payload: {id}
        }
    }
}