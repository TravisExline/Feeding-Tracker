import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/userActions'
import '../style/SignIn.css'

class UserForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault()
        this.props.createUser({
            ...this.state
        })
        this.setState({
            username: "",
            password: ""
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h2 className='user-form-header'>Sign In or Sign Up Below!</h2>
                <form className='user-form' onSubmit={event => this.handleSubmit(event)}>
                    <input className='username-input' type='text' name='username' placeholder='Enter Your Username' onChange={event => this.handleChange(event)} value={this.props.username} />
                    <input className='password-input' type='text' name='password' placeholder='Enter Your Password' onChange={event => this.handleChange(event)} value={this.props.password} />
                    <input className="submit-user" type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {createUser})(UserForm)