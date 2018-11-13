const AWS = require('aws-sdk');

AWS.config.update({region:'eu-west-1'});

const comprehend = new AWS.Comprehend();

const detectLanguage = async text => {
    return new Promise((resolve, reject) => {
        const TextList = text.split();
        const params = {
            TextList
        };
        comprehend.batchDetectDominantLanguage(params, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

exports.detectLanguage = detectLanguage;