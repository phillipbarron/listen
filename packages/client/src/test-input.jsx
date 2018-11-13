import React, { Component } from 'react'
import detectLanguage from '../src/language-detection-service';
import ISO6391 from 'iso-639-1';
export default class TestInput extends Component {
    constructor(props) {
        super(props);
        this.detectLanguage = this.detectLanguage.bind(this);
        this.state = {
            AWS : {},
            Google : {}
        }
    }
    
    async detectLanguage(string) {
        const googleLanguage = await detectLanguage(string, 'GOOGLE');
        const awsLanguage = await detectLanguage(string, 'AWS');
        const googleOutput = googleLanguage ? googleLanguage.data[0] : {};
        const awsOutput = awsLanguage ? awsLanguage.data[0] : {};

        this.setState({
            AWS: awsOutput,
            Google: googleOutput
        })
    }

    render() {
        const getServiceRow = service => {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4"></div>
                            <div className="col-md-4"><h2>{service}</h2></div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                            <div className="col-md-4">Language: {ISO6391.getName(this.state[service].language)}</div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">Confidence: {this.state[service].confidence}</div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4"></div>
                            <input className="form-control col-md-4" placeholder="Detect language" type="text" onChange={change => this.detectLanguage(change.target.value)} />
                        <div className="col-md-4"></div>
                    </div>
                </div>
                {this.state.Google.language &&
                    getServiceRow('Google')
                }
                <div className="row"></div>
                {this.state.AWS.language &&
                    getServiceRow('AWS')
                }
            </div>
        )
    }
}
