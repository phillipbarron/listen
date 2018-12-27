const AWS = require('aws-sdk');
const wormholeHelper = require('@bbc/cps-wormhole');
const awsFactory = require('./factories/aws-factory');

AWS.config.update({region:'eu-west-1'});

const comprehend = awsFactory.getComrehendClient();

const setAwsCredentials = async () => {
    if (!process.env.AWS_SECRET_ACCESS_KEY) {
        await wormholeHelper.setCredentials();
    }
}

const detectLanguage = async text => {
    await setAwsCredentials();
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