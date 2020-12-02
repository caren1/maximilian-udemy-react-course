import React, { Component } from 'react';

class Course extends Component {
    render (props) {

        const id = this.props.match.params.id;
        const title = this.props.location.hash
        console.log(this.props.hash);

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;