import React from 'react'
import Reptiles from '../components/Reptiles'
import {fetchReptiles} from '../actions/reptileActions'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class ReptileContainer extends React.Component {

    componentDidMount() {
        this.props.fetchReptiles()
    }

    render() {
        return (
            <div>
                <NavBar />
               {this.props.reptiles.map((reptile) => (
                    <Reptiles key={reptile.id} reptile={reptile} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {reptiles: state.reptileReducer}
}

export default connect(mapStateToProps, {fetchReptiles})(ReptileContainer)