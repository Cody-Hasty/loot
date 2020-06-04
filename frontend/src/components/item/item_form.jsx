import React from "react";

class ItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            picture:"",
            description: "",
            game_id: "",
            fromGameShow: this.props.fromGameShow,
            games: [],
            recipes: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    componentDidMount() {
        if (!this.state.fromGameShow){
            this.props.getGames().then(() => {
                this.setState({
                    games: this.props.state.entities.games,
                    game_id: this.props.state.entities.games[0]._id,
                });
            });
        }
    }
    componentWillUnmount(){
        this.props.removeErrors();
    }

    renderErrors() {
        const errors  = Object.values(this.props.state.errors.item);
        if (errors) {
            console.log(errors);
            return (
                <ul >
                    {errors.map((error, i) =>{
                        return <li key={i}>{error.name}</li>
                    })}
                </ul>
                // <div>
                //     {/* {errors.name} */}
                // </div>
            )

        }
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
        let titleForm;
        if (this.state.fromGameShow) {
            titleForm = "";
            this.state.game_id = this.props.gameParent
        } else {
            titleForm = <><p>Game: </p>
                <select name="title" id="title" onChange={this.handleChange("game_id")}>
                    {this.state.games.map((game) => (
                        <option key={game._id} value={game._id}>
                            {game.title}
                        </option>
                    ))}
                </select>
            </>
        }
        
        return(
            <div className="item-form-page">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="item-form">
                    <h3>Create a New Item</h3>
                    <p>Name: </p>
                    <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange("name")}/>
                    {titleForm}
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
