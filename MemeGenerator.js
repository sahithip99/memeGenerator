import React from "react"
import ReactDOM, { render } from "react-dom"
import Form from "./Form"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state={
            topText: "",
            bottomText: "",
            imageURL:"http://i.imgflip.com/1bij.jpg",
            memesImages: []
        }
    }

    componentDidMount(){
        fetch()
            .then(response => response.json())
            .then(data => {const memes = data
                          this.setState({memesImages: memes})})
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}

                    />
                    <br />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}             
                     />
                </form>
                <div className="meme">
                    <img src={this.state.randomImg}></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}
export default MemeGenerator


