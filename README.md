# proof-of-concept language detection component

Query Google translate / AWS Comprehend API and display results in a React component

## Disclaimer!

This is a proof-of-concept which ~may~ does depart from engineering excellence principles at times. The styling choices may also prove to be at odds with common notions of aesthetic desirability.

## Prerequisites

You will need lerna available

```bash
npm i -g lerna
```

### Google Translate API

The app requires `GOOGLE_APPLICATION_CREDENTIALS` set as an environment variable.

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/google/credentials.json";
```
See [here](https://cloud.google.com/translate/docs/quickstart) for setting up a google account.

### AWS Comprehend API

The app authenticates with the [AWS API](https://aws.amazon.com/comprehend) using credentials obtained from the Wormhole. This requires that you have a dev-cert location and an AWS account number exported:

```bash
export AWS_ACCOUNT_NUMBER="12345678910";

export CERT_LOCATION="/path/to/your/dev/cert";
```

## Installation

```bash
npm run bootstrap
```

## Run application

```bash
npm run start
```
