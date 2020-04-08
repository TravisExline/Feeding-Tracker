import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import '../style/User.css'

class User extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h2 className="user-header">Welcome, {this.props.user.username}</h2>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.userReducer}
}

export default connect(mapStateToProps)(User)