import PropTypes from 'prop-types';
import React from 'react'

import './image-body.scss';

class ImageBody extends React.Component {
    render() {
        const {images, imageIndex, direction} = this.props;

        let directionClass = '';
        if (direction === "right") {
            directionClass = "direction-right";
        } else if (direction === "left") {
            directionClass = "direction-left";
        }

        return (
            <div className="images">
                {images.map((image, i) => {
                    if ([imageIndex, imageIndex - 1, imageIndex + 1].indexOf(i) < 0) return;

                    const displayImageClass = i === imageIndex ? 'images__img-container--display' : '';

                    return (
                        <div className={`images__img-container ${displayImageClass} ${directionClass}`} key={`home-image-${i}`}>
                            <div className="images__img-container__img" style={{backgroundImage: `url(${image})`}}/>
                        </div>
                    );
                })}
            </div>
        );
    }
};

ImageBody.propTypes = {
    images: PropTypes.array.isRequired,
    imageIndex: PropTypes.number,
};

export default ImageBody;
