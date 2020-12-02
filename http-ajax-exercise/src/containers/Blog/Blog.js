import React, { Component, Suspense } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Posts from '../Blog/Posts/Posts'
// import NewPost from './NewPost/NewPost'
// import asyncComponent from '../../hoc/asyncComponent'

// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });

import './Blog.css';

// const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: false
    }

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
                    {/* { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null} */}
                    {/* { this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                    {/* { this.state.auth ? <Route path="/new-post" render={() => <Suspense fallback={<div>Loading...</div>}><NewPost /></Suspense>} /> : null} */}
                    {/* <Route path="/:id" component={FullPost} /> */}
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts"></Redirect> */}

                    {/* // should always come last in order to catch the unknown routes */}
                    <Route render={() => <h1>Route not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;