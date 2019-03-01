function updateTextbox() {
    let bor = document.getElementById("bor").value;
    let bog = document.getElementById("bog").value;
    let bob = document.getElementById("bob").value;
    let bow = document.getElementById("bow").value;
    let bgr = document.getElementById("bgr").value;
    let bgg = document.getElementById("bgg").value;
    let bgb = document.getElementById("bgb").value;

    let textbox = document.getElementById("textbox");
    textbox.style.borderColor = `rgb(${bor}, ${bog}, ${bob})`;
    textbox.style.borderWidth = bow + "px";
    textbox.style.backgroundColor = `rgb(${bgr}, ${bgg}, ${bgb})`;
}
