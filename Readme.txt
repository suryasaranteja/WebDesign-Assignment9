Command used in Client folder:
npm install nodeman express mongoose jsonwebtoken bcrypt dotenv
npm init
npm install react-bootstrap bootstrap (for card component)

Commands used in Server folder:
npm install nodemon
npm init

Client folder Structure:
WebDesign-Assignment9/client
|-- src/
|   |-- components/
|   |   |-- Home/
|   |   |   |-- Home.js // Home page with card component
|   |   |-- AboutUs/
|   |   |   |-- AboutUs.js //About page with card component and react map()
|   |   |-- Jobs/
|   |   |   |-- Jobs.js //Job page with card component and react map()
|   |   |-- Contact/
|   |   |   |-- Contact.js //Contact page with card component and react map()
|   |   |-- Login/
|   |   |   |-- Login.js //Login page with card components and user login feilds
|   |-- App.js //imported usestate,Route,Outlet,BrowserRouter also the components from the components folder and added nav bar to navigate between pages and to display the Welcome message after login.
|   |-- index.js //imported bootstrap component and React,ReactDOM,App.

Sever Folder Structure:
WebDesign-Assignment9/server
|-- server/
|   |-- models/
|   |   |-- userModel.js // contains the schema for the mongoDB data
|   |-- routes/
|   |   |-- userRoutes.js //All the routes for the user is defined
|   |   |-- authRoutes.js // Login page authentication and verfification is defined here.
|   |-- controllers/
|   |   |-- userController.js Used for GET,PUT,POST,DELETE operations for managing users and validation of user data. Also bcrypts the password.
|   |-- services/
|   |   |-- userService.js // check the username lengths and password requiremnets fulfilled or not.
|   |-- config/
|   |   |-- keys.js // Contains the mongoURI to create a database.
|   |-- server.js // Contains the port number and connection to mongodb also to use routes for login.


