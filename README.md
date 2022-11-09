# Textify
Textify is a Javascript library that converts your images into text!

<image src="https://github.com/lukemccrea/Textify/blob/main/documentation/textifyExample.png?raw=true">

# How to Use

## Step 1: Add Textify
      
Download the `main.min.js` file from the main branch and add it to the root of your project.

## Step 2: Import Script

Add the script tag to your document's head to import the main script.
```html
<script src="main.min.js"></script>
```

## Step 3: Execute Function

Now that you've imported the script, you can call the *textify* function passing the url for the image you want to use as the first argument.

```javascript
textify(imageUrl).then(text => {
      console.log(text) // "Textified" image
    })
```
     
---
*Note: Textify makes use of the HTML canvas. Because of this, Textify only works within browsers and does not work in Node.js*
