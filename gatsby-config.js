module.exports = {
    siteMetadata: {
        title: 'Archie Hands',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-119130508-2",
                // Puts tracking script in the head instead of the body
                head: true,
            },
        }
    ],
};
