const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sendOTP = require('./sendMessage'); 
const PORT = process.env.PORT || 4000;
// const publicPath = path.join(__dirname, '..', 'build');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// api routing for message
app.post('/compose/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  
  const to = req.body.to;
  const message = req.body.message;
  if(to === undefined || message === undefined){
    res.send(JSON.stringify({ success: false }));
    console.log('undefined to and messages', to, message);
  }else{
    const PATH_BASE = 'https://api.textlocal.in';
    const API_KEY = 'WDqSw5pfGss-WACxdmZhTsKqLqIxWNTYncpnPpla6h';
    const TEXT_LOCAL_URL_PATH = `/send/?apikey=${API_KEY}&numbers=${to}&message=${message}`;
    
    const response = sendOTP(PATH_BASE, TEXT_LOCAL_URL_PATH);
    if(response){
      res.send(JSON.stringify({ success: true }));
    }else{
      res.send(JSON.stringify({ success: false }));
    }
  }
});

// api routing for all paths
// app.use('*', (req, res)=>{
//   res.sendFile(path.join(publicPath, 'index.html'));
// });
const publicPath = path.join(__dirname, '..', 'build');
console.log(publicPath);
app.use('*', express.static(publicPath));

// listen app to any port
app.listen(PORT, () => {
  console.log(`Server running.. http://localhost:${PORT}`);
});