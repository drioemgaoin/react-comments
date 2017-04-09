import { ADD_COMMENT } from '../actions/comment';

const initialState = { comments: [] };

const comments = (state = [], action) => {
  switch(action.type) {
    case ADD_COMMENT:
      return [...state, action.comment];

    default:
      return state;
  }
};

export default comments;
