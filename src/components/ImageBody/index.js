import React from 'react'

import './image-body.scss';

const igawiTable = require('../../images/igawi-crop-2.jpg');

const ImageBody = () => (
    <div className="images">
        <div className="images__img-container">
            <div className="images__img-container__img" style={{backgroundImage: `url(${igawiTable})`}} />
        </div>
    </div>
);

export default ImageBody;
