alert("!يمكن ان يكون الموقع غير داعم للهواتف بشكل كامل \n لذا في حال وجود مشكلة يرجى ابلاغنا")

console.log("welcome to the console devlloper\nfor now there is nothing to see her :)");

function togglemode(){

    document.body.classList.toggle("light-mode");

    let x = document.getElementById("switsh_mode");

    

    if (document.body.classList.contains("light-mode")){
        x.innerHTML= '<i class="fa-solid fa-moon"></i>';
        x.style.backgroundColor = "white";
        x.style.color = "black";
    } else {
        x.innerHTML= '<i class="fa-solid fa-sun"></i>';
        x.style.backgroundColor = " rgb(0 ,0 ,0)" ;
        x.style.color = "white";
    }
}

