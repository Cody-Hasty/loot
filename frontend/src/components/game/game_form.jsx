import React from "react";

export default class GameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            recipes: [],
            items: [],
            description: '',
            user_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentWillUnmount() {
        this.props.removeErrors();
    }

    renderErrors(){
        const errors = Object.values(this.props.state.errors.game);
        if (errors) {
            // console.log(errors);
            return(
                <ul >
                   {errors.map((error, i) =>{
                       return <li key={i}>{error.title}</li>
                   })}
               </ul>
                // <div>
                //     {errors.title}
                // </div>
            )

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("description", this.state.description);
        formData.append("user_id", this.props.state.session.user.username);
        formData.append("picture", this.state.picture);
        this.props.createGame(formData)
            .then(() => this.props.history.push(`/games/${this.props.state.entities.games._id}`));;
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleFile(e){
        this.setState({picture: e.currentTarget.files[0]});
    }


    render() {
        // console.log(this.props.state.session.user.username)
        return (
            <div className="game-form-page">
                <div>
                    {this.renderErrors()}
                </div>
                <form onSubmit={this.handleSubmit} className="game-form">
                    <h1>Create a New Game</h1>
                    <p> Title: </p>
                    <input type="text" placeholder="title" value={this.state.title} onChange={this.update("title")}/>
                    <textarea type="text" placeholder="description" value={this.state.description} onChange={this.update("description")}/>
                    <p> Picture: </p>
                    <input type="file" name="Add File" onChange={this.handleFile.bind(this)}/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }


}