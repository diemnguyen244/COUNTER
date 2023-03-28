//set initial count
let count = 0;

//select value and btn
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// console.log(value, btns);
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      console.log(count);
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
      console.log(count);
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
