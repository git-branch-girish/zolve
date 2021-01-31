import React, { Component, ImageCropper } from 'react'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Cropper from 'react-easy-crop'
import ImgDialog from './ImgDialog'
import getCroppedImg from './CropImage'
import './styles.css'

const minZoom = 1

class ImageCropperComponent extends Component {
    state = {
        imageSrc:'',
        crop: { x: 0, y: 0 },
        zoom: minZoom,
        aspect: 4 / 3,
        croppedAreaPixels: null,
        croppedImage: null,
    }

    onCropChange = (crop) => {
        this.setState({ crop })
    }

    onCropComplete = (croppedArea, croppedAreaPixels) => {
        // console.log(croppedArea, croppedAreaPixels)
        this.setState({ croppedAreaPixels })
    }

    onZoomChange = (zoom) => {
        this.setState({ zoom })
    }

    showCroppedImage = async () => {
        const croppedImage = await getCroppedImg(
            this.props.imageSrc,
            this.state.croppedAreaPixels
        )
        // console.log(croppedImage)
        this.setState({ croppedImage })
    }

    handleClose = () => {
        this.setState({ croppedImage: null });
        this.props.defaultView();
        alert('Image Uploaded!');
    }


    render() {
        const { classes, imageSrc } = this.props
        // console.log(imageSrc, 'imageSrc:>>>>>>>>>>>>>>>');

        return (
            <div className="App">
                <div className="crop-container">
                    <Cropper
                        minZoom={minZoom}
                        image={imageSrc}
                        crop={this.state.crop}
                        zoom={this.state.zoom}
                        aspect={this.state.aspect}
                        restrictPosition={false}
                        onCropChange={this.onCropChange}
                        onCropComplete={this.onCropComplete}
                        onZoomChange={this.onZoomChange}
                        cropShape={'round'}
                    />
                </div>
                <div className="controls">
                    <Slider
                        value={this.state.zoom}
                        min={minZoom}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e, zoom) => this.onZoomChange(zoom)}
                        classes={{ container: 'slider' }}
                    />
                    <Button
                        onClick={this.showCroppedImage}
                        variant="contained"
                        color="primary"
                        classes={{ root: classes.cropButton }}
                    >
                        Show Img
          </Button>
                </div>
                <ImgDialog img={this.state.croppedImage} onClose={this.handleClose}  />
            </div>
        )
    }
}

const styles = {
    cropButton: {
        flexShrink: 0,
        marginLeft: 16,
    },
}

const StyledApp = withStyles(styles)(ImageCropperComponent);
export default StyledApp;


