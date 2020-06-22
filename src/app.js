let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function(event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count -= 1;
    }
    else if (styles.contains("increase")) {
      count += 1;
    }
    else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#98c379";
    }
    if (count < 0) {
      value.style.color = "#be5046";
    }
    if (count === 0) {
      value.style.color = "#282c34";
    }
    value.textContent = count;
  });
});
