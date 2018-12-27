const AWS = require('aws-sdk');
let awsFactory;

describe('Comrehend client', () => {
    awsFactory = require('./aws-factory');
    test('it returns an AWS Comprehend client', () => {
        const target = awsFactory.getComrehendClient();
        expect(target).toBeInstanceOf(AWS.Comprehend);
    });
});

describe("Comprehend client proxy", () => {
    beforeEach(() => {
      process.env = {};
    });
  
    const proxyConfiguration = [
      { proxy: "https://foo.bar/", environmentVariable: "http_proxy" },
      { proxy: "https://foo.bar/", environmentVariable: "HTTP_PROXY" }
    ];
  
    proxyConfiguration.forEach(config => {
      test(`it adds proxy options where environment ${
        config.environmentVariable
      } variable is set to ${config.proxy}`, () => {
        process.env[config.environmentVariable] = config.proxy;
        awsFactory = require("./aws-factory");
        const comprehendClient = awsFactory.getComrehendClient();
        const comprehendClientConfiguration =
          comprehendClient.config.httpOptions.agent.proxy.href;
        expect(comprehendClientConfiguration).toBe(config.proxy);
      });
    });
  });