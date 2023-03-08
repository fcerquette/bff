const accountSid = 'ACb4a0717cef1c0ecb90e7c3888d548ebf'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'esta es una prueba', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+543464447597' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();