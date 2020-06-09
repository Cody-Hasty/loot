import React from 'react';
import Recipe from './recipe_part';

class RecipesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getRecipes();
    }

    render() {
        const recipes = Object.values(this.props.recipes);
        console.log(this.props.getRecipes())
        return (
            <div className="recipe-index">
                <ul>
                 {recipes.map(recipe => (
                    <li key={recipe._id} className="recipe-box">
                        <Recipe recipe={recipe} />
                    </li>
                 ))}
                 </ul>
            </div>
        )
    }
}

export default RecipesIndex;