Welcome to My Project PICK'N CHOOSE.

**There's a Cold  Start of 50 Sec so it might take some time to load
Only for the first time though
HERE YOU CAN ORDER FOOD WHILE ON FLIGHT : https://allo-health.onrender.com

(remove spaces from both sides)
username: vedang
password: vedang

(Or we Even give the option to Sign Up)
just click on **Don't have an Account?**

and then make your account 

We respect your Privacy wink wink.

The root directory for this project is BACKEND.

Local Setup for the project:
you will need .env with :
1.MONGO_URI
2.PORT (mine was 5000)
3.NODE_ENV= development
4. JWT_SECRET

Inside Frontend inside vite.config.js : there will be api:{http://onrender.com/api} change it to api:{http://localhost:5000/api}

To generate a JWT_SECRET just run a command `openssl rand -base64 172 | tr -d '\ n' `

YOU need to use MongoDb and create a project then generate a password and then after 
basically generate a string URI and then go to organizations ALLOW ACCESS TO THE NETWORK IP do not forget 

now make an enviroment  inside backend by the name .env and put the MONGO_URI
inside that url just specify the database name as `user-meals` and everything is good it should start working

In the End:

`cd backend`

`npm run build`

`npm start`

