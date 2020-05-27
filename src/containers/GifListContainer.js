import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListComponent extends Component {
 state = {
     gifs: [],
     query: ""
 }   
 
 handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=8T0THYfWCqny9rDoxrxJI0oHXS4PKhLx&rating=g&limit=3`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    gifs: json.data
                })
            })
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    
    render() {
        return (
            <div>
                <GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
            )
    }
}