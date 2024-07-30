# auth_project

# implementation of an authorization system

## This project includes: Implementation of an authorization system in an application includes several key stages and components that provide control over user access to various resources and functionality. Here are the main steps and elements to consider when implementing an authorization system:

## Registration and Authentication

_User registration:_

-Creating an interface for registering new users.-
-Saving user data in a database (for example, name, email, password).-

_User authentication:_

-Creating a login interface.-
-Verification of user-provided credentials (email and password).-
-Generation (JSON) upon successful authentication.-

# callbacks:

_authorization_

-The `authorization` function implements a form of user authorization with verification of the password stored in `localStorage`.\_

_registration_

-The `registration` function is responsible for processing the registration of a new user. It configures the registration form, assigns event handlers, and submits data to create a new user. Here is a detailed description of how the function works.-

# configs:

_host_

-[The code creates a constant host and assigns it the string value URL]('https://garevna-rest-api.glitch.me').

# helpers:

_addElem_

-The `addElem` function is designed to add a new element with the specified tag to a given container in the DOM. If the container is not a DOM element, the function returns `null`.-

_createUser_

-The `createUser` function sends a `POST` request to the server to create a new user with the specified `id` and `user` data. After receiving a response from the server, if the response status indicates success (status 200), the passed callback function is called with the received `JSON` response.-

_getAllUsers_

-The `getAllUsers` function `sends` a GET request to the server to obtain a list of all users. If the request is successful (status 200), the function processes the response and stores user passwords in `localStorage`.-

_getUsers_

-The `getUser` function sends a GET request to the server to obtain information about the user for the specified login. After receiving a response from the server, the passed `callback` function is called with the received data. If the request fails, an error warning is printed to the console.-

_readimage_

-The `readImage` function is designed to read an image from the selected file and display it in the `picture` element. If the file is not an image, an error message is displayed.-

_setPasswordParams_

-The `setPasswordParams` function controls the style and state of the login/registration form elements associated with password and login. In particular, it allows you to change the state of the password input field (on/off) and change the color of the login style.-

_stylizeButton_

-The `stylizeButton` function is used to style a button element depending on the result of a (`test`). If `test` is true, the element receives a style indicating success, otherwise it receives a style indicating `error`.-

# templates:

_authorization_

-The `authorizationTemplate` constant is an HTML template string for creating an authorization form. This template can be used to dynamically add a login form to a web page.-

_registration_

-The `registrationTemplate` constant is an HTML template string for creating a user registration form. This template is used to dynamically add a registration form to a web page.-

_storage-extends_

-The code extends the `Storage` object prototype by adding two methods: `storeObject` and `getObject`. These methods make it easier to work with objects by allowing them to be stored and retrieved from `localStorage` or sessionStorage in `JSON` format.-
