`npm install`

`npm run start`

checkout code and look for postman examples to try it.

user is hardcoded in /auth files, change it for your db user model.

To call an authenticated route from the front-end you can use:

axios.defaults.headers.common[‘auth_token’] = localStorage.token //(token received in login route)

Further details on how to register an user and connect to a db in this series of articles:

[Creating-a-simple-node-express-api-authentication-system-with-passport-and-jwt](http://blog.slatepeak.com/creating-a-simple-node-express-api-authentication-system-with-passport-and-jwt/)
