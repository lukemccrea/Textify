---
title: Getting Started
nav_order: 2
---

# Getting Started

## Step 1: Add Textify

You can add Textify to your site by downloading the file or using a cdn.

### Download the File
      
Download the `main.min.js` file from the main branch and add it to the root of your project.

Then add the script tag to your document's head to import the main script.
```html
<script src="main.min.js"></script>
```

### Use a CDN

Add the following script tag to your website

```html
<script src="https://cdn.jsdelivr.net/gh/lukemccrea/Textify/main.min.js"> </script>
```

## Step 2: Execute Function

Now that you've imported the script, you can call the *textify* function passing the url for the image you want to use as the first argument.

```javascript
textify(imageUrl).then(text => {
      console.log(text) // "Textified" image
    })
```
     
---
*Note: Textify makes use of the HTML canvas. Because of this, Textify only works within browsers and does not work in Node.js*
