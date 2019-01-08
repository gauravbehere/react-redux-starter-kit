import ACTIONS from './../../actions.js';
export const fetchComments = (dispatch, postId) => {
    fetch(`http://localhost:3000/comments/${postId}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: ACTIONS.COMMENTS.FETCH_COMMENTS,
                payload: {
                    postId: postId,
                    comments:json
                }
            });
        });
}