---
title: textify()
parent: Documentation
nav_order: 1
---

# textify(url, scale, characters)

Returns a promise that resolves with the "textified" image

`textify(url, scale, characters)`

- **Url** - Url for the image you want to textify. *Must be a supported HTML5 canvas image type*
- **Scale** (optional) - A float value from 0 to 1 indicating how much the image should be scaled down
- **Characters** (Optional) - An array of characters to be used instead of the default characters*

**It's recommended that you use an array of characters with the same width to avoid image distortion.*
