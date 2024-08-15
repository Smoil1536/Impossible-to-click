// This is called here to ensure that if the user reloads the page and the checkbox is still checked, the site remains in dark mode :)
manageTheme();

function manageTheme() {
    if (document.getElementById("switch").checked)
        document.body.classList.add("dark-theme");
    else
         document.body.classList.remove("dark-theme");
}

function clicked() {
    alert("Either you are on mobile or you did some js magik in console. HMMMMMMMMMM...");
}

function changeButtonPos(){
    const button = document.getElementById("impossible-to-click");
    const x = Math.floor((Math.random() * 90)) + "%";
    const y = Math.floor((Math.random() * 90)) + "%";

    button.style.left = x;
    button.style.top = y;
}
