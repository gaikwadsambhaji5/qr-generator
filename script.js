function generateQR(){

    const serial=document.getElementById("serial").value.trim();
    const model=document.getElementById("model").value.trim();
    const date=document.getElementById("date").value.trim();

    if(serial==="" || model==="" || date===""){
        alert("Please fill all fields.");
        return;
    }

    const data =
`${serial}
${model}
${date}`;

    document.getElementById("qrcode").innerHTML="";

    new QRCode(document.getElementById("qrcode"),{
        text:data,
        width:250,
        height:250
    });

}
