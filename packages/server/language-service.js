const googleLanguageClient = require('./google-translate-client');
const awsLanguageClient = require('./aws-comprenend-client');

const formatResponse = (response, service, text) => {
    switch(service) {
        case "AWS":
            const result = response.ResultList;
            return result ? [{language: result[0].Languages[0].LanguageCode, confidence: result[0].Languages[0].Score, input: text }] : [];
        default:
            return response;
    }
}

const detectLanguage = async (service, text) => {
    switch(service) {
        case "AWS":
            return formatResponse(await awsLanguageClient.detectLanguage(text), service, text);
        case "GOOGLE":
            return googleLanguageClient.detectLanguage(text);
        default:
            throw new Error(`unknown service ${service}`);
    }
}

exports.detectLanguage = detectLanguage;