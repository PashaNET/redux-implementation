import { ADD_COMMENT, REMOVE_COMMENT } from './action.types';

export const comments = {
    addComment(data){
        return {
            type: ADD_COMMENT,
            payload: data
        }
    },
    removeComment(id){
        return {
            type: REMOVE_COMMENT,
            payload: {id}
        }
    }
}