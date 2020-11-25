import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
    }


    componentDidMount = () => {
        const posts = axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'Max' }))
            this.setState({ posts: updatedPosts })
        })
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map((post) => (
                        <Post key={post.id} post={post}/>
                    ))}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;