import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                hello World
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button" 
                    className="btn-star bnt-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash bnt-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;