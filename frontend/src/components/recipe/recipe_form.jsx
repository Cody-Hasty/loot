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
        // add action dispatch
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit()}>
                    <label>Label:
                        <input 
                            type='text'
                            value={this.state.label}
                            onChange={this.forceUpdate('label')}
                        />
                    </label>
                    <label>Item:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.forceUpdate('item')}
                        />
                    </label>
                    <label>Ingredients:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.forceUpdate('ingredients')}
                        />
                    </label>
                    <label>Ingredients:
                        <input
                            type='text'
                            value={this.state.label}
                            onChange={this.forceUpdate('ingredients')}
                        />
                    </label>
                    <label>Add photo:
                        <input 
                            type="file" 
                            name="Add File" 
                            value={this.state.pictures} 
                            onChange={this.handleChange('pictures')} 
                        />
                    </label>
                </form>

            </div>
        )
    }
}

export default RecipeForm;
