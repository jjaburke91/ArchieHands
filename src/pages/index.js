import React from 'react'

import ImageBody from '../components/ImageBody';
import LeftBanner from '../components/LeftBanner';

import '../../sass/home.scss';

import LogoSvg from '../images/logo.svg';

const IGAWI_TABLE = require('../images/igawi-crop-2.jpg');

const IMAGES = [
    IGAWI_TABLE,
    IGAWI_TABLE,
    IGAWI_TABLE,
    IGAWI_TABLE,
    IGAWI_TABLE,
    IGAWI_TABLE,
    IGAWI_TABLE,
];

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this._nextImage = this._nextImage.bind(this);
        this._prevImage = this._prevImage.bind(this);

        this.state = {
            imageIndex: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.imageIndex !== this.state.imageIndex;
    }

    _nextImage() {
        let nextImageIndex = this.state.imageIndex + 1;

        if (nextImageIndex >= IMAGES.length) nextImageIndex = 0;

        this.setState({
            imageIndex: nextImageIndex,
            direction: "right",
        });
    }

    _prevImage() {
        let nextImageIndex = this.state.imageIndex - 1;

        if (nextImageIndex < 0) nextImageIndex = IMAGES.length - 1;

        this.setState({
            imageIndex: nextImageIndex,
            direction: "left",
        });
    }

    render() {
        return (
            <div id="page">
                <LeftBanner/>

                <div id="content">
                    <ImageBody images={IMAGES} imageIndex={this.state.imageIndex} direction={this.state.direction}/>
                </div>

                <div className="right-ban">
                    <div className="vertical-absolute-center">
                        <div className="right-ban__logo">
                            <img src={LogoSvg}/>
                        </div>

                        <div className="right-ban__controls">
                            <button className="hands-btn right-ban__controls__next" onClick={this._nextImage}>
                                <span className="fas fa-chevron-right" />
                            </button>
                            <button className="hands-btn right-ban__controls__prev" onClick={this._prevImage}>
                                <span className="fas fa-chevron-left" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;
