import React from 'react';
import {connect} from 'react-redux';
import {onToggleButton, onDelete, editPost} from '../../actions';
import WithTwitService from '../hoc/';
import $ from "jquery";

import './post-list-item.css';

const PostListItem = ({postsItem, onToggleButton, onDelete, TwitService, editPost}) => {
    const {label, important, like, id} = postsItem;

    let className = 'app-list-item d-flex justify-content-between';

    if (important) {
        className += ' important'
    }

    if (like) {
        className += ' like'
    }

    return (
        <>
        <div className={className}>
            <span 
                className="app-list-item-label"
                onClick={() => onToggleButton(id, 'like')}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center buttons">
                <button
                    type="button"
                    className="btn-pencil btn-sm"
                    onClick={(e) => openEditBlock(e.target, label)}>
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
                    className="btn-trash btn-sm"
                    onClick={() => {
                        onDelete(id);
                        TwitService.deletePost(id);
                    }}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
        <form 
            className='input-block'
            onSubmit={e => changePost(editPost, label, id, e)}>
            <input 
                className='form-control'/>
            <button
                type='button'
                className='btn-ok btn-sm'>
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>
            <button
                type='button'
                className='btn-close btn-sm'
                onClick={(e) => closeEditBlock(e.target)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
        </form>
        </>
    )
}

const openEditBlock = (element, text) => {
    const editBlock = $(element).parents('.app-list-item').siblings('.input-block');
    editBlock.addClass('active');
    editBlock.children('input').val(text);
}

const closeEditBlock = (element) => {
    const editBlock = $(element).parents('form');
    editBlock.removeClass('active');
}

const changePost = (editPost, label, id, e) => {
    e.preventDefault();
    const newLabel = $(e.target).children('input').val();
    if (newLabel !== label) {
        editPost({
            id,
            newLabel
        });
        closeEditBlock($(e.target).children('.btn-close'));
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = {
    onToggleButton,
    onDelete,
    editPost
}

export default WithTwitService()(connect(mapStateToProps, mapDispatchToProps)(PostListItem));