document.addEventListener(DOMContentLoaded",()=> {
    const decodedText=document.getElementById("decoded-text");
    const uploadInput=document.getElementById("upload");
    const qrReader=new Html5Qrcode("qr-reader");
    qrReader.start(
        { facingMode:"environment"
        },
        {fps:10,
            qrbox:250,

        },
        (decodedResult)=>{
            decodedText.textContent=decodedResult;
            qrReader.stop();
        },
        (errorMessage)=>{
            console.warn('Qr Scan error:Rs {errorMessage');
        }
    );
    uploadInput.addEventListener("change",(event)=>{
        const file=event.target.files[0];
        if(file){
            const reader=new FileReader();
            reader.onload=()=>{
                Html5QrcodeScanner.scanImage(reader.result,{qrbox:250},false).then(result)=>{
                    decodedText.textContent="Could not decode the QR code.";});
                };
                reader.readAsDataURL(file);
            }
        }
    });
});