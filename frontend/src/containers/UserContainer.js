import React from 'react'
import User from '../components/User'
import {connect} from 'react-redux'

class UserContainer extends React.Component {
    render() {
        return (
            <div>
                <User username={this.props.username}/>
            </div>
        )
    }
}

export default UserContainer