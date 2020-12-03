import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: ''
    }

    componentDidMount = () => {
        this.parseQueryParams();
    }

    componentDidUpdate = () => {
        this.parseQueryParams();
    }


    parseQueryParams = () => {
        // console.log(this.props.location.search);
        const query = new URLSearchParams(this.props.location.search);
        // creating an iterator from urlsearchparams object
        for ( let param of query.entries() ){
            // console.log(param); an array where, the first element is the key we used in search params, and 2nd is value
            if (this.state.title !== param[1]){
                this.setState({ title: param[1] })
            }
        }
    }

    render (props) {

        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;