const request = require('request'); 
request('https://api.coindesk.com/v1/bpi/currentprice.json ', (error, response, body) => { 
    if (error) { 
        console.error(`Could not send request to API: ${error.message}`); 
        return; 
    } 
    if (response.statusCode != 200) { 
        console.error(`Expected status code 200 but received 
${response.statusCode}.`); 
        return; 
    } 
    console.log('Processing our list of Bitcoin value'); 
    //bitcoins = JSON.parse(body); 
    bitcoins.forEach(bitcoin => { 
        console.log(`${bitcoin['code']}, ${bitcoin['rate_float']}`); 
    }); 
});