let cel = document.getElementById("cel");

let feh = document.getElementById("feh");

cel.addEventListener("input",function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    feh.value = f;

});

feh.addEventListener("input", function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    cel.value = c;
})