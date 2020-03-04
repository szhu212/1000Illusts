import { connect } from "react-redux";
import NavBar from "./nav_bar";
import {logoutUser} from "../../actions/session_actions"

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = (dispatch) => ({
   logout: () => dispatch(logoutUser())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(NavBar);