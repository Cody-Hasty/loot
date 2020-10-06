import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/recipe.png";
class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const recipe = this.props.recipe;
        // console.log(recipe)
        return (
            <div className="recipe-part">
                <Link to={`/recipes/${recipe._id}`} className="recipe-links">
                    <p className="recipe-label">{recipe.label}</p>
                    {recipe.picture ? (
                        <img className="recipe-img" src={recipe.picture} />
                    ) : (
                        // <p className="missing-recipe-img">(This recipe has no picture)</p>
                        <img className="recipe-img" src={image} /> 
                        
                    )}
                </Link>
            </div>
        )
    }
}

export default Recipe;