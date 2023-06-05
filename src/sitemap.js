
const fs = require('fs');

const sitemap = require('sitemap');
const hostname = 'https://collegebehindbars.herokuapp.com/';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
    hostname,
    urls,
});

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());