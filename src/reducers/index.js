const initialState = {
    posts: [],
    term: '',
    filter: 'all',
    modalIsOpen: false,
    typeModal: '',
    idPost: null,
    modalHeader: '',
    modalContent: '',
    buttonSubmit: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload
            };
        case 'ON_TOGGLE_BUTTON':
            const itemIndex = state.posts.findIndex(item => item.id === action.payload);
            const old = state.posts[itemIndex];
            let newItem;
            if (action.info === 'important') {
                newItem = {...old, important: !old.important};
            } else {
                newItem = {...old, like: !old.like};
            }
            return {
                ...state,
                posts: [
                   ...state.posts.slice(0, itemIndex),
                   newItem,
                   ...state.posts.slice(itemIndex + 1)
                ]
            };
        case 'DELETE_POST':
            const index = state.posts.findIndex(item => item.id === action.payload);
            return {
                ...state,
                posts: [
                    ...state.posts.slice(0, index),
                    ...state.posts.slice(index + 1)
                ]
            };
        case 'ADD_POST':
            const newPost = {
                label: action.payload.label,
                date: action.payload.date,
                important: action.payload.important,
                like: action.payload.like,
                id: action.payload.id
            };
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            };
        case 'SEARCH_POSTS':
            return {
                ...state,
                term: action.payload
            };
        case 'FILTER_POSTS':
            return {
                ...state,
                filter: action.payload
            };
        case 'EDIT_POST':
            const idx = state.posts.findIndex(item => item.id === action.payload.idPost);
            const oldPost = state.posts[idx];
            const editPost = {...oldPost, label: action.payload.newModalContent};
            return {
                ...state,
                posts: [
                   ...state.posts.slice(0, idx),
                   editPost,
                   ...state.posts.slice(idx + 1)
                ]
            };
        case 'MODAL_IS_OPEN':
            const {type, header, content, buttonSubmit, idPost} = action.payload;
            return {
                ...state,
                modalIsOpen: true,
                typeModal: type,
                idPost,
                modalHeader: header,
                modalContent: content,
                buttonSubmit
            };
        case 'MODAL_IS_CLOSE':
            return {
                ...state,
                modalIsOpen: false
            };
        default:
            return state;
    }
}

export default reducer;