function btnchanger(){
    const r = Math.floor(Math.random() * 256);
    const g =  Math.floor(Math.random() * 256);
    const b =  Math.floor(Math.random() * 256);

    new_color = "rgb(" + r + "," + g + "," + b +")";
    console.log(new_color);

    const changer_body= document.querySelector('body');
    const body = changer_body.style.background = new_color;


}



