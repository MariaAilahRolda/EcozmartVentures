document.addEventListener("DOMContentLoaded", () => {
  const selectedColor = document.getElementById("selectedColor");

  const colorNames = {
    Grout1644: "Bright White",
    Grout1617: "Marble Beige",
    Grout1635: "Mocha",
    Grout1622: "Midnight Black",
    Grout1639: "Mushroom",
    Grout1688: "Smoke Grey",
    Grout1660: "Dusty Grey",
    Grout1678: "Sterling Silver"
  };

document.querySelectorAll(".color-swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    const colorKey = swatch.getAttribute("data-color");

    // Update the displayed name
    selectedColor.textContent = colorNames[colorKey] || colorKey;

    // Remove active class from all
    document.querySelectorAll(".color-swatch").forEach(btn => btn.classList.remove("active"));

    // Add active to the clicked one
    swatch.classList.add("active");
  });
});
});
