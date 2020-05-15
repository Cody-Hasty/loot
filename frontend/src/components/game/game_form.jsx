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
        this.props.createGame(this.state);
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }


    render() {
        return (
            <div className="game-form-page">
                <form onSubmit={this.handleSubmit} className="game-form">
                    <h1 className="game-form-name">Create a New Game</h1>
                    <p> Title: </p>
                    <input type="text" placeholder="title" value={this.state.title} onChange={this.update("title")}/>
                    <p> Description: </p>
                    <textarea type="text" placeholder="description" value={this.state.description} onChange={this.update("description")}/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }


}