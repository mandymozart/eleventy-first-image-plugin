# Eleventy First Image Plugin

A simple Eleventy plugin to extract the first image from a post.

## Installation

Install the plugin via npm:

```bash
npm install eleventy-first-image-plugin
```

## Usage

Add the plugin to your `.eleventy.js` configuration file:

```javascript
import firstImagePlugin from "eleventy-first-image-plugin";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(firstImagePlugin);
}
```

Then use the `{% first_image %}` shortcode in your templates to extract the first image:

```html
{% first_image post %}
```

This will return the first image from the post's content.
