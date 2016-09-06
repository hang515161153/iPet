/**
 * Created by ritter on 16-8-23.
 */

import React, {Component} from 'react';//eslint-disable-line no-unused-vars
import MsgItem from './../user_board/MsgItem';

class WorkItem extends Component {

  handleClick() {
    let doctor_input = this.refs.msg.value.trim();
    if (doctor_input !== '') {
      this.props.addDoctorMsg(doctor_input, this.props.msg_id);
    }
  }

  render() {
    let {talk} = this.props;
    return (
      <div>
        {
          talk[talk.length - 1].isQuestion ?
              <div className="work_item" ref="work_item">
                <div className="doctor_conversion_title">123</div>
                {
                talk.map((v, k)=>(
                    <MsgItem key={k + 1} isQuestion={v.isQuestion} msg={v.msg}/>
                ))
              }
                <div className='inputMessageDiv'>
                  <span className="select_box">
                    <img src="/images/67.gif" />
                    <img src="/images/images.png" />
                    <img src="/images/webcam.png" />
                  </span>
                  <textarea className="inputMessage" ref="msg"> </textarea>
                  <span className="sendMessage_btn" onClick={this.handleClick.bind(this)}>回复</span>
                </div>

              </div>
            : null
        }
      </div>
    );
  }
}
export default WorkItem;
