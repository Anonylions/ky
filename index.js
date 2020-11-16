// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');


const credentials = {
    id: 'AKIAQFQJ7AVKQNI475EH',
    secret: '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'
}

// Set region
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: credentials.id,
    secretAccessKey: credentials.secret

});
// Create publish parameters

let params = {
    Message: 'Olá Ultra Coders', /* required */
    PhoneNumber: '+5584981380172',
};

// Create promise and SNS service object


function sendSMS(params) {
    var publishTextPromise = new AWS.SNS().publish(params).promise();
    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(function (data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(function (err) {
        console.error(err, err.stack);
    });
}

sendSMS(params);
