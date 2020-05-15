import React from 'react';

class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getRecipe(this.props.match.params.id);
    }

    render() {
        const recipe = this.props.recipe
        return (
            <div>
                <h1>{recipe.label}</h1>
                <img src={recipe.picture}/>
                <ul>
                    {recipe.ingredients.map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ShowRecipe;