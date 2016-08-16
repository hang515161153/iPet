import React,{Component} from 'react';
class Content extends Component{
  render(){
    return (
        <div className='login-content'>
          <ul className='user-login-list' id='user-login-list'>
            <li className='user-login'>用户登录</li>
            <li>快速注册</li>
          </ul>
          <ul className='user-login-ul' id='user-login-ul'>
            <li className='user-login-li' id='user-login-li'>
				<span className='login_username'>
					<img src='images/login_images/user.png'/>
					<input type='text' placeholder='用户名'/>
				</span>
              <span className='login_password'>
					<img src='images/login_images/mima.png'/>
					<input type='text' placeholder='密码'/>
				</span>
              <div className='remeber_password'>
                <span className='remeber_password_span'><input type='checkbox' name='remeber_password' /> 记住密码 </span>
              </div>
              <span className='login_btn_span'>
					<button className='login_btn'>登录</button>
				</span>
            </li>
            <li id='user-logup-li'>
				<span>
					<input type='text' placeholder='请输入用户名'/>
					<img src='images/login_images/user.png'/>
					<img className='match_result' src='images/login_images/success.png'/>
				</span>
              <span>
					<input type='text' placeholder='请输入邮箱'/>
					<img src='images/login_images/mail.png'/>
					<img className='match_result' src='images/login_images/success.png'/>
				</span>
              <span>
					<input type='text' placeholder='请输入密码'/>
					<img src='images/login_images/mima.png'/>
					<img className='match_result' src='images/login_images/success.png'/>
				</span>
              <span>
					<input type='text' placeholder='重复密码'/>
					<img src='images/login_images/mima.png'/>
					<img className='match_result' src='images/login_images/success.png'/>
				</span>
              <span>
					<button className='register_btn'>注册</button>
				</span>
            </li>
          </ul>
        </div>
    );
  }
}
export default Content;