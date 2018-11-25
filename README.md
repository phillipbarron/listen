# WIP sandbox for language detection


Hit to google translate / AWS Comprehend API and display results in a React component

## Disclaimer!
This is a proof-of-concept which may (does) depart from engineering excellence principles at times. The styling choices may also prove to be at odds with common notions of aesthetic desirability.

## Prerequisites

You will need lerna available

```bash
npm i  -g lerna
```

### Google Translate API

The app requires `GOOGLE_APPLICATION_CREDENTIALS` environment variable.
See [here](https://cloud.google.com/translate/docs/quickstart) for setting up a google account.

### AWS Comprehend API

The app is authenicating via temporary credentials obtained from the wormhole. This requires thatyou have a dev cert location exported and AWS account number set too

```bash
export AWS_ACCOUNT_NUMBER="169163488685";

export CERT_LOCATION="/path/to/you/dev/cert";
```

## Installation

```bash
npm run boostrap
```

## Run application

```bash
npm run start
```
