document.addEventListener("DOMContentLoaded", () => {
  const productImage = document.getElementById("productImage");
  const lens = document.getElementById("lens");

  const colorMap = {
    PUWhite_4: "assets/img/products/OJO/PUWhite_4.png",
    PUGrey_4: "assets/img/products/OJO/PUGrey_4.png",

    PUWhite_10: "assets/img/products/OJO/PUWhite_10.png",
    PUGrey_10: "assets/img/products/OJO/PUGrey_10.png",

    MultiBlack: "assets/img/products/OJO/MultiBlack.png",
    MultiTrans: "assets/img/products/OJO/MultiTrans.png",
    MultiWhite: "assets/img/products/OJO/MultiWhite.png",

    Vinyl_1: "assets/img/products/OJO/VinylTile_1.5.png",
    Vinyl_2: "assets/img/products/OJO/VinylTile_3.png",
    
    WallPutty_1: "assets/img/products/OJO/WallPutty_1.5.png",
    WallPutty_2: "assets/img/products/OJO/WallPutty_3.png",

    LeaksWhite: "assets/img/products/OJO/LeaksWhite.png",
    LeaksClear: "assets/img/products/OJO/LeaksClear.png",
    LeaksGrey: "assets/img/products/OJO/LeaksGrey.png",

    Adhesive15: "assets/img/products/Pattex/Adhesive15.png",
    Adhesive40: "assets/img/products/Pattex/Adhesive40.png",

    Tangit40:"assets/img/products/Tangit/Adhesive40g.png",
    Tangit400:"assets/img/products/Tangit/Adhesive400g.png",

    acryWhite:"assets/img/products/Pattex/acryWhite.png",
    acryBrown:"assets/img/products/Pattex/acryBrown.png",
    acryBlack:"assets/img/products/Pattex/acryBlack.png",
    acryGrey:"assets/img/products/Pattex/acryGrey.png",

    multiSealClear:"assets/img/products/Pattex/multiClear.png",
    multiSealWhite:"assets/img/products/Pattex/multiWhite.png"



  };

  // Color swatches
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

      // Highlight active swatch
      document.querySelectorAll(".color-swatch").forEach(btn => btn.classList.remove("active"));
      swatch.classList.add("active");
    });
  });

  // Size buttons (color-btn class)
  document.querySelectorAll(".color-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const sizeKey = btn.getAttribute("data-color");
      const newSrc = colorMap[sizeKey];
      if (newSrc) {
        productImage.src = newSrc;
        lens.style.backgroundImage = `url('${newSrc}')`;
      } else {
        console.error("No image found for:", sizeKey);
      }

      // Highlight active size
      document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

});
