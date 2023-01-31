var button = document.getElementById("btn");
var activeTheme = "light";

function change_theme() {
  if (activeTheme == "dark") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#262a2f";
    button.value = "Dark Mode";
    activeTheme = "light";
  } else {
    document.body.style.backgroundColor = "#262a2f";
    document.body.style.color = "#ffffff";
    button.value = "Light Mode";
    activeTheme = "dark";
  }
}
