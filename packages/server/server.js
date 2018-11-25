const express = require('express');
const app = express();

const languageService = require('./language-service');

app.get('/detect/:service/:text', async (request, response) => {
    const detectedLanguages = await languageService.detectLanguage(request.params.service, request.params.text);
    response.json(detectedLanguages);
});

app.listen(8090, () => console.log('listening on http://localhost:8090'));