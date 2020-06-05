import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            item: this.props.itemParent,
            ingredients: '',
            picture: ''
        };

        console.log(this.state.item)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props)
        // this.props.createRecipe(this.state);
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className="recipe-form-page">
                <form onSubmit={this.handleSubmit} className="recipe-form">
                    <h3>Create a New Recipe</h3>
                    <p>Label:</p>                    
                    <input 
                        type='text'
                        value={this.state.label}
                        onChange={this.update('label')}
                    />
                    <p>Ingredients:</p>
                    <input
                        type='text'
                        value={this.state.ingredients}
                        onChange={this.update('ingredients')}
                    />
                    <p>Add photo:</p>
                    <input 
                        type="file" 
                        name="Add File" 
                        value={this.state.pictures} 
                        onChange={this.update('pictures')} 
                    />

                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
