ChattyApp
=====================

A instant-messaging single-page web app built up with ReactJS and WebSocket.

### Features

* Better user experience created by onBlur event to avoid the unnecessary key press.
* Each user will be assigned a color, regardless the change of username. This UI is easier to read messages from different users.
* Support messages containing both text and image link. The app is smart to understand text and link. Messages of this kind will be displayed in text following the loaded image from the link. Links are supported with a 'HTTP'/'HTTPS' beginning and 'gif'/'jpg'/jpeg/'png' ending (link supports lower or upper case). Image size auto-adjust according to the window size.

### How to use
- Install the dependencies:
```
npm install
```

- Start the server:
```
npm start
```
in both root directory and "chatty-server" folder.

- Open http://localhost:3000 in the browser, as many tabs as you want.


- Try the smart link feature! Here is an example: "Hi! Check out the real Rubber Duck! https://cottagelife.com/wp-content/uploads/2017/04/ducky.jpg". It is also supported if a user only types out the link without other text. Note that the link should start with 'HTTP' or 'HTTPS and ends in 'jpg', 'jpeg', 'png', or 'gif'.

### Project Demo
* Enter the chat room
![desktop view default](https://github.com/GrinJessie/ChattyApp/blob/master/doc/enterRoom.gif)

![chat with others](https://github.com/GrinJessie/ChattyApp/blob/master/doc/chat.gif)

![share a pic](https://github.com/GrinJessie/ChattyApp/blob/master/doc/pic.gif)
![leave the room](https://github.com/GrinJessie/ChattyApp/blob/master/doc/close.gif)


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
