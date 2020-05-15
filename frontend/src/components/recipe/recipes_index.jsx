import React from 'react';

class RecipesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getRecipes();
    }

    render() {
        const recipes = Object.values(this.props.recipes);
        return (
            <div>

                 {recipes.map(recipe => (
                     <div key={recipe._id}>
                        <label>{recipe.label}</label>
                        <ul>
                            {recipe.ingredients.map(ingredient => (
                                <li>{ingredient}</li>
                            ))}
                        </ul>
                        <img src={recipe.picture} alt=""/>
                    </div>
                 ))}
            </div>
        )
    }
}

export default RecipesIndex;