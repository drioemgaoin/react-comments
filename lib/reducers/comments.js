import { ADD_COMMENT } from '../actions/comment';

const initialState = {};

const comments = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COMMENT:
      return state.set({
        content: action.content
      });

    default:
      return state;
  }
};

export default comments;
