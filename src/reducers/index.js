const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload
            };
        case 'ON_TOGGLE_BUTTON':
            const id = action.payload;
            const info = action.info;
            const itemIndex = state.posts.findIndex(item => item.id === id);
            const old = state.posts[itemIndex];
            let newItem
            if (info === 'important') {
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
            }
            
        default: 
            return state;
    }
}

export default reducer;