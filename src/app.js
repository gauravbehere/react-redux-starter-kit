import React, { Component } from 'react';
import Posts from './components/Posts/posts.js';
import { connect } from 'react-redux';
import { fetchPosts, initPosts } from './components/Posts/postsActions.js'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Posts & Comments</h1>                
                <Posts posts={this.props.posts}></Posts>
            </div>
        );
    }
    
    /**
     * Here we pass the dispatch reference to actions to let Redux know about the data change.
     * Note: This can be avoided if we were using a middleware like thunk
     */
    componentDidMount() {
        initPosts(this.props.dispatch);
        fetchPosts(this.props.dispatch);        
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
}
export default connect(mapStateToProps)(App);