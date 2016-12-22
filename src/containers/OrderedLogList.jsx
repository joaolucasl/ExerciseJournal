import { connect } from 'react-redux';
import LogList from '../components/LogList.jsx';
import removeLog from '../actions/removeLog';

const mapStateToProps = (state) => ({
  logs: state.logs,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveClick: (uuid) => {
    dispatch(removeLog(uuid));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogList);
