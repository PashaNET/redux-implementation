import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/action.types';

export const comments = (state, action) => {
    switch(action.type){
        case ADD_COMMENT:
            const newComment = action.payload;
            return [...state, newComment];
        case REMOVE_COMMENT:
            const id = action.payload.id;
            return state.filter(comment => comment.id != id);
        default:
            return state;
    }
}