import React from "react";
import {Link} from "react-router-dom";
import RecipeFrom from "../recipe/recipe_form"

class ShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getItem(this.props.match.params.id);
        this.state["recipeSubmit"] = false;
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
      }
    
    
      handleSubmitForm() {
        this.setState({["recipeSubmit"]: true})
        
      }
    

    render(){
        const item = this.props.item
        const {recipeSubmit} = this.state

        switch(recipeSubmit) {
            case false:
                return(
                    <>
                    <div className="item-show">
                        <h1>{item.name}</h1>
                        <hr/>
                        <img src={item.picture}/>
                        <p>{item.description}</p>
                    </div>

                    <div className="recipe-submit">
                        <button className="recipe-form-button" onClick={ this.handleSubmitForm }> Create new recipe </button>
                    </div>
                    </>
                );
            case true:
                return <RecipeFrom />       
        };
    }
}

export default ShowItem;

