const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const User = require('../models/User');

chai.use(chaiHttp);

const USER = {
  firstName: 'Azuka',
  lastName: 'Olisemelie',
  email: 'testemail@gmail.com',
  password: 'testPassword789##',
  
};

let token

describe('Tests for the endpoints', () => {
  before(async () => {
    //delete al occurences of the test user from the db
    await User.deleteMany({ email: USER.email });
  });

  after(async () => {
    //delete al occurences of the test user from the db
    await User.deleteMany({ email: USER.email });
  });

  it('Sign up with proper details should work properly', (done) => {
    chai
      .request(server)
      .post('/auth/signup')
      .send(USER)
      .end((err, res) => {
        assert.property(res.body, 'message', 'sign up endpoint response should have message property');
        assert.equal(res.status, 201, 'signup endpoint should have a 201 reponse');
        done();
      });
  });

  it('After user has signed up, user details should be in database and password should be hashed', (done) => {
    User.findOne({ email: USER.email })
      .select('+password')
      .then((user) => {
        assert.isNotNull(user, 'user that signed up does not have details saved in database');
        assert.equal(user.firstName, USER.firstName, 'firstname that was saved doesnt match users name');
        assert.equal(user.lastName, USER.lastName, 'last name that was saved doesnt math what the user entered');
        assert.notEqual(user.password, USER.password, 'password has not been hashed');
        done();
      })
      .catch((err) => {
        throw err;
      });
  });

  it('user that has signed up should be able to log in successfully', (done) => {
    chai
      .request(server)
      .post('/auth/login')
      .send({
        email: USER.email,
        password: USER.password,
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.property(res.body, 'token', 'login response should have access token property')
        token = res.body.token
        done()
      })
  });

});
