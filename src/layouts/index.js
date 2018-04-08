import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../sass/style.scss';

const websiteName = "Archie Hands - Designer / Maker";
const websiteDescription = "WEBSITE DESCRIPTION";

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title={websiteName}
            meta={[
                {name: "description", content: websiteDescription},
                {name: 'keywords', content: ''},
            ]}
        >
            <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet" />
        </Helmet>

        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper