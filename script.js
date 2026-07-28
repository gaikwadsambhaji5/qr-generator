// =========================
// Load Saved Persons
// =========================

const personList = document.getElementById("persons");

let savedPersons = JSON.parse(localStorage.getItem("persons")) || [];

savedPersons.forEach(name => {

    const option = document.createElement("option");
    option.value = name;
    personList.appendChild(option);

});



// =========================
// Auto Date Format MM/YYYY
// =========================

const dateInput = document.getElementById("date");

dateInput.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    if (value.length > 6)
        value = value.substring(0,6);

    if (value.length >=3){

        value =
        value.substring(0,2)
        + "/"
        + value.substring(2);

    }

    this.value = value;

});



// =========================
// Generate QR
// =========================

function generateQR(){

    const machine =
    document.getElementById("machine").value.trim();

    const modelInput =
    document.getElementById("model").value.trim();

    const serial =
    document.getElementById("serial").value.trim();

    const date =
    document.getElementById("date").value.trim();

    const person =
    document.getElementById("person").value.trim();



    if(machine==""){

        alert("Select Machine Name");
        return;

    }

    if(modelInput==""){

        alert("Enter Model Number");
        return;

    }

    if(serial==""){

        alert("Enter Serial Number");
        return;

    }

    if(!/^\d{2}\/\d{4}$/.test(date)){

        alert("Date must be MM/YYYY");
        return;

    }

    if(person==""){

        alert("Enter Responsible Person");
        return;

    }



    // Save New Person

    if(!savedPersons.includes(person) &&
        person!="Mr. Amrut Deshmukh" &&
        person!="Mr. Rajaram Mithe" &&
        person!="Mr. Umesh Kale"){

        savedPersons.push(person);

        localStorage.setItem(
            "persons",
            JSON.stringify(savedPersons)
        );

        const option=document.createElement("option");

        option.value=person;

        personList.appendChild(option);

    }



    const model="FEBTECH-"+modelInput;



    const qrText=
`${machine}
${model}
${serial}
${date}
${person}`;



    const qr=document.getElementById("qrcode");

    qr.innerHTML="";



    new QRCode(qr,{

        text:qrText,

        width:250,

        height:250,

        colorDark:"#000000",

        colorLight:"#ffffff",

        correctLevel:QRCode.CorrectLevel.H

    });

}



// =========================
// ENTER KEY
// =========================

document.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        generateQR();

    }

});
