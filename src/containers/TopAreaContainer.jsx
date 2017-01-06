import { connect } from 'react-redux';
import TopArea from '../components/TopArea.jsx';

const mapStateToProps = (state) => ({
  logs: state.logs,
});

export default connect(mapStateToProps, {})(TopArea);
