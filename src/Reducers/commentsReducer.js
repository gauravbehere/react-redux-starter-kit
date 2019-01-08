import ACTIONS from '../actions.js';
export default function (state = {}, action) {
    let retState = null;
    switch (action.type) {
        case ACTIONS.COMMENTS.FETCH_COMMENTS:
            retState = Object.assign({}, state);
            retState[action.payload.postId] = action.payload.comments;
            break;
        default:
            retState = state;
    }
    return retState;
}