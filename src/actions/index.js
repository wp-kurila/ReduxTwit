const postsLoaded = (newPosts) => {
    return {
        type: 'POSTS_LOADED',
        payload: newPosts
    };
};

const onToggleButton = (id, info) => {
    return {
        type: 'ON_TOGGLE_BUTTON',
        payload: id,
        info
    };
};

const onDelete = (id) => {
    return {
        type: 'DELETE_POST',
        payload: id
    };
};

const onAdd = (newItem) => {
    return {
        type: 'ADD_POST',
        payload: newItem
    };
};

const onUpdateSearch = (term) => {
    return {
        type: 'SEARCH_POSTS',
        payload: term
    };
};

const filterPosts = (filter) => {
    return {
        type: 'FILTER_POSTS',
        payload: filter
    };
};

const editPost = (changedPost) => {
    return {
        type: 'EDIT_POST',
        payload: changedPost
    };
};

const openModal = (modalData) => {
    return {
        type: 'MODAL_IS_OPEN',
        payload: modalData
    };
};

const closeModal = () => {
    return {
        type: 'MODAL_IS_CLOSE'
    };
};


export {
    postsLoaded,
    onToggleButton,
    onDelete,
    onAdd,
    onUpdateSearch,
    filterPosts,
    editPost,
    openModal,
    closeModal
}