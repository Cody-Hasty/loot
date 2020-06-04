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

        

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createRecipe(this.state);
        
    }

    handleFile(e){
        this.setState({picture: e.currentTarget.files[0]});
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
                    <br></br>
                    <br></br>
                    <label>Label:
                        <input 
                            type='text'
                            value={this.state.label}
                            onChange={this.update('label')}
                        />
                    </label>
                    <label>Ingredients:
                        <input
                            type='text'
                            value={this.state.ingredients}
                            onChange={this.update('ingredients')}
                        />
                    </label>
                    <label>Add photo:
                        <input 
                            type="file" 
                            name="Add File" 
                            onChange={this.handleFile.bind(this)} 
                        />
                    </label>

                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
