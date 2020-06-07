import React from 'react';

class ShowRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getRecipe(this.props.match.params.id);
    }

    render() {
        const recipe = this.props.recipe
       
        return (
            <div className="recipe-show">
                <h1>{recipe.label}</h1>
                <img src={recipe.picture}/>
                <h2> Ingredients: </h2>
                <ul> 
                    <li>{recipe.ingredients} </li>
                    <li>hi</li>
                </ul>
            </div>
        )
    }
}

export default ShowRecipe;