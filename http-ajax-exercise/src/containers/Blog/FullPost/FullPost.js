import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost : null,
    }

    // we'll be sending an http request if we have an id
    componentDidMount = () => {
       this.loadData();
    }

    componentDidUpdate = () => {
        this.loadData();
    }

    loadData = () => {
        console.log(this.props);
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== Number(this.props.match.params.id))) {
                axios.get(`/posts/${this.props.match.params.id}`)
                .then(response => {
                    this.setState({ loadedPost : response.data })
                })
            }  
    }
    }

    handlePostDelete = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
        .then(response => {
            console.log(response);
        })
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
        if (this.props.match.params.id) post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.handlePostDelete}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;