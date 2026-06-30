const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wifiPassword = document.getElementById("wifiPassword");
const copyBtn = document.getElementById("copyBtn");
/*
function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);
*/
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



