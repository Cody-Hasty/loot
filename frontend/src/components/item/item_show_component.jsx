import React from "react";
import {Link} from "react-router-dom";
import RecipeForm from "../recipe/recipe_form";
import RecipeFormContainer from "../recipe/recipe_form_container";
import image from "../../assets/angery.jpeg";
import Recipe from "../recipe/recipe_part"


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
            recipeList = <ul>
                            {recipes.map((recipe) => 
                            <li key={recipe._id} className="recipes-box">
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
                            {item.picture ? <img src={item.picture} /> : <img src={image} /> }
                        <p>{item.description}</p>

                        {recipeList}
                        <button onClick={this.handleClick}>delete me</button>
                    </div>

                    <div className="recipe-submit">
                        <button className="recipe-form-button" onClick={ this.handleSubmitForm }> Create new recipe </button>
                    </div>
                    </>
                );
            case true:
                return <RecipeFormContainer itemParent={item.name} itemParentID={item._id}/>       
        };
    }
}

export default ShowItem;

