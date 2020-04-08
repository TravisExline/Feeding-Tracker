import React from 'react'
import { connect } from 'react-redux'
import {createReptile} from '../actions/reptileActions'
import NavBar from './NavBar'
import '../style/ReptileForm.css'

class ReptileForm extends React.Component {
    componentDidMount() {
        this.setState({
            user_id: this.props.user.id
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.createReptile({...this.state})
        this.setState({
            name: "",
            age: "",
            species: "",
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                <NavBar />
                <h2 className='reptile-form-header'>Add a New Reptile</h2>
                <form className='reptile-form' onSubmit={event=> this.handleSubmit(event)}>
                    <input className='name-input' type='text' name='name' placeholder='Enter Reptile Name' onChange={event => this.handleChange(event)} value={this.props.name} />
                    <input className='age-input' type='text' name='age' placeholder='Enter Reptile Age' onChange={event => this.handleChange(event)} value={this.props.age} />
                    <input className='species-input' type='text' name='species' placeholder='Enter Reptile Species' onChange={event=>this.handleChange(event)} value={this.props.species} />
                    <input className="submit-reptile" type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.userReducer}
}

export default connect(mapStateToProps, {createReptile})(ReptileForm)