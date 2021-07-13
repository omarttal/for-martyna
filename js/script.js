const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
btn.addEventListener("click", function () {
  console.log("btn clicked");
  img.classList.remove("hidden");
});
