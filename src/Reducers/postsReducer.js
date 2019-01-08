import ACTIONS from '../actions.js';
export default function (state = [], action) {
    let retState = null;
    switch (action.type) {
        case ACTIONS.POSTS.INIT_POSTS:
            retState = action.payload;
            break;
        case ACTIONS.POSTS.CREATE_POST:
            retState = [action.payload, ...state];
            break;
        default:
            retState = state;
    }
    return retState;
}