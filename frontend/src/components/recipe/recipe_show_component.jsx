import React from 'react';
import image from "../../assets/recipe.png";

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
                {recipe.picture ? (
                    <img src={recipe.picture} />
                ) : (
                    <img src={image} />
                    )}
                <h2> Ingredients: </h2>
                <ul> 
                    <li>{recipe.ingredients} </li>
                </ul>
            </div>
        )
    }
}

export default ShowRecipe;