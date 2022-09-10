'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');
const changes = require('./src/getChanges');
const {v4} = require('uuid')

//init server
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

//init tickers array
const tickers = [
  {
    name: 'AAPL', // Apple
    price: 210,
    id: v4()
  },
  {
    name: 'GOOGL', // Alphabet
    price: 250,
    id: v4()
  },
  {
    name: 'MSFT', // Microsoft
    price: 220,
    id: v4()
  },
  {
    name: 'AMZN', // Amazon
    price: 230,
    id: v4()
  },
  {
    name: 'FB', // Facebook
    price: 180,
    id: v4()
  },
  {
    name: 'TSLA', // Tesla
    price: 260,
    id: v4()
  },
];

function sendQuotes(socket) {
  const quotes = tickers.map(ticker => ({
    name: ticker.name,
    price: changes.getChanges(ticker.price),
    id: ticker.id
  }));

  socket.emit('ticker', quotes);
}

//init interval
let interval = 0;
//init inerval id
let intervalID

function trackTickers(socket) {
  // run the first time immediately
  sendQuotes(socket);

  // identify the interval
  intervalID = setInterval(function() {
    sendQuotes(socket);
  }, interval);
}

socketServer.on('connection', (socket) => {

  socket.on('start', () => {
    trackTickers(socket)
  });

  //set interval and run changes
  socket.on('set-interval', function(res) {
    //set new interval
    interval = res*1000
    //clear old interval
    clearInterval(intervalID)
    //run new interval time in trackTickers()
    trackTickers(socket);
    //send new delay timer
    socket.emit('interval', interval)
  })

  socket.on('add', (obj) => {
    //get new ticker from client form
    const ticker = {
      name: obj.name,
      price: obj.price,
      //add id to new ticker
      id: v4()
    }
    //push the new ticker
    tickers.push(ticker);
    //run new interval time in trackTickers()
    clearInterval(intervalID);
    //send new data
    trackTickers(socket);
  })

  socket.on('delete', (id) => {
    for( let i = 0; i < tickers.length; i++){ 
      //find the desired ticker by id
      if ( tickers[i].id == id) {
        //remove them
        tickers.splice(i, 1);
      }
    }
    //run new interval time in trackTickers()
    clearInterval(intervalID);
    //send new data
    trackTickers(socket);
  })

});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
