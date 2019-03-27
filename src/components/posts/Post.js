import React from 'react';
import moment from 'moment';

const Post = ({post}) => {
    return (
        <div className="post-list section">
            <div className="card z-depth-0 post-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{post.title}</span>
                    <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
                    <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default Post