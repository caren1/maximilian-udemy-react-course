import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
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
        // this.setState({ selectedPostId: id })
        // using Link for Post was a viable solution, however with this one, we'll be navigating programatically
        // since we sometimes want to load something after ie. HTTP request was sent
        this.props.history.push({ pathname : `/posts/${id}` })
        // this.props.history.push({ `/${id}` })
     }

    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong !</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => (
                // <Link to={`/posts/${post.id}`} key={post.id}>
                    <Post key={post.id} post={post} clicked={() => this.handlePostClick(post.id)}/>
                // </Link>
            ))
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={FullPost}></Route>
            </div>
            
        );
    }
}

export default componentName;