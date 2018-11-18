import { connect } from 'react-redux';
import Main from './Main';
import * as actions from '../Redux/Actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

function mapStateToProps(state){
  return{
    Posts: state.post,
    comment: state.comment
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

const MainApp = withRouter(connect(mapStateToProps,mapDispatchToProps)
                (Main))

export default MainApp
