const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
const PORT = 3001;

const server = express()
              .use(express.static('public'))
              .listen(PORT, '0.0.0.0', 'localhost', ()=>console.log(`listening on ${PORT}`));

const wss = new SocketServer({server});

//generate number between 1-4 to decide colors
let id = -1;
const genereateId = () => {
  id === 3 && id = -1;
  id ++;
  return id;
};

//set id and color for unique ws client once connection set up
const colors = ["#008E9B", "#B39CD0", "#C34A36", "#D5CABD"];
const setClient = (ws) => {
  if (!ws.id) {
    id = genereateId();
    ws.id = id;
    ws.color = colors[id];
  }
};

//return color according to ws id
const findColor = (ws) => {
  for(let i = 0; i <= 4; i++) {
    if (ws.id === i) {
      return ws.color;
      break;
    }
  };
};

wss.on('connection', (ws) => {
  console.log('Client connected');

  wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
      client.readyState === ws.OPEN && client.send(data);
    });
  };

  //count the number of connections/clients once connection is ready
  const updateClientsNum = () => {
    let clientsNum = wss.clients.size;
    wss.broadcast(JSON.stringify({type: "clientsNum", clientsNum: clientsNum}));
  };

  //check picture url in message content
  const checkPicture = (data) => {
    const match = data.content.match("http:\/\/.+?\.jpg|jpeg|png|gif");
    const imgSrc = match ? match[0] : null;
    const updatedContent = data.content.split("").splice(0, match.index - 1).join("");
    return {
      imgSrc: imgSrc,
      updatedContent: updatedContent
    }
  };

  updateClientsNum();
  setClient(ws);

  ws.on('message', (incomingData)=>{
    const data = JSON.parse(incomingData);
    if (data.type === "postMessage") {
      const result = checkPicture(data);
      data = {
        id: uuidv4(),
        type: "incomingMessage",
        color: findColor(ws),
        content: result.updatedContent,
        imgSrc: result.imgSrc
      }
      wss.broadcast(JSON.stringify(data));
    }
    if (data.type === "postNotification"){
      data.type = "incomingNotification";
      wss.broadcast(JSON.stringify(data));
    }
  });

  //update the number of connections
  ws.on('close', ()=>{
    updateClientsNum();
    console.log('Client disconnected');
  });
});

