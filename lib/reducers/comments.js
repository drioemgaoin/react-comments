import { ADD_COMMENT } from '../actions/comment';

const initialState = { comments: [] };

const comments = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, { comments: [...state.comments, action.comment] });

    default:
      return state;
  }
};

export default comments;
