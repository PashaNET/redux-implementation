import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/action.types';

const initialState = {
    data: [],
    loading: false, 
    loaded: false
};

export const comments = (state = initialState, action: {[key: string] : any}) => {//action - interface ??
    switch(action.type){
        case ADD_COMMENT:
            const newComment = action.payload;
            return {...state, newComment};
        case REMOVE_COMMENT:
            const id = action.payload.id;
            return state.data.filter(comment => comment.id != id);
        default:
            return state;
    }
}