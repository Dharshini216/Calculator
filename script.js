function button(button){
    document.getElementById("p").innerHTML+=button.innerHTML;
}
function equal(){
    const exp=eval(document.getElementById("p").innerHTML);
    document.getElementById("p").innerHTML=exp;
}
function backspace(){
    const val=document.getElementById("p").innerHTML;
    const new_val=val.slice(0,-1);
    document.getElementById("p").innerHTML=new_val;
}