 // Color swatch click -> image switch
  const colorMap = {
    PUWhite_10: "assets/img/products/OJO/PUWhite_10.png",
    PUGrey_10: "assets/img/products/OJO/PUGrey_10.png",

    PUWhite_4: "assets/img/products/OJO/PUWhite_4.png",
    PUGrey_4: "assets/img/products/OJO/PUGrey_4.png",

    MultiBlack: "assets/img/products/OJO/MultiBlack.png",
    MultiTrans: "assets/img/products/OJO/MultiTrans.png",
    MultiWhite: "assets/img/products/OJO/MultiWhite.png",

    Vinyl_1: "assets/img/products/OJO/VinylTile_1.5.png",
    Vinyl_2: "assets/img/products/OJO/VinylTile_3.png",

    WallPutty_1: "assets/img/products/OJO/WallPutty_1.5.png",
    WallPutty_2: "assets/img/products/OJO/WallPutty_3.png",

    LeaksWhite: "assets/img/products/OJO/LeaksWhite.png",
    LeaksClear: "assets/img/products/OJO/LeaksClear.png",
    LeaksGrey: "assets/img/products/OJO/LeaksGrey.png"

  };

  document.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      const colorKey = swatch.getAttribute("data-color");
      const newSrc = colorMap[colorKey];
      if (newSrc) {
        productImage.src = newSrc;
        lens.style.backgroundImage = `url('${newSrc}')`;
      } else {
        console.error("No image found for:", colorKey);
      }
    });
  });
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener("click", () => {
      const colorKey = button.getAttribute("data-color");
      const newSrc = colorMap[colorKey];

      if (newSrc) {
        productImage.src = newSrc;
        lens.style.backgroundImage = `url('${newSrc}')`;
      } else {
        console.error("No image mapped for", colorKey);
      }
    });
  });