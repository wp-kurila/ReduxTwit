import React from 'react';
import {connect} from 'react-redux';
import {closeModal, onDelete, editPost} from '../../actions';
import WithTwitService from '../hoc/';

import './modal.css';

const Modal = ({modalIsOpen, typeModal, idPost, closeModal, modalHeader, modalContent, buttonSubmit, TwitService, onDelete, editPost}) => {

    if (!modalIsOpen) {
        return null
    }

    const changeInput = React.createRef();

    const clickOverlay = (event) => {
        const target = event.target;
        if (target.classList.contains('overlay')) {
            closeModal()
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (typeModal === 'delete') {
            onDelete(idPost);
            TwitService.deletePost(idPost);
        }

        if (typeModal === 'change') {
            const newModalContent = changeInput.current.value;
            if (modalContent !== newModalContent) {
                editPost({
                    idPost,
                    newModalContent
                });
            }
        }
        closeModal()
    }

    return (
        <div 
            className='overlay'
            onClick={(e) => clickOverlay(e)}>
            <div className='modalBlock'>
                <div className='modalHeader'>
                    <h1>{modalHeader}</h1>
                </div>
                <div className='modalContent'>
                    {
                        typeModal === 'change' ? (
                            <input
                                ref={changeInput}
                                type="text"
                                className="form-control new-post-label"
                                defaultValue={modalContent}/>
                        ) : (
                            <span>{modalContent}</span>
                        )
                    }
                    
                </div>
                <div className='modalFootet'>
                    <form
                        onSubmit={(e) => onSubmit(e)}>
                        <button 
                            className='btn btn-outline-secondary' 
                            type='reset'
                            onClick={() => closeModal()}>
                                Отменить</button>
                        <button className='btn btn-info' type='submit'>{buttonSubmit}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({modalIsOpen, typeModal, idPost, modalHeader, modalContent, buttonSubmit}) => {
    return {
        modalIsOpen,
        typeModal,
        idPost,
        modalHeader,
        modalContent,
        buttonSubmit
    }
}

const mapDispatchToProps = {
    closeModal,
    onDelete,
    editPost
}

export default WithTwitService()(connect(mapStateToProps, mapDispatchToProps)(Modal));