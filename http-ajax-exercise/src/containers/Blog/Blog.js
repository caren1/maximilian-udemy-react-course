import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'

import './Blog.css';

class Blog extends Component {

    render () {
        return (
            
            <div className="Blogs">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{ color: '#fa923f', textDecoration: 'underline' }}>Posts</NavLink></li>
                            {/* <li><Link to={{ 
                                pathname='/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                             }}>Home</Link></li> */}
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>             
                {/* <Route path="/" exact render={() => <Posts />}/>     */}
                {/* // tells the router to render only one found route */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    {/* <Route path="/:id" component={FullPost} /> */}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Blog;