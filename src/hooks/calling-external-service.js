const http = require('http');
module.exports = function (options = {},queryParamters={}) {
  // make a request to a tunneling proxy
  let response={body:null,success:null};
 queryParamtersString="?";
 for (var key in queryParamters) {
    if( queryParamters.hasOwnProperty(key) ) {
        queryParamtersString += key + "=" + queryParamters[key]+"&" ;
    } 
  }   
  

  options.path +=queryParamtersString;
  const req =  http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        response.body=  JSON.parse(chunk);
        response.success=true;
        console.log("response",response)
    });
  });
req.Wait();
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    response.success=false;
  });
  
  // write data to request body

  req.end();
  return response;
};
