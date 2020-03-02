const https = require('https');

const sendMessage = (PATH_BASE, TEXT_LOCAL_URL_PATH)=>{

  const finalUrl = `${PATH_BASE}${TEXT_LOCAL_URL_PATH}`;
  var req = https.request(finalUrl, (res) => {  
    res.on('data', (d) => {
      process.stdout.write(d);
      return true;
    });
  });
  req.on('error', (e) => {
    console.error(e);
    return false;
  });
  req.end();

};

module.exports = sendMessage;