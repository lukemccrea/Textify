function textify(url, scale, characters) {
  return new Promise((resolve, reject) => {
    if (!characters) {
      characters = ['█', '▓', '▒', '░'];
    }
    const myImg = new Image();

    myImg.crossOrigin = "Anonymous";
    const canvas = document.createElement('canvas');

    myImg.onload = () => {
      canvas.width = myImg.width * scale;
      canvas.height = myImg.height * scale;
      const context = canvas.getContext('2d');
      context.drawImage(myImg, 0, 0, myImg.width * scale, myImg.height * scale);
      let text = ``;
      for (let y = 1; y < canvas.height; y++) {
        for (let x = 1; x < canvas.width; x++) {
          const {
            data
          } = context.getImageData(x, y, 1, 1);
          text = text + characters[Math.round((data[2] + data[1]) / 160)]
        }
        text = text + `\n`;
      }
      resolve(text);
    }
    myImg.src = url;
  })

}
