const lightComic = document.querySelector(".comic-wrapper-light");
const darkComic = document.querySelector(".comic-wrapper-dark");
const pageTitle = document.querySelector(".page-title");
console.log(pageTitle);

function changeTheme() {
  //Dark theme to Light theme//
  if (themeButton.textContent === "Light") {
    document.body.style.backgroundColor = "#fff";
    themeButton.style.backgroundColor = "#000";
    themeButton.style.color = "#fff";
    themeButton.textContent = "Dark";
    darkComic.style.display = "none";
    lightComic.style.display = "flex";
    pageTitle.style.color = "#000";

    //Light to dark theme//
  } else {
    document.body.style.backgroundColor = "#000";
    themeButton.textContent = "Light";
    themeButton.style.backgroundColor = "#fff";
    themeButton.style.color = "#000";
    lightComic.style.display = "none";
    darkComic.style.display = "flex";
    pageTitle.style.color = "#fff";
  }
}

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", changeTheme);
