const Sitemap = require('react-router-sitemap');
const routes = require('../src/App.jsx'); // Import the routes configuration file

function generateSitemap() {
  const paramsConfig = {
    '/': {
      changefreq: 'weekly',
      priority: 1.0,
    },    
  };

  return (
    new Sitemap(routes)
      .applyParams(paramsConfig)
      .build('https://www.collegebehindbars.com')
      .save('./public/sitemap.xml')
  );
}

generateSitemap();
