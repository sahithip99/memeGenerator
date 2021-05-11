import React from "react"
import ReactDOM, { render } from "react-dom"

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

    render(){
        return(
            <h1>MEME GENERATOR</h1>
        )
    }
}
export default MemeGenerator


