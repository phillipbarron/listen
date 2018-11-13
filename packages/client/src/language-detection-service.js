import axios from "axios";

const detectLanguage = async (text, service = "GOOGLE")  => {
    const detectedLanguage = await axios.get(`/detect/${service}/${text}`).then(res => {
        return res;
    }).catch(error => {
        throw error
    });

    return detectedLanguage;
}

export default detectLanguage;