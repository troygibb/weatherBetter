const config = require('./config')
const client = require('twilio')(config.accountSid, config.authToken);;

const sendSms = (to, message) => {
  client.messages.create({
    body: message,
    to: to,
    from: config.sendingNumber
//  mediaUrl: imageUrl
  }, (err, data) => {
    if (err) {
      console.error('Could not notify user');
      console.error(err);
    } else {
      console.log('User notified of weather');
    }
  });
};

module.exports = { sendSms };