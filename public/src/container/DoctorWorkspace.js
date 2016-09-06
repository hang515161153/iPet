/**
 * Created by ritter on 16-8-23.
 */
import {connect} from 'react-redux';
import WorkList from '../components/workspace/WorkList';
import {getDoctorId} from '../actions/getDoctorId';
import {addDoctorMsg} from '../actions/addDoctorMsgAction';

const mapStateToProps = (state)=> ( state);

const mapDispatchToProps = (dispatch)=>({
  addDoctorMsg: (text, msg_id)=> {
    dispatch(addDoctorMsg(text,msg_id));
  },
  getDoctorId: ()=>{
    dispatch(getDoctorId());
  }

});

const DoctorWorkspace = connect(mapStateToProps,mapDispatchToProps)(WorkList);
export default DoctorWorkspace;
