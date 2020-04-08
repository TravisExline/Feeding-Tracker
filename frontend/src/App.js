import React from 'react';
import {connect} from 'react-redux'
import UserContainer from './containers/UserContainer'
import ReptileForm from './components/ReptileForm'
import UserForm from './components/UserForm'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.user.username ?
        <UserContainer username={this.props.user.username} /> 
        : 
         <UserForm />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {user: state.userReducer}
}

export default connect(mapStateToProps) (App);
