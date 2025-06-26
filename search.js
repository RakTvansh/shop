const searchbox = document.getElementById("searchbox");
const searchicon = document.getElementById("searchicon");
const searchinput = document.getElementById("searchinput");
searchicon.addEventListener("click", () => {
    searchbox.classList.add("active");
    searchinput.focus();
});
document.addEventListener("click", (e) => {
    if (!searchbox.contains(e.target)) {
        searchbox.classList.remove("active");
    }
});