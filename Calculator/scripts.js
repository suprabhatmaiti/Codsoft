let string = "";
let buttons = document.querySelectorAll("button");
let el = document.getElementById("inp");
el.addEventListener("keydown", (e) => {
  console.log(e);
  const key = e.key;
  if (key == "Backspace" || key == "Delete") {
    string = document.querySelector("input").value;
  } else if (key == "=" || key == "Enter") {
    string = document.querySelector("input").value;
    string = eval(string);
    document.querySelector("input").value = string;
  }
});
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    string = document.querySelector("input").value;
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      document.querySelector("input").value = "";
      string = "";
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    document.querySelector("input").focus();
  });
});
