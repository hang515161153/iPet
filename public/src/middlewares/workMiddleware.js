/**
 * Created by qiyanzi on 16-8-22.
 */
import request from 'superagent';
const workMiddleware = store=>next=>action=> {   // eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'GET_DOCTORID':
    request
        .get('/api/doctor_login/cookie')
        .end((err, res)=> {
          if (res.status === 200) {
            store.dispatch({
              type: 'WORK_INIT',
              doctorId: res.text
            });
          } else {
            location.href = 'http://localhost:3000';
          }
        });
    break;
  case 'WORK_INIT':
    request
        .get('/api/messages/load_work')
        .query({
          doctorId: action.doctorId
        })
        .end((err, res)=> {
          store.dispatch({
            type: 'LOAD_WORK',
            data: res.body
          });
        });
    break;
  }
  next(action);
};
export default workMiddleware;