import React from 'react';
import {connect} from 'react-redux';
import {onToggleButton} from '../../actions';

import './post-list-item.css';

const PostListItem = ({postsItem, onToggleButton}) => {
    const {label, important, like, id} = postsItem;

    let className = 'app-list-item d-flex justify-content-between';

    if (important) {
        className += ' important'
    }

    if (like) {
        className += ' like'
    }

    return (
        <div className={className}>
            <span 
                className="app-list-item-label"
                onClick={() => onToggleButton(id, 'like')}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center buttons">
                <button
                    type="button"
                    className="btn-pencil btn-sm">
                    <i className="fa fa-pencil"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={() => onToggleButton(id, 'important')}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = {
    onToggleButton
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);