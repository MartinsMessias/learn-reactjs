import React, {Component} from "react";

class NewCourseForm extends Component{

    static defaultProps = {
        categories: [],
        onSubmit: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            category: "",
            image: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if (newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                // category: '',
                image: '',
            });
        }

    }

    handleChange(event){
        const { target} = event,
            {name, value} = target;
        this.setState({
            [name]:value
        })

    }

    render(){
        const {props, state} = this;
        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome: </span>
                    <input name="name" onChange={this.handleChange} value={state.name}/>
                </label>
                <label>
                    <span>Imagem: </span>
                    <input name="image" onChange={this.handleChange} value={state.image}/>
                </label>
                <label>
                    <span>Categoria: </span>
                   <select name="category" onChange={this.handleChange} value={state.category}>
                       <option value=''>Selecionar</option>
                       {
                            props.categories.map(category => (
                                <option value={category.name}>{category.name}</option>
                            ))
                       }
                   </select>
                </label>
                <button type="submit">Criar curso</button>
            </form>
        );
    }
}

export default NewCourseForm;