"use strict";
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');

const params = {
    Destination: {
        CcAddresses: [

        ],
        ToAddresses: [

        ]
    },
    Message: {
        Body: {
            Text: {
                Charset: "UTF-8",
                Data: "test",
            },
            Html: {
                Charset: "UTF-8",
                Data: 'data',
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test email'
        },
    },
    Source: '',
}

const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

sendPromise.then(data => {
    console.log(data.MessageId);
}).catch(err => {
    console.error(err, err.stack);
});