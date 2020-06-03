import React from "react";

export default class GameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            recipes: [],
            items: [],
            description: '',
            user_id: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("description", this.state.description);
        formData.append("user_id", this.state.user_id);
        formData.append("picture", this.state.picture);
        this.props.createGame(formData);
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleFile(e){
        this.setState({picture: e.currentTarget.files[0]});
    }


    render() {
        console.log(this.props)
        return (
            <div className="game-form-page">
                <form onSubmit={this.handleSubmit} className="game-form">
                    <h1>Create a New Game</h1>
                    <p> Title: </p>
                    <input type="text" placeholder="title" value={this.state.title} onChange={this.update("title")}/>
                    <p> Description: </p>
                    <textarea type="text" placeholder="description" value={this.state.description} onChange={this.update("description")}/>
                    <p> Picture: </p>
                    <input type="file" name="Add File" onChange={this.handleFile.bind(this)}/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }


}