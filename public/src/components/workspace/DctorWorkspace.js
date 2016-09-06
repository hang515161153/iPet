/**
 * Created by zhangyiru on 16-8-17.
 */
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import DoctorWorkspace from '../../container/DoctorWorkspace';
import DoctorInfo from './doctor_info';
import Head from '../Head';
import Foot from '../Foot';

class DoctorWorkspaceApp extends Component {
  render() {
    return (
        <div className="user_talk">
          <Head/>
          <div className="doctor_conversion_box">
            <DoctorInfo />
            <DoctorWorkspace/>
          </div>
          <Foot/>
        </div>
    );
  }
}

export default DoctorWorkspaceApp;
