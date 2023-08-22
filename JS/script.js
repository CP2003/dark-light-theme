// ██████╗      █████╗     ███╗   ███╗     ██████╗     ██████╗ 
// ██╔══██╗    ██╔══██╗    ████╗ ████║    ██╔═══██╗    ██╔══██╗
// ██████╔╝    ███████║    ██╔████╔██║    ██║   ██║    ██║  ██║
// ██╔═══╝     ██╔══██║    ██║╚██╔╝██║    ██║   ██║    ██║  ██║
// ██║         ██║  ██║    ██║ ╚═╝ ██║    ╚██████╔╝    ██████╔╝
// ╚═╝         ╚═╝  ╚═╝    ╚═╝     ╚═╝     ╚═════╝     ╚═════╝ 

// Youtube : https://www.youtube.com/@pamod_madubashana 


const root = document.documentElement;
root.setAttribute("theme", "light");

const themeBtn = document.querySelector(".theme-btn");
const dot = document.querySelector(".dot");
const bg = document.querySelector(".bg");

themeBtn.addEventListener("click" , changeTheme);

function changeTheme() {
    const currentTheme = root.getAttribute("theme");

    if(currentTheme=== "dark"){
        root.setAttribute("theme", "light");
        dot.style.left = "0px"
        bg.style.width = "0px"
    }
    if(currentTheme=== "light"){
        root.setAttribute("theme", "dark");
        dot.style.left = "20px"
        bg.style.width = "40px"
    }
}
