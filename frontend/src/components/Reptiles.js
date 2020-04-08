import React from 'react'
import '../style/Reptiles.css'


class Reptiles extends React.Component {
    render() {
        return (
            <div className='reptiles-container' >
                <div className='reptile-card'>
                    <h2 className="reptile-header">{this.props.reptile.name}</h2>
                    <p className='reptile-species'>{this.props.reptile.species}</p>
                    <p className='reptile-age'>Age: {this.props.reptile.age}</p>
                </div>
            </div>
        )
    }
}

export default (Reptiles)