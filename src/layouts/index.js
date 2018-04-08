import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../sass/style.scss';

const websiteName = "Archie Hands - Designer / Maker";
const websiteDescription = "Archie Hands - Designer / Maker";

import appleTouchIcon from '../images/favicons/apple-touch-icon.png';
import faviconSmall from '../images/favicons/favicon-16x16.png';
import faviconLarge from '../images/favicons/favicon-32x32.png';
import safariPinnedTab from '../images/favicons/safari-pinned-tab.svg';

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title={websiteName}
            meta={[
                {name: "description", content: websiteDescription},
                {name: 'keywords', content: 'archie,hands,design,maker,furniture,craft'},
            ]}
        >
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={faviconLarge} />
            <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />
            <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet" />
        </Helmet>

        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
