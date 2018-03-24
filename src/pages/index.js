import React from 'react'

import LeftBanner from '../components/LeftBanner';

const isisTableImg = require('../images/isis-table-crop.jpg');

const IndexPage = () => (
    <div id="page">
        <LeftBanner/>

        <div id="content">
            {/*<img src={isisTableImg} />*/}
        </div>

        <div id="right-ban">
            <div>logo</div>
        </div>
    </div>
);

export default IndexPage;
