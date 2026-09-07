let cartItems = 0;

document.addEventListener("DOMContentLoaded", () => {

  const cartButtons = document.querySelectorAll("button");

  cartButtons.forEach(button => {

    if (button.textContent.includes("Add")) {

      button.addEventListener("click", () => {
        cartItems++;
        alert("Added to cart! Total items: " + cartItems);
      });

    }

  });

  const bidButton = document.querySelector(".auction-bid");

  if (bidButton) {

    bidButton.addEventListener("click", () => {

      const bidValue =
        document.querySelector("#currentBid");

      let amount =
        parseInt(bidValue.innerText.replace("$", ""));

      amount += 2;

      bidValue.innerText = "$" + amount;

    });

  }

});
