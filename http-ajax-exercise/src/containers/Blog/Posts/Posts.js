import React, { Component } from 'react';
import Post from '../../../components/Post/Post'
import axios from '../../../axios'

import './Posts.css'

class componentName extends Component {

    state = {
        posts: [],
    }

    componentDidMount = () => {
        const posts = axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'Max' }))
            this.setState({ posts: updatedPosts })
        })
        .catch(error => {
            this.setState({ error: true })
        })
    }

    handlePostClick = (id) => {
        this.setState({ selectedPostId: id })
     }

    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => (
                <Post key={post.id} post={post} clicked={() => this.handlePostClick(post.id)}/>
            ))
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default componentName;