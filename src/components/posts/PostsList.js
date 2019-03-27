import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const PostsList = ({posts}) => {
    return (
        <div>
            {posts && posts.map(post => {
                return (
                    <Link to={'/post/' + post.id} key={post.id}>
                        <Post post={post}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default PostsList