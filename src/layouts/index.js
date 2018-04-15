import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../sass/style.scss';

import appleTouchIcon from '../images/favicons/apple-touch-icon.png';
import faviconSmall from '../images/favicons/favicon-16x16.png';
import faviconLarge from '../images/favicons/favicon-32x32.png';
import safariPinnedTab from '../images/favicons/safari-pinned-tab.svg';

const websiteName = "Archie Hands - Bespoke Furniture Designer & Maker";
const websiteDescription = "London based furniture designer specialised in bespoke handmade woodworking.";

const defaultUrl = "https://www.archiehands.uk";
const defaultImageUrl = ""; // TODO
const keywords = "Furniture,london,bespoke,handmade,wood,woodworking,carpenter,carpentry,contemporary,designer,design,custom,fine,maker,interior";

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title={websiteName}
        >
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconLarge} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />
            <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <link rel="canonical" href={defaultUrl} />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={websiteDescription} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={defaultImageUrl} />

            <meta property="og:description" content={websiteDescription} />
            <meta property="og:site_name" content={websiteName} />
            <meta property="og:title" content={websiteName} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={defaultUrl} />
            <meta property="og:image" content={defaultImageUrl} />
            <meta property="og:image:alt" content={websiteName} />

            <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet" />
            <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
                    integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
                    crossOrigin="anonymous" />
        </Helmet>

        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
