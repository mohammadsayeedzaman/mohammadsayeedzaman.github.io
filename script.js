function activate() {
    const code = document.getElementById("code").value;
    const result = document.getElementById("result");

    if (code === "1234") {
        result.style.color = "green";
        result.innerText = "Activation Successful ✅";
    } else {
        result.style.color = "red";
        result.innerText = "Invalid Code ❌";
    }
}
