import PropTypes from 'prop-types';
import React from 'react'

import './image-body.scss';

const ImageBody = ({images, imageIndex}) => (
    <div className="images">
        {images.map((image, i) => {
            const displayImageClass = i === imageIndex ? 'images__img-container--display' : '';

            return (
                <div className={`images__img-container ${displayImageClass}`} key={`home-image-${i}`}>
                    <div className="images__img-container__img" style={{backgroundImage: `url(${image})`}}/>
                </div>
            );
        })}
    </div>
);

ImageBody.propTypes = {
    images: PropTypes.array.isRequired,
    imageIndex: PropTypes.number,
};

export default ImageBody;
