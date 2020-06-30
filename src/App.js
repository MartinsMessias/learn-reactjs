import React, {Component} from 'react';
import Course from "./components/courses";
import NewCourseForm from "./components/newCourseForm";
import './App.css';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      courses: [
          {
              id: 1,
              name: 'React',
              category: 'JavaScript',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
          },
          {
              id: 2,
              name: 'React',
              category: 'JavaScript',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
          },
          {
              id: 3,
              name: 'React',
              category: 'JavaScript',
              image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
          }
      ]
    }
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

    add(course){
      const {courses} = this.state,
          newCourse = Object.assign({}, course, {id: (Date.now())})
      courses.push(course);
      this.setState({courses});

}
  remove(courseId){
      const {courses} = this.state,
          courseIndex = courses.findIndex(courses => courseId === courses.id);

      courses.splice(courseIndex, 1);
      this.setState({courses});
  }

  render() {
      const {state} = this;
    return (
        <div className="App">
            <NewCourseForm onSubmit={this.add} />
          <ul className="courses-list">
              {
                  state.courses.map(course => <Course course={course} onRemove={this.remove}/>)
              }
          </ul>
        </div>
    );
  }
}

export default App;
