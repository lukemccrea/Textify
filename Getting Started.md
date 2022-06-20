---
title: Getting Started
nav_order: 2
---

# Getting Started

## Step 1: Import Script

Add the script tag to your document's head to import the main script.
```html
<script src="https://raw.githubusercontent.com/lukemccrea/Textify/main/main.min.js"></script>
```

## Step 2: Execute Function

Now that you've imported the script, you can call the *textify* function passing the url for the image you want to use as the first argument.

```javascript
textify(imageUrl).then(text => {
      console.log(text) // "Textified" image
    })
```
