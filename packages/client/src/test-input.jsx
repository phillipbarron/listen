import React, { Component } from 'react'
import detectLanguage from '../src/language-detection-service';
import ISO6391 from 'iso-639-1';
export default class TestInput extends Component {
    constructor(props) {
        super(props);
        this.detectLanguage = this.detectLanguage.bind(this);
        this.state = {
            currentString : {}
        }
    }
    
    async detectLanguage(string) {
        const language = await detectLanguage(string);
        const output = language ? language.data[0] : {};
        console.log('detected language is ', output);
        this.setState({
            currentString: output
        })
        return language;
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-4"></div>
                            <input className="form-control col-md-4" type="text" onChange={change => this.detectLanguage(change.target.value)} />
                        <div className="col-md-4"></div>
                    </div>
                </div>
                {this.state.currentString.language &&
                <div>
                    <div className="row">
                        <div className="col-md-4"></div>
                            <div className="col-md-4">Language: {ISO6391.getName(this.state.currentString.language)}</div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">Confidence: {this.state.currentString.confidence}</div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
