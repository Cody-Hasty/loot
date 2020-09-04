import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            item: this.props.itemParentID,
            ingredients: '',
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("label", this.state.label);
        formData.append("ingredients", this.state.ingredients);
        formData.append("item", this.state.item);
        formData.append("picture", this.state.picture);
        let recipe = this.props.createRecipe(formData);
        
        
    }

    handleFile(e){
        this.setState({picture: e.currentTarget.files[0]});
    }

    update(field) {
        return(e) => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        console.log(this.props)
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
                        onChange={this.handleFile.bind(this)} 
                    />

                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default RecipeForm;
