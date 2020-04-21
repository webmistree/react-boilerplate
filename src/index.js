function component(){
    const element = document.createElement("div");
    element.innerHTML = "Hello world";
    return element;
}

document.getElementById("app").appendChild(component());


    
