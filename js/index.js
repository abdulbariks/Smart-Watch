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

function selectWristSize(s) {
  const sizes = ["S", "M", "L", "XL"];
  for (const size of sizes) {
    const button = document.getElementById("size-" + size);
    const element = size;
    if (s === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    const quantityEelemnt = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityEelemnt.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityEelemnt.innerText = newQuantity;
  });
}
