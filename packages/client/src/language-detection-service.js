import axios from "axios";

const detectLanguage = async text => {
    const detectedLanguage = await axios.get(`/detect/${text}`).then(res => {
        return res;
    }).catch(error => {
        throw error
    });

    return detectedLanguage;
}

export default detectLanguage;