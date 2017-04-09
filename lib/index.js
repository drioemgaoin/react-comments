import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import CommentList from './components/CommentList/CommentList';
import CommentForm from './components/CommentForm/CommentForm';

import commentsReducer from './reducers/comments';

module.exports = {
    // components
    CommentList,
    CommentForm,

    // reducers
    commentsReducer
};
