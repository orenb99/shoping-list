const list=document.getElementsByTagName("ul")[0];
const input=document.getElementsByTagName("input")[0];
const button=document.getElementsByTagName("button")[0];
button.setAttribute("onclick","store()");

function store(){
    let x=input.value;
    input.value="";
}
