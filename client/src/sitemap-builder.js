require('@babel/register')({
	extends: './src/.babelrc',
})
 
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.runeterranexus.com")
          .save("./sitemap.xml")
    );
}

generateSitemap();