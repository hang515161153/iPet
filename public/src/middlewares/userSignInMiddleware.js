/**
 * Created by hxc on 16-8-23.
 */
import request from 'superagent';

const userSignInMiddleware = store=>next=>action=> {   // eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'SIGN_IN':
    request
        .post('/api/login/signIn')
        .type('form')
        .send({
          username: action.data.newUserName,
          email: action.data.newEmail,
          password: action.data.newPassword
        })
        .end((err, res)=> {
          next({
            type: 'SIGN_IN_RESULT',
            isSuccess: res.body
          });
        });
    break;
  }
  next(action);
};
export default userSignInMiddleware;