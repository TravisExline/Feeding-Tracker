import React from 'react'
import {connect} from 'react-redux'
import {createFeeding} from '../actions/feedingActions'
import NavBar from './NavBar'
import '../style/FeedForm.css'

class FeedForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault()
        this.props.createFeeding({...this.state})
        this.setState({
            reptile_name: '',
            date: ''
        })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <h2 className='feed-form-header'>Who Ate?</h2>
                <form className='feed-form' onSubmit={event=> this.handleSubmit(event)}>
                    <input className='feed-name-input' type='text' name='reptile_name' placeholder='Enter Reptile Name' onChange={event => this.handleChange(event)} value={this.props.name}/>
                    <input className='date-input' type='text' name='date' placeholder='Enter Date Fed' onChange={event => this.handleChange(event)} value={this.props.name}/>
                    {/* <input className='success-input' type='checkbox' name='success'/> */}
                    <input className='submit' type='submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {reptiles: state.reptileReducer}
}

export default connect(mapStateToProps, {createFeeding})(FeedForm)