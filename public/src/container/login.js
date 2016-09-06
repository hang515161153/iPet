/**
 * Created by weihang on 16-8-18.
 */
import {connect} from 'react-redux';
import Content from '../components/index_components/index_content';
import  {loginTodo}  from '../actions';
import {showLoginBoard} from '../actions/showLoginBoard';
import {signIn} from '../actions/signInAction';
import {clearStatus} from '../actions/clearStatusAction';

const mapStateToProps = (state)=> (state);
const mapDispatchToProps = (dispatch)=>({
  loginTodo: (data, loginType)=> {
    dispatch(loginTodo(data, loginType));
  },

  showLoginBoard: (text)=> {
    dispatch(showLoginBoard(text));
  },

  signIn: (data)=> {
    dispatch(signIn(data));
  },

  clearStatus:()=>{
    dispatch(clearStatus());
  }
});
const LoginView = connect(mapStateToProps, mapDispatchToProps)(Content);
export default LoginView;