import React from 'react';
import {connect} from 'react-redux';
import {onAdd} from '../../actions';
import idGenerator from 'react-id-generator';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <form 
            className="bottom-panel d-flex"
            onSubmit={(e) => onSubmit(e, onAdd)}>
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

const onSubmit = (e, onAdd) => {
    e.preventDefault();
    
    if (document.querySelector('.new-post-label').value !== '') {
        onAdd({
            label: document.querySelector('.new-post-label').value,
            date: new Date(),
            id: idGenerator()
        });
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

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);