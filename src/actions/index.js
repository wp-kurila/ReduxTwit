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


export {
    postsLoaded,
    onToggleButton
}