import React from 'react'

import './left-ban.scss';

const facebookUrl = "http://facebook.com/AHandsDesign/";
const instagramUrl = "https://www.instagram.com/ah_create/";
const houzzUrl = "https://www.houzz.co.uk/pro/aeahands/ah-create";

import houzzSvg from "../../images/houzz.svg";

const EMAIL_ADDRESS = "aeahands@gmail.com";

class OnHoverEmail extends React.Component {
    constructor(props) {
        super(props);

        this._onMouseLeave = this._onMouseLeave.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);

        this.state = {
            isOnHover: false,
        }
    }
    _onMouseLeave() {
        this.setState({
            isOnHover: false,
        });
    }

    _onMouseEnter() {
        this.setState({
            isOnHover: true,
        });
    }

    render() {
        if (typeof window !== "undefined" && window.innerWidth <= 770) {
            return (
                <a href={`mailto:${EMAIL_ADDRESS}`} target="_blank" style={{textDecoration:"underline"}}>{EMAIL_ADDRESS}</a>
            );
        }
        return (
            <div id="contact-email" className="text-green" onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
                {this.state.isOnHover ? EMAIL_ADDRESS : (
                    <span>
                        aeahands (at)<br className="hidden-mobile" /> gmail.com
                    </span>
                )}
            </div>
        )
    }
}

const LeftBanner = () => (
    <div className="left-ban">
        <div className="vertical-absolute-center">
            <div className="left-ban__heading">
                <h1 className="text-green">Archie Hands</h1>
                <h2 className="text-uppercase">designer / maker</h2>
            </div>

            <div className="left-ban__labels text-green">
                <p>Furniture Designer</p>
                <p>Bespoke Handmade Woodwork</p>
            </div>

            <div className="left-ban__contact text-lowercase">
                <p>enquiries</p>
                <OnHoverEmail />
            </div>

            <div className="left-ban__socials">
                <a href={facebookUrl} target="_blank"><i className="fab fa-facebook-f" /></a>
                <a href={instagramUrl} className="instagram-link" target="_blank"><i className="fab fa-instagram" /></a>
                <a href={houzzUrl} className="houzz-link" target="_blank"><img src={houzzSvg}/></a>
            </div>
        </div>
    </div>
);

export default LeftBanner;
