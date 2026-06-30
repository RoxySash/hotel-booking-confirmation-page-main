const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wifiPassword = document.getElementById("wifiPassword");
const copyBtn = document.getElementById("copyBtn");
const mySideNav = document.querySelector(".sidebar");
const mainArea = document.querySelector(".mainarea")

const wifiText = wifiPassword.innerHTML;

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(wifiText);
      alert("copied")
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

copyBtn.addEventListener("click", copyContent);

openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
    mySideNav.classList.toggle("active");
    closeBtn.classList.toggle("active");
    
    
})

closeBtn.addEventListener("click", () => {
    openBtn.classList.remove("active");
    mySideNav.classList.remove("active");
    closeBtn.classList.remove("active");

})