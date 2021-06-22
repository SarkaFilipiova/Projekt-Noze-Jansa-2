module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("favicon");
   

    return {
       templateFormats: ["njk", "html", "md", "liquid"],
   
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",


    }
};