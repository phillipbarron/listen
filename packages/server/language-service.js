const {
    Translate
} = require('@google-cloud/translate');

// Creates a client
const translate = new Translate();

process.env.GOOGLE_APPLICATION_CREDENTIALS="/Users/barrop02/Downloads/listen-7c1de643318c.json"

const detectLanguage = async (text) => {
    return translate
        .detect(text)
        .then(results => {
            let detections = results[0];
            detections = Array.isArray(detections) ? detections : [detections];
            detections.forEach(detection => {
                console.log(`${detection.input} => ${detection.language}`);
            });
            return detections;
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
}

exports.detectLanguage = detectLanguage;