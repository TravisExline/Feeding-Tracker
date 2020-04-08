import React from 'react'
import FeedCard from '../components/FeedCard'
import {fetchFeedings} from '../actions/feedingActions'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'

class FeedingContainer extends React.Component {

    componentDidMount() {
        this.props.fetchFeedings()
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    {this.props.feeds.map((feeding) => (
                    <FeedCard key={feeding.id} feeding={feeding} />
                    ))}
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {feeds: state.feedingReducer}
}

export default connect(mapStateToProps, {fetchFeedings})(FeedingContainer)