import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from '../../actions/userActions'
import LoginPage from '../LoginPage'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => (
    bindActionCreators( { login }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
