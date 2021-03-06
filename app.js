import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import regRouters from './server/routers';
import path from 'path';

import cookieParser from 'cookie-parser';

const app = express();

mongoose.connect('mongodb://localhost/doctors');

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cookieParser());

app.use(express.static('public'));

regRouters(app);

app.use('*', (req, res)=>{
  res.sendFile(path.resolve('./public/main.html'));
});

app.listen(3000, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;