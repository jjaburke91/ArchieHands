import React from 'react'

import './left-ban.scss';

const facebookUrl = "";
const twitterUrl = "";

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
        return (
            <div id="contact-email" className="text-green" onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
                {this.state.isOnHover ? "hello@archiehands.uk" : (
                    <span>
                        hello (at)<br />archiehands.uk
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
                <p>Bespoke Furniture</p>
                <p>Fixer</p>
            </div>

            <div className="left-ban__contact text-lowercase">
                <p>enquiries</p>
                <OnHoverEmail />
            </div>

            <div className="left-ban__socials">
                <a href={facebookUrl} target="_blank"><i className="fab fa-facebook-f" /></a>
                <a href={twitterUrl} target="_blank"><i className="fab fa-twitter" /></a>
            </div>
        </div>
    </div>
);

export default LeftBanner;
