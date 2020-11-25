import React from 'react';

import './Post.css';

const post = ({ post }) => (
    <article className="Post">
        <h1>{post.title}</h1>
        <div className="Info">
            <div className="Author">{post.author}</div>
        </div>
    </article>
);

export default post;