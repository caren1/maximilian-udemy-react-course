import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    handleCourseClick = (id) => {
        this.props.history.push({ pathname : `/courses/${id}` })
    }

    render () {


        // let courses =  
        //     this.state.courses.map(course => {
        //         return (<Link key={course.id} to={`${this.props.match.url}/${course.id}/${course.title}`}>
        //             <article className="Course" >{course.title}</article>
        //         </Link>)
        //     })

        // solution for query params
            let courses =  
            this.state.courses.map(course => {
                return (
                <Link
                 key={course.id}
                 to={{
                     pathname: `${this.props.match.url}/${course.id}`,
                     search: `?title=${course.title}`
                 }}>
                    <article className="Course">
                        {course.title}
                    </article>
                </Link>)
            })
        

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                   {courses}
                </section>
                <Route path={`${this.props.match.url}/:id`} component={Course}></Route>
                {/* {console.log(this.props.match.url)} */}
            </div>
        );
    }
}

export default Courses;