// generate button event handler
document.querySelector("#generate-pin").addEventListener("click", () => {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);
    document.querySelector("#pin-output").value = generateRandomNumber;
    document.querySelector("#error-message").style.display = "none";
    document.querySelector("#matched-message").style.display = "none";
    document.querySelector(".action-left").style.display = "block";
});

// submit button event handler
document.querySelector(".submit-btn").addEventListener("click", () => {
    const generatedPin = document.querySelector("#pin-output").value;
    const inputNumber = document.querySelector("#numberOutput").value;
    
    if (generatedPin == "") {
        alert("Generate pin is empty!");
    } else if(inputNumber == "") {
        alert("Insert your pin is empty!");
    } else if (generatedPin === inputNumber && generatedPin !== 0) {
        document.querySelector("#matched-message").style.display = "block";
        document.querySelector("#pin-output").value = "";
        document.querySelector("#numberOutput").value = "";
        document.querySelector(".action-left").style.display = "none";
        document.querySelector("#error-message").style.display = "none";
    } else {
        document.querySelector("#error-message").style.display = "block";
        document.querySelector("#numberOutput").value = "";

        const chanceCount = document.querySelector("#chance-count").innerHTML;
        const chanceNumber = parseInt(chanceCount) - 1;

        document.querySelector("#chance-count").innerHTML = chanceNumber;

        if (chanceNumber === 0) {
            document.querySelector(".submit-btn").disabled = true;
            document.querySelector(".submit-btn").innerText = "Blocked for 24 hours";
        }
    }
});