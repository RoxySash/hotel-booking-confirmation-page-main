const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");



function openNav() {

    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);
