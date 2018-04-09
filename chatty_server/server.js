const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
const PORT = 3001;

const server = express()
              .use(express.static('public'))
              .listen(PORT, '0.0.0.0', 'localhost', ()=>console.log(`listening on ${PORT}`));

const wss = new SocketServer({server});

//generate number between 1-4 to decide colors
// const genereateId = (() => {
//   let id = -1;
//   return () => {
//     if (id === 3){
//       id = -1;
//     }
//     id ++;
//     return id;
//   }
// })();


const generateColor = () => {
  const elements = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * 16);
    color += elements[index];
  }
  return color;
};

//set id and color for unique ws client once connection set up

// const identifyClient = ((ws) => {
//   const colors = ['#008E9B', '#B39CD0', '#C34A36', '#D5CABD'];
//   return (ws) => {
//     if (!ws.id) {
//       const id = genereateId();
//       ws.id = id;
//       ws.color = colors[id];
//     }
//   }
// })();

const assignColor = (ws) => {
  if (!ws.color) {
    ws.color = generateColor();
  }
}

//return color according to ws id
// const findColor = (ws) => {
//   for(let i = 0; i <= 4; i++) {
//     if (ws.id === i) {
//       return ws.color;
//       break;
//     }
//   }
// };

wss.on('connection', (ws) => {
  console.log('Client connected');

  //definde broadcase method
  wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
      client.readyState === ws.OPEN && client.send(data);
    });
  };

  //count the number of connections/clients once connection is ready
  const updateClientsNum = () => {
    let clientsNum = wss.clients.size;
    wss.broadcast(JSON.stringify({ type: 'clientsNum', clientsNum: clientsNum}));
  };

  const identifyClient = (data) => {
    // if (!ws.username) {
      console.log('data', data);
      ws.username = data.newUser;
      console.log('ws username', ws.username);
    // } else {
    //   ws.username = data.newUser;
    // }
  };

  const trackClients = () => {
    let clientsList = [];
    wss.clients.forEach((client) => {
      const clientInfo = {
        name: client.username,
        color: client.color
      }
      clientsList.push(clientInfo);
    });
    wss.broadcast(JSON.stringify({ type: 'clientsList', clientsList: clientsList}));

  }

  //check picture url in message content using regular expressions
  const checkPicSrc = (data) => {
    const match = data.content.toLowerCase().match('http:|https:\/\/.+?\.jpg|jpeg|png|gif');
    const imgSrc = match ? match[0] : null;
    let updatedContent;
    if (imgSrc) {
      updatedContent = data.content.split('').splice(0, match.index - 1).join('');
    }
    return {
      imgSrc: imgSrc,
      updatedContent: imgSrc ? updatedContent : data.content
    }
  };

  // identifyClient(ws);
  updateClientsNum();
  assignColor(ws);

  ws.on('message', (incomingData)=>{
    let data = JSON.parse(incomingData);
    if (data.type === 'identifier') {
      identifyClient(data);
      trackClients();
    }
    if (data.type === 'postMessage') {
      const result = checkPicSrc(data);
      data.id = uuidv4(),
      data.type = 'incomingMessage',
      // data.color = findColor(ws),
      data.color = ws.color;
      data.content = result.updatedContent,
      data.imgSrc = result.imgSrc
      wss.broadcast(JSON.stringify(data));
    }
    if (data.type === 'postNotification'){
      data.type = 'incomingNotification';
      wss.broadcast(JSON.stringify(data));
    }
  });

  //update the number of connections
  ws.on('close', ()=>{
    updateClientsNum();
    console.log('Client disconnected');
  });
});

