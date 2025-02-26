const ringButtons = document.querySelectorAll(".ring-button");

for (const ringButton of ringButtons) {
  const ringBtn = ringButton;

  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");

    for (const ringButton of ringButtons) {
      ringButton.classList.remove("border-purple-600");
      ringButton.classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = "../images/" + color + ".png";
  });
}
