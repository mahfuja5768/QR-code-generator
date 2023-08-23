const boxContainer = document.querySelector(".box_container"),
  qrInput = document.querySelector(".form input"),
  qrCodeImg = document.querySelector(".qr_code img"),
  generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = 'Generate QR code...'
  qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrCodeImg.addEventListener('load', ()=>{
      boxContainer.classList.add("active");
      generateBtn.innerText = 'Generate QR code';
      qrInput.value= '';
  })
});

qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        boxContainer.classList.remove("active");
    }
})