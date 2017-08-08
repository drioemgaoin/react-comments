import React from 'react';
import Stars from '../Stars/Stars';
import moment from 'moment';
import DefaultAvatar from '../../../static/default-avatar.png';

import './comment-list.scss';

export default class CommentList extends React.Component {
    static defaultProps = {
        comments: [],
        dateFormat: 'DD/MM/YYYY HH:mm A'
    };

    renderAvatar(comment) {
        const url = comment.avatar ? comment.avatar : DefaultAvatar;
        return (
            <div className='comment__header__avatar'>
                <img src={url}/>
            </div>
        );
    }

    renderTitle(comment) {
        const author = comment.author ? comment.author : 'Anonymous';
        return this.props.title ? this.props.title(comment)
        : (
            <div className='comment__header__title'>
                <div className='comment__header__title__author'>{author}</div>
                <div className='comment__header__title__date'>{moment(comment.date).format(this.props.dateFormat)}</div>
            </div>
        );
    }

    renderHeader(comment) {
        const author = comment.author ? comment.author : 'Anonymous';
        return this.props.header ? this.props.header(comment)
        : (
            <div className='comment__header'>
                {this.renderAvatar(comment)}
                {this.renderTitle(comment)}
            </div>
        );
    }

    renderBody(comment) {
        return (
            <div className='comment__body'>
                {
                    comment.content.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })
                }
            </div>
        );
    }

    render() {
        return (
            <div className='comment-list'>
                {
                    this.props.comments &&
                    this.props.comments.map((comment, index) => {
                        return (
                            <div key={index} className='comment'>
                                {this.renderHeader(comment)}
                                {this.renderBody(comment)}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
