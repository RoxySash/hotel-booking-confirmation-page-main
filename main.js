const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wifiPassword = document.getElementById("wifiPassword");
const copyBtn = document.getElementById("copyBtn");
const mySideNav = document.querySelector(".sidebar");

const receiptBtn = document.getElementById("receiptBtn");
const receiptCard = document.getElementById("receiptCard");

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

receiptBtn.addEventListener("click", () => {
    const printContents = receiptCard.innerHTML;
    const orignalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = orignalContents;
})
