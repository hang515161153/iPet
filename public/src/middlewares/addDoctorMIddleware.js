/**
 * Created by qiyanzi on 16-8-22.
 */
import request from 'superagent';
const addDoctorMiddleware = store=>next=>action=> {   // eslint-disable-line no-unused-vars
  switch (action.type) {
  case 'ADD_DOCTOR_MSG':
    request.put('/api/messages')
        .type('form')
        .query({id: action.msg_id})
        .send(action.data)
        .end((err, res)=> {
          store.dispatch({type: 'GET_DOCTORID'});
          next({
            type: 'LOAD_DOCTOR_MSG',
            data: res.body
          });
        });
    break;
  }
  next(action);
};
export default addDoctorMiddleware;