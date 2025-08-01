let darkmode = localStorage.getItem("dark-mode");
const darkButton=document.getElementById("dark-light")

const DarkModeOn=()=>{
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode","active");
}

const DarkModeOff=()=>{
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode",null);
}
if(darkmode==="active"){
    DarkModeOn();
}

darkButton.addEventListener("click", ()=>{
    darkmode=localStorage.getItem("dark-mode");
    darkmode !== "active" ? DarkModeOn() : DarkModeOff();
})