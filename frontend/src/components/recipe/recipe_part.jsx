import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const recipe = this.props.recipe;
        return (
            <div>
                <h1>{recipe.label}</h1>
                <Link to={`/recipes/${recipe._id}`}>
                    {recipe.picture ? (
                        <img src={recipe.picture} width="100px" />
                    ) : (
                        "This recipe has no picture"
                    )}
                </Link>
            </div>
        )
    }
}

export default Recipe;