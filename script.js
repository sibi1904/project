document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    const themeIcon = this.querySelector("i");

    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
    const themeIcon = document.getElementById("theme-toggle").querySelector("i");

    if (savedTheme === "dark") {
        themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    } else {
        themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    }
});
