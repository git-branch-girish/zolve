import React, { Component } from "react";
import './Clipboard.css'

class Clipboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copySuccess: false,
            inputTextArea: '',
            outputTextArea: null,
            paramValue: ''
        }
    }

    copyToClipboard = () => {
        // console.log(this.state.outTextArea, '>>>>>>>>>>')
        if (this.state.outTextArea){
            const el = this.textArea
            el.select()
            document.execCommand("copy")
            this.setState({ copySuccess: true })
        }else{
            this.setState({ copySuccess: false });
        }   
        
    }

    onInputTextAreaChange = (event) => {
        this.setState({ inputTextArea: event.target.value });
    }

    onOutputTextAreaChange = (event) => {
        this.setState({ outputTextArea: event.target.value });
    }

    pasteFromClipBoard = () => {
        navigator.clipboard.readText().then(text => {
            if (this.state.outputTextArea !== null) {
                return this.setState({ outputTextArea: text })
            }else{
                return this.setState({ copySuccess: false })
            }
        });
    }

    componentDidMount () {
        let url_string = window && window.location && window.location.href;
        let url = new URL(url_string);
        let query = url.searchParams.get("q");
        navigator.clipboard.writeText(query);
        if (query){
            this.setState({
                paramValue: query,
                copySuccess: true,
            })
        }else{
            this.setState({
                paramValue: query, 
                copySuccess: false,
            })
        }
    }

    renderToken = () => {
        return (
            <div>
                {/* Warning: validateDOMNesting
                This warning in console is dude invalidate DOM Nesting...

                "display the key value in a P/SPAN/DIV" 
                This is requirements so...,add. */}               
                <p>
                    <span>
                        <div className="token">{this.state.paramValue}</div>
                    </span>
                </p>
                
            </div>
        )
    }

    renderMessege = () => {
        if (this.state.copySuccess){

            return(
                    
                    <div style={{ "color": "green", textAlign: "center" }}>
                        Success!
                    </div>        
            )
        }
    }

    render() {
        
        return (
            <div className="clipboardWrapper">

                {this.state.paramValue && this.renderToken()}
                {this.state.copySuccess && this.renderMessege()}
                
            
                <div className="row">
                    <textarea
                        placeholder="Type here..."
                        className="inputTextField"
                        ref={(textarea) => this.textArea = textarea}
                        value={this.state.inputTextArea}
                        onChange={this.onInputTextAreaChange}
                    />
                </div>

                <div className="row">
                    <button className="copyToClipBoard"onClick={() => this.copyToClipboard()}>
                        Copy to Clipboard
                    </button>
                    <button className="pasteFromClipBoard" onClick={() => this.pasteFromClipBoard()}>
                        Paste From Clipboard
                    </button>
                    <textarea
                        value={this.state.outputTextArea !== null ?  this.state.outputTextArea : '' }
                        onChange={this.onOutputTextAreaChange}
                        className="outputTextField"
                        placeholder="You can paste here!!!">
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Clipboard;
