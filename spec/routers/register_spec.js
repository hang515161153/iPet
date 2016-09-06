/**
 * Created by hxc on 16-8-24.
 */
import request from "supertest";
import app from '../../app';

describe('post /api/login/signIn', ()=> {
  it('should return true', (done)=> {
    request(app)
        .post('/api/login/signIn')
        .type('form')
        .send({
          username: 'myc1995',
          password: 'myc123456',
          email: '87594302@qq.com'
        }).end((err, res)=> {
      expect(res.body).toEqual(true);
      done();
    });
  });
});