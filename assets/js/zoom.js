  const image = document.getElementById("productImage");
  const container = image.parentElement;

  const lens = document.createElement("div");
  lens.classList.add("lens");
  container.appendChild(lens);

  container.addEventListener("mousemove", moveLens);
  container.addEventListener("mouseenter", () => lens.style.display = "block");
  container.addEventListener("mouseleave", () => lens.style.display = "none");

  function moveLens(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensSize = lens.offsetWidth / 2;
    const left = x - lensSize;
    const top = y - lensSize;

    lens.style.left = `${left}px`;
    lens.style.top = `${top}px`;

    const scale = 2;
    const bgX = -(x * scale - lens.offsetWidth / 2);
    const bgY = -(y * scale - lens.offsetHeight / 2);

    lens.style.backgroundImage = `url('${image.src}')`;
    lens.style.backgroundSize = `${image.width * scale}px ${image.height * scale}px`;
    lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
  }

  
  
  

 