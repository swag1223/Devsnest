function makepixel() {
    var pixel = document.createElement("div");
    // element.classList.add("newClass");
    pixel.classList.add("red");
    return pixel;
}

var container = document.querySelector(".container");
for (let i = 0; i < 400; i++){
    container.appendChild(makepixel());
}

container.addEventListener('click', doTask);
function doTask(e) {
    console.log(e);
    var pixelClass = e.target.className;
    console.log(pixelClass);
    if (pixelClass == "red") {
        // element.classList.remove("mystyle");
        e.target.classList.remove("red");
        e.target.classList.add("white");
        console.log(e.target);

    }
    else {
        e.target.classList.remove("white");
        e.target.classList.add("red");
    }
}

