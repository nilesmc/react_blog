import BaseCredentials from '../config/constants'
import Rebase from 're-base';

const Base = Rebase.createClass(BaseCredentials);

const authHandler = function(error, user) {
  if(error) {
    console.log(error, user);
  } else {
    console.log('success');
  }
};

Base.authWithPassword({
    email: '',
    password : ''
  }, authHandler);

export default Base