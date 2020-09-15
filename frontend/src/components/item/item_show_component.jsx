import React from "react";
import {Link} from "react-router-dom";
import RecipeForm from "../recipe/recipe_form";
import RecipeFormContainer from "../recipe/recipe_form_container";
import image from "../../assets/item.svg";
import Recipe from "../recipe/recipe_part";


class ShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getItem(this.props.match.params.id);
        this.state["recipeSubmit"] = false;
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fillRecipes()
        this.fillRecipes = this.fillRecipes.bind(this)
       
    }

    fillRecipes() {
        console.log(this.props)
        let result = []
        this.props.getRecipes().then(() => {
          const recipes = this.props.state.entities.recipes
          const item = this.props.state.entities.items
          if (recipes) {
            for (let key in recipes) {
              if (recipes[key].item === item._id) result.push(recipes[key])
            }
          }
          this.setState({["recipes"]: result })
        })
    }
    
    
    
    handleSubmitForm() {
        this.setState({["recipeSubmit"]: true})
        
    }

    handleClick(e){
        e.preventDefault();
        this.props.deleteItem(this.props.item._id);
    }

    

    render(){
        console.log(this.state)
        const item = this.props.state.entities.items
        const {recipeSubmit} = this.state
        const recipes = this.state.recipes

        let recipeList;
        if (recipes) {
            recipeList = <ul className="recipe-list">
                            {recipes.map((recipe) => 
                            <li key={recipe._id}>
                                <Recipe recipe={recipe} />
                            </li>
                            )} 
                         </ul>
        } else {
            recipeList = ""
        }

        switch(recipeSubmit) {
            case false:
                return(
                    <>
                    <div className="item-show">
                        <h1>{item.name}</h1>
                        <hr/>
                            {item.picture ? <img className="show-item" src={item.picture} /> : <img className="show-item" src={image} /> }
                            <p className="item-desc">{item.description}</p>
                            <button onClick={this.handleClick}>Delete Item</button>
                            <button onClick={ this.handleSubmitForm }> Create new recipe </button>
                        {/* <hr /> */}
                        <h3>Recipes</h3>
                        <div className="item-recipe-list">
                            {recipeList}
                        </div>
                    </div>

                    </>
                );
            default:
                return <RecipeFormContainer itemParent={item.name} itemParentID={item._id}/>       
        };
    }
}

export default ShowItem;

