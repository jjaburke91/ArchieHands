import React from 'react'

import ImageBody from '../components/ImageBody';
import LeftBanner from '../components/LeftBanner';

const IndexPage = () => (
    <div id="page">
        <LeftBanner/>

        <div id="content">
            <ImageBody />
        </div>

        {/*<div id="right-ban">*/}
            {/*<div>logo</div>*/}
        {/*</div>*/}
    </div>
);

export default IndexPage;
