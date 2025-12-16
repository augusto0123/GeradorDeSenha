const range = document.querySelector("#tamanho");
const value = document.querySelector("#valor-range");

value.innerText = range.value;

range.addEventListener("input", () => {
  value.innerText = range.value;
});
