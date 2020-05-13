import React from "react";

class ItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            pictures:"",
            description: "",
            game_id: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createItem(this.state);
    }

    handleChange(field){
        return(e)=> this.setState({[field]: e.currentTarget.value});
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange("name")}/>
                    <input type="text" placeholder="game_id" value={this.state.game_id} onChange={this.handleChange("game_id")}/>
                    <textarea type="text" placeholder="description" value={this.state.description} onChange={this.handleChange("description")}/>
                    <input type="file" name="Add File" value={this.state.pictures} onChange={this.handleChange("pictures")}/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }


}


export default ItemForm;
