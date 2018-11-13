const express = require('express');
const app = express();

const languageService = require('./language-service');

app.get('/detect/:text', async (request, response) => {
    const detectedLanguages = await languageService.detectLanguage(request.params.text);
    response.json(detectedLanguages);
});

app.listen(8080, () => console.log('IM LISTENING'));