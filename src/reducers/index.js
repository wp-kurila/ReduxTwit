const initialState = {
    posts: [],
    term: '',
    filter: 'all'
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
                important: false,
                like: false,
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
            }
        default:
            return state;
    }
}

export default reducer;