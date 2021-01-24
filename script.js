const ulist=document.getElementsByTagName("ul")[0];
const input=document.getElementsByTagName("input")[0];
const storeButton=document.getElementsByTagName("button")[0];
storeButton.setAttribute("onclick","store()");

function store(){
    let x=input.value;
    input.value="";
    const list=document.createElement("li");
    const span=document.createElement("span");
    const deleteButton=document.createElement("button");
    list.appendChild(span);
    list.appendChild(deleteButton);
    span.innerText=x;
    deleteButton.innerText="Delete";
    ulist.appendChild(list);
    deleteButton.onclick=function() {list.remove();
    }
    input.focus();
}


