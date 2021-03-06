import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faChevronLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import ImageCropperComponent from '../../components/ImageCropper/ImageCropperComponent';
import './Selfie.css';
import permissionDenied from '../../images/no-camera-allowed-hi.png'

class Selfie extends Component {
    state = {
        imageURL: '',
        editImg: false,
        cameraAccess: false,
        permissionError: ''
    }

    videoEle = React.createRef();
    canvasEle = React.createRef();
    imageEle = React.createRef();

    componentDidMount = async () => {
        this.startCamera();
    }

    startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            });

            this.videoEle.current.srcObject = stream;

        } catch (err) {
            this.setState({
                cameraAccess: true,
                permissionError: err
            });
        }
    }


    takeSelfie = async () => {
        // Get the exact size of the video element.
        const width = this.videoEle.current.videoWidth;
        const height = this.videoEle.current.videoHeight;

        // get the context object of hidden canvas
        const ctx = this.canvasEle.current.getContext('2d');

        // Set the canvas to the same dimensions as the video.
        this.canvasEle.current.width = width;
        this.canvasEle.current.height = height;

        // Draw the current frame from the video on the canvas.
        ctx.drawImage(this.videoEle.current, 0, 0, width, height);

        // Get an image dataURL from the canvas.
        const imageDataURL = this.canvasEle.current.toDataURL('image/png');
        this.stopCam();
        this.setState({
            imageURL: imageDataURL,
            editImg: true
        })
    }

    stopCam = () => {
        const stream = this.videoEle.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => {
            track.stop();
        });
    }

    backToCam = () => {
        this.setState({
            imageURL: ''
        }, () => {
            this.startCamera();
        })
    }


    resetDefaultView= () => {
        this.backToCam();
        this.setState({
            imageURL: '',
            editImg: false
        })
    }

    renderCameraPermission = () => {
        return (
            <div style={{textAlign: 'center', position: 'relative'}}>
                <img style={{width:'40%'}}src={permissionDenied}/>
                <p className="errMsg">Oooops!!!, Need Your Browser Camera permission for Further Access...!!!</p>
            </div>
        )
    }


    render() {
        if (this.state.cameraAccess) return this.renderCameraPermission();
        return (<div className="selfie">
            
            {this.state.imageURL === '' && <div className="cam">
                <video width="100%" height="100%" className="video-player" autoPlay={true} ref={this.videoEle}></video>
                <button className="btn capture-btn" onClick={this.takeSelfie}>
                    {/* <i className="fa fa-camera" aria-hidden="true">fa-cam</i> */}
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                </button>
            </div>
            }
            
            <canvas ref={this.canvasEle} style={{ display: 'none' }}></canvas>
            { this.state.imageURL !== '' && <div className="preview">
                <img className="preview-img" src={this.state.imageURL} ref={this.imageEle} />
                <div className="btn-container">
                    <button className="btn back-btn" onClick={this.backToCam}>
                        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                    </button>
                    <a href={this.state.imageURL} download="selfie.png"
                        className="btn download-btn">
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </a>
                </div>
            
            </div>}
            {
                this.state.editImg && <ImageCropperComponent 
                                        imageSrc={this.state.imageURL} 
                                        defaultView={this.resetDefaultView}
                                    /> 
            }
        </div>)
    }
}

export default Selfie;