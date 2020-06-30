import React, {Component} from "react";

class Course extends Component{
    static defaultProps = {
        course: {},
        onRemove: () => {}
    }

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this)
    }

    remove(){
        this.props.onRemove(this.props.course.id);
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        const { props } = this,
            { course } = props;
        return (
            <li className="course" draggable="true">
                <div>{course.category}</div>
                <button onClick={this.remove}>X</button>
                <img src={course.image} alt="React logo"/>
                <div>{course.name}</div>
            </li>
        );
    }
}

export default Course;