import React from 'react';
import {connect} from 'react-redux';
import {onAdd} from '../../actions';
import WithTwitService from '../hoc/';

import './post-add-form.css';

const PostAddForm = ({onAdd, TwitService, posts}) => {
    return (
        <form 
            className="bottom-panel d-flex"
            onSubmit={(e) => onSubmit(e, onAdd, TwitService, posts)}>
            <input 
                type="text"
                placeholder="О чём Вы думаете сейчас?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    )
}

const onSubmit = (e, onAdd, TwitService, posts) => {
    e.preventDefault();
    
    if (document.querySelector('.new-post-label').value !== '') {
        let lastId = posts[posts.length - 1].id;
        const newId = ++lastId;
        const newPost = {
            label: document.querySelector('.new-post-label').value,
            date: new Date(),
            important: false,
            like: false,
            id: newId
        }
        onAdd(newPost);
        TwitService.postData(newPost);
        document.querySelector('.new-post-label').value = '';
    } else {
        document.querySelector('.new-post-label').value = 'Введите что - нибудь!'
    };
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = {
    onAdd
}

export default WithTwitService()(connect(mapStateToProps, mapDispatchToProps)(PostAddForm));