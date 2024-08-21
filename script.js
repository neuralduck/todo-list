var count = 0;
var indices = []

if((localStorage.getItem("indices") !== null)&&(localStorage.getItem("indices") !== '')){
    indices = localStorage.getItem("indices").split(",");
    count = indices.length-1;
    for(let index of indices){
        var node = document.createElement("div");
        node.id = index;
        text = localStorage.getItem(index)
        node.innerHTML = "<button onclick='remove(this)' class='delete'>x</button> "+ text;
        document.body.appendChild(node);
    }
}

function add_todo() {
    const text = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (text !== "") {
        count += 1;
        var node = document.createElement("div");
        node.id = 'entry_'+count;
        node.innerHTML = "<button onclick='remove(this)' class='delete'>x</button> "+text;
        document.body.appendChild(node);
        localStorage.setItem(node.id, text);
        indices.push(node.id);
        localStorage.setItem("indices", indices);
    }
    
}

function remove(element){
    localStorage.removeItem(element.parentNode.id);
    indices.splice(indices.indexOf(element.parentNode.id), 1);
    localStorage.setItem("indices", indices);
    document.getElementById(element.parentNode.id).remove();

}
