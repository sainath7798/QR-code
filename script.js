const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const GenerateBtn = document.getElementById('GenerateBtn');
const DownloadBtn = document.getElementById('DownloadBtn');

const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;
GenerateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    GenerateQRcode();
});

function GenerateQRcode(){
    new QRcode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}