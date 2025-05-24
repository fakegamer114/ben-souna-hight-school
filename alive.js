console.log("welcome to the console");
function togglemode(){

    document.body.classList.toggle("light-mode");

    let x = document.getElementById("switsh_mode");

    if (document.body.classList.contains("light-mode")){
        x.textContent= "DARKmode";
        x.style.backgroundColor = "white";
    } else {
        x.textContent= "LIGHTmode";
        x.style.backgroundColor = "rgb(130, 130, 130)" ;
    }
}
