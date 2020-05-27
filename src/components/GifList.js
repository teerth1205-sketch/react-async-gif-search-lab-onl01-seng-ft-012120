import React, {Component} from 'react'

export default class GifList extends Component {
    render(){
        const gifs = this.props.gifs.map(gif => {
            return <li><img src={gif.images.original.url} /></li>
        })

        return(
            <div>
                <ul>
                    {gifs}
                </ul>
            </div>
        )
    }
}