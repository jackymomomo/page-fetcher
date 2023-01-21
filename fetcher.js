const fs = require('fs')
const request = require('request')

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, res, body) => {
  if (error) {
    console.log('error:', error);
  } 
    fs.writeFile(`${path}`, body, function(error){
      if (error){
        console.log('error:', error)
      }
    })
    
})