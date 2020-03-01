const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5555;

const publicPath = path.join(__dirname, '..', 'build');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));


// routing
app.post('/api/messages', (req, res)=>{
  console.log('gonna send',req.body.to, req.body.message);
});

app.listen(PORT, ()=>{
  console.log(`Server running.. http://localhost:${PORT}`);
});