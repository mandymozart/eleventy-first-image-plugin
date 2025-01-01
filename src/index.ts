// lib/firstImagePlugin.js
/**
 * Eleventy Plugin to extract the first image from a post.
 *
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 */
function pluginFirstImage(eleventyConfig) {
  /**
   * Extract the first image tag from the content of a document
   * @param {*} doc A real big object full of all sorts of information about a document.
   * @returns {String} the markup of the first image.
   */
  function extractFirstImage(doc) {
    if (!doc.hasOwnProperty("templateContent")) {
      return;
    }

    const content = doc.templateContent;

    if (content.includes("<img")) {
      const imgTagBegin = content.indexOf("<img");
      const imgTagEnd = content.indexOf(">", imgTagBegin);
      const tag = content.substring(imgTagBegin, imgTagEnd + 1);

      // Ensure tag is valid
      if (!tag.includes("src=")) {
        return "";
      }

      // Skip external images
      if (tag.includes("http")) {
        return "";
      }

      // Skip images with the same URL as the post
      if (tag.includes(doc.url)) {
        return tag;
      }

      // Replace src
      const updatedTag = tag.replace('src="', `src="${doc.url}`);
      return updatedTag;
    }
    return "";
  }

  // Register the `first_image` shortcode
  eleventyConfig.addShortcode("first_image", (post) => extractFirstImage(post));
}

export default pluginFirstImage;
