import React from 'react'

import ImageBody from '../components/ImageBody';
import LeftBanner from '../components/LeftBanner';

import '../../sass/home.scss';

import LogoSvg from '../images/logo.svg';

const IndexPage = () => (
    <div id="page">
        <LeftBanner/>

        <div id="content">
            <ImageBody />
        </div>

        <div className="right-ban">
            <div className="vertical-absolute-center">
                <div className="right-ban__logo">
                    <img src={LogoSvg}/>
                </div>

                {/*<div className="right-ban__controls">*/}
                    {/*<button className="hands-btn right-ban__controls__next" >next </button>*/}
                    {/*<button className="hands-btn right-ban__controls__prev" >prev</button>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
);

export default IndexPage;
