export default function (eleventyConfig) {
  //Copy Styles/assets/Scripts
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPassthroughCopy("src/scripts");

  // Add a date filter
  eleventyConfig.addFilter("simpleDate", function (dateString) {
    const date = new Date(dateString);
    const months = [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  });

  // Add limit filter (for showing only X posts)
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site", // Build output
    },

    templateFormats: ["html", "md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
