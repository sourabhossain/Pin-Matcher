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

    if (generatedPin === inputNumber && generatedPin !== 0) {
        document.querySelector("#matched-message").style.display = "block";
        document.querySelector("#pin-output").value = "";
        document.querySelector("#numberOutput").value = "";
        document.querySelector(".action-left").style.display = "none";
        document.querySelector("#error-message").style.display = "none";
    } else {
        document.querySelector("#error-message").style.display = "block";
        document.querySelector("#numberOutput").value = "";
    }
});