import React from 'react'

import './left-ban.scss';

const LeftBanner = () => (
    <div className="left-ban">
        <div className="vertical-absolute-center">
            <div className="left-ban__heading">
                <h1 className="text-green">Archie Hands</h1>
                <h2 className="text-uppercase">designer / maker</h2>
            </div>

            <div className="left-ban__labels text-green">
                <p>Bespoke Furniture</p>
                <p>Fixer</p>
                <p>Gentle Lover</p>
            </div>

            <div className="left-ban__contact text-lowercase">
                <p>enquiries</p>
                <div className="text-green">
                    {/*Implement on hover here to translate the email to a proper one*/}
                    <p>hello (at)</p>
                    <p>archiehands.design</p>
                </div>
            </div>
        </div>
    </div>
);

export default LeftBanner;
