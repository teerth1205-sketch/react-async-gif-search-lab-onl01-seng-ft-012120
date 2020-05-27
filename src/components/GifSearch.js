import React, {Component} from 'react'

export default class GifSearch extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="query" value={this.props.query} onChange={this.props.handleChange} />
                    <input type="submit" value="Search Gifs" />
                </form>
            </div>
        )
    }
}