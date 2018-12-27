const AWS = require('aws-sdk');
const proxyAgent = require("proxy-agent");

const getOptions = () => ({
    region: process.env.AWS_DEFAULT_REGION || "eu-west-1"
});

const configureProxy = () => {
    const proxy = process.env.HTTP_PROXY || process.env.http_proxy;
    if (proxy) {
      AWS.config.update({
        httpOptions: {
          agent: proxyAgent(proxy)
        }
      });
    }
};

exports.getComrehendClient = () => {
    configureProxy();
    const options = getOptions();
    return new AWS.Comprehend(options);
}