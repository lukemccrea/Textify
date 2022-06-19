# Textify
Textify is a Javascript library that converts your images into text!

<image src="https://github.com/lukemccrea/Textify/blob/main/documentation/hanibal%201.png?raw=true" style="height: 200px;;"> <image style="height: 200px;" src="https://www.pngkey.com/png/full/21-212806_arrow-transparent-alpha-right-arrow.png"> <image src="https://github.com/lukemccrea/Textify/blob/main/documentation/Screenshot%202022-06-19%20151128.png?raw=true" style="height: 200px;">

# How to Use

## Step 1: Import Script

Add the script tag to your document's head to import the main script.
```html
<script src="https://raw.githubusercontent.com/lukemccrea/Textify/main/main.min.js"></script>
```

## Step 2: Execute Function

Now that you've imported the script, you can call the *textify* function passing the url for the image you want to use as the first argument.

```javascript
textify(imageUrl).then(text => {
      display.innerHTML = text;
    })
```
