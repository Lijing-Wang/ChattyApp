ChattyApp
=====================

A instant-messaging single-page web app built up with ReactJS and WebSocket.

### Features

* Better user experience created by onBlur event to avoid unecessary key press.
* Each user will be assigned a color, regardless the change of username. This UI is easier to read message from different users.
* Support messages containing both text and image link. The app is smart to understand text and link. Messages of this kind will be display in text following by the loaded image from the link. Links are supported with a 'http'/'https' beginning and 'gif'/'jpg'/jpeg/'png' ending (smart messaging is not case sensitive). Image size auto-adjust according to window size.

### How to use

"npm install" to install the dependencies.

To start the server: "npm start" and open http://localhost:3000 in the browser.

To experience the colored username feature, open and typing in multiple http://localhost:3000 pages.

To experience the smart link feature, here is an example: "Hi! Check out the real Rubber Duck! https://cottagelife.com/wp-content/uploads/2017/04/ducky.jpg". All you need is an space between text and link. It is also supported if user only type out the link without other text. Note that the link should start with 'http' or 'https' and ends in 'jpg', 'jpeg', 'png', or 'gif'.

### Project Demo
* Top-right shows how many users are connected. Color for each user is persistent. Many people can send text and link
![desktop view default](https://github.com/GrinJessie/ChattyApp/blob/master/doc/Screen%20Shot%202018-02-22%20at%208.31.20%20PM.png)

![Half desktop view default]()

### Dependencies

* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* css-loader
* node-sass
* sass-loader
* sockjs-client
* style-loader
* webpack
* webpack-dev-server
* react
* react-dom
* express
* ws
* uuid
