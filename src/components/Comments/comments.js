import React, { Component } from 'react';
import './comments.css';
class Comments extends Component {

    render() {
        return (
            <div>
                Comments: {this.props.data? this.props.data.length: "NA"}
                <div className="commentsContainer">
                    {
                        this.props.data && this.props.data.map((comment) => {
                            return <div className="comment" key={comment.id}>{comment.body}</div>;
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Comments;