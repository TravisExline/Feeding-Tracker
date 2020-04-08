import React from 'react'
import '../style/FeedCard.css'

class FeedCard extends React.Component {
    render() {
        return (
            <div className='feed-card'>
                <h3 className='feed-name'>{this.props.feeding.reptile_name}</h3>
                <p className='feed-date'>{this.props.feeding.date}</p>
                <p className='feed-success'>{this.props.feeding.successful}</p>
            </div>
        )
    }
}

export default FeedCard