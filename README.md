# upbase-test


### About

This is a simple User Management API
It is divided into 2 major routes.
- Authentication - This gives access to the signup, login and delete routes.
- Profile - This gives access to the users profile.



### Setting up

- cd into the upbase-test project

```bash
$ cd upbase-test
$ npm install
```

- In the root directory of the project create a **.env** file and copy the values from **.env.sample** and set the values of the veriables correctly.
- To run locally you'll need
  - URI to a mongoDB server running locally or in the cloud
- To run locally after setting the environment variables correctly.
```bash
$ npm start
```

- To run locally with nodemon
```bash
$ npm run dev
```
- To run test
```bash
$ npm run test
```

  ## Technology and Packages

  - Nodejs
  - MongoDB
  - Nodemon (Optional)
  - Postman (Documnentation)
  - Bcrypt
  - Multer (For the Image Upload) 
 


## Documentation
You can find the documentation of the endpoints on Postman 
[Documentation Link](https://documenter.getpostman.com/view/12929004/UVXbuf2b)


Thank You.