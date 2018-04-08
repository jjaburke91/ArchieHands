# Archie Hands
Built with [Gatsby](https://www.gatsbyjs.org) and Github pages.

DNS bought with GoDaddy for hosts archiehands.uk and ahdesign.uk. The latter redirects to the former.

Everything in the ```assets``` folder is copied into the root of the gh-pages deployment (e.g. robots.txt).

## Develop

```npm run develop```

## Deploy

```npm run deploy```

Note the deploy script copies the CNAME from the root directory into the public folder. This is for the DNS.
