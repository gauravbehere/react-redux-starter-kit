import React, { Component } from 'react';
import './posts.css';
import Comments from '../Comments/comments.js';
import ACTIONS from './../../actions.js';
import { connect } from 'react-redux';
import { fetchComments } from '../Comments/commentsActions.js'
class Posts extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="posts">
                    {
                        this.props.posts && this.props.posts.map((obj) => {
                            return (
                                <div className="post" key={obj.id}>
                                    <div>{obj.title}</div>
                                    <a className="showCommentsLink" onClick={fetchComments.bind(this,this.props.dispatch ,obj.id)}>Show Comments</a>
                                    <Comments data={this.props.comments[obj.id]}></Comments>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Posts);