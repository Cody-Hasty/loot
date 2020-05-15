import React from "react";

class ItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            picture:"",
            description: "",
            game_id: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("game_id", this.state.game_id);
        formData.append("picture", this.state.picture);
        this.props.createItem(formData);

    }

    handleChange(field){
        return(e)=> this.setState({[field]: e.currentTarget.value});
    }

    handleFile(e){
        this.setState({picture: e.currentTarget.files[0]});
    }

    render(){
        // console.log(this.state)
        return(
            <div className="item-form-page">
                <form onSubmit={this.handleSubmit} className="item-form">
                    <h3 className="item-form-name">Create a New Item</h3>
                    <p>Name: </p>
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange("name")}/>
                    <p>Game: </p>
                    <input type="text" placeholder="game_id" value={this.state.game_id} onChange={this.handleChange("game_id")}/>
                    <p>Description: </p>
                    <textarea type="text" placeholder="description" value={this.state.description} onChange={this.handleChange("description")}/>
                    <p>File: </p>
                    <input type="file" name="Add File" onChange={this.handleFile.bind(this)}/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }


}


export default ItemForm;
