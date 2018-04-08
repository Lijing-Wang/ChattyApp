ChattyApp
=====================

A instant-messaging single-page web app built up with ReactJS and WebSocket.

### Features

* Better user experience created by onBlur event to avoid the unnecessary key press.
* Each user will be assigned a color, regardless the change of username. This UI is easier to read messages from different users.
* Support messages containing both text and image link. The app is smart to understand text and link. Messages of this kind will be displayed in text following the loaded image from the link. Links are supported with a 'HTTP'/'HTTPS' beginning and 'gif'/'jpg'/jpeg/'png' ending (link supports lower or upper case). Image size auto-adjust according to the window size.

### How to use
```
npm install
```
to install the dependencies.

To start the server:
```
npm start
```
and open http://localhost:3000 in the browser.

To experience the colored username feature, open and typing in multiple http://localhost:3000 pages.

To experience the smart link feature, here is an example: "Hi! Check out the real Rubber Duck! https://cottagelife.com/wp-content/uploads/2017/04/ducky.jpg". It is also supported if a user only types out the link without other text. Note that the link should start with 'HTTP' or 'HTTPS and ends in 'jpg', 'jpeg', 'png', or 'gif'.

### Project Demo
* TTop-right shows how many users are connected. Color for each user is persistent. Many people can send text and link
![desktop view default](https://github.com/GrinJessie/ChattyApp/blob/master/doc/Screen%20Shot%202018-02-23%20at%2012.13.36%20PM.png)

![Half desktop view default](https://github.com/GrinJessie/ChattyApp/blob/master/doc/Screen%20Shot%202018-02-22%20at%209.44.27%20PM.png)

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
