import mongoose from 'mongoose';

const User = mongoose.model('User',{
  username:String,
  password:String,
  email:String,
});
export default User;