/**
 * Created by hxc on 16-8-23.
 */
const user_sign_in = (state = '', action)=> {
  switch (action.type) {
  case 'SIGN_IN_RESULT':
    return action.isSuccess;
  case 'CLEAR_STATUS':
    return 'loading';
  }
  return state;
};
export default user_sign_in;
