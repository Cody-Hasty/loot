import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            item: '',
            ingredients: '',
            picture: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRecipe(this.state);
        
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
                    <label>Label:
                        <input 
                            type='text'
                            value={this.state.label}
                            onChange={this.update('label')}
                        />
                    </label>
                    <label>Item:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.update('item')}
                        />
                    </label>
                    <label>Ingredients:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.update('ingredients')}
                        />
                    </label>
                    <label>Ingredients:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.update('ingredients')}
                        />
                    </label>
                    <label>Add photo:
                        <input 
                            type="file" 
                            name="Add File" 
                            value={this.state.pictures} 
                            onChange={this.update('pictures')} 
                        />
                    </label>

                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
