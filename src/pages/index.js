import React from 'react'

import '../../sass/home.scss';

const isisTableImg = require('../images/isis-table-crop.jpg');

const IndexPage = () => (
    <div id="home" style={{backgroundImage: isisTableImg}}>
        <div id="home__content">
            <h1>ARCHIE HANDS</h1>
            <h2>designer / maker</h2>

            <div id="home__content__body">
                <p>contact</p>
                <p>archiehands (at) gmail.com</p>
            </div>
        </div>

        <div id="home__img">
            <img src={isisTableImg} />
        </div>
    </div>
);

export default IndexPage
