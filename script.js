// Auto format date (MM/YYYY)

const dateInput = document.getElementById("date");

dateInput.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    if (value.length > 6)
        value = value.substring(0, 6);

    if (value.length >= 3) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }

    this.value = value;

});



// Generate QR

function generateQR() {

    const serial = document.getElementById("serial").value.trim();

    const modelInput = document.getElementById("model").value.trim();

    const machine = document.getElementById("machine").value.trim();

    const date = document.getElementById("date").value.trim();



    if (serial === "") {
        alert("Please enter Serial Number.");
        return;
    }

    if (modelInput === "") {
        alert("Please enter Model Number.");
        return;
    }

    if (machine === "") {
        alert("Please select Machine Name.");
        return;
    }

    if (!/^\d{2}\/\d{4}$/.test(date)) {
        alert("Date must be in MM/YYYY format.");
        return;
    }



    const model = "FEBTECH-" + modelInput;



    const qrText =
`${serial}
${model}
${machine}
${date}`;



    const qrDiv = document.getElementById("qrcode");

    qrDiv.innerHTML = "";



    new QRCode(qrDiv, {

        text: qrText,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });

}



// Press Enter to Generate

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        generateQR();

    }

});
