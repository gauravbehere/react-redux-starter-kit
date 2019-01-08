import ACTIONS from './../../actions.js';
export const fetchPosts = (dispatch) => {
    let retEventObj = null;
    const netCall = fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(json => {
            return dispatch({
                type: ACTIONS.POSTS.INIT_POSTS,
                payload: json
            });
        });
    return dispatch({
        type: ACTIONS.POSTS.INIT_POSTS,
        payload: [{
            id: 1,
            body: 'test_body',
            title: 'test_title'
        }]
    });
}

export const initPosts = () => {
    return ({
        type: ACTIONS.POSTS.INIT_POSTS,
        payload: [{
            id: 1,
            body: 'abcd',
            title: 'xyz'
        }]
    });
}

