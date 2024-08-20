var count = 0;
var indices = []
//console.log(localStorage)

//console.log(localStorage.getItem("indices"));
//console.log(localStorage.getItem("indices") !== null);
//console.log(localStorage.getItem("indices") == '');
if((localStorage.getItem("indices") !== null)&&(localStorage.getItem("indices") !== '')){
    indices = localStorage.getItem("indices").split(",");
    count = indices.length-1;
    //console.log(indices);
    for(let index of indices){
        //console.log("index: ", index);
       // console.log(localStorage.getItem(index))
        var node = document.createElement("div");
        node.id = index;
        text = localStorage.getItem(index)
        node.innerHTML = "<button onclick='remove(this)' class='delete'>x</button> "+ text;
        document.body.appendChild(node);
    }
}
//localStorage.clear();
function add_todo() {
    //alert(document.getElementById('entry').value);
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
    //console.log('in the delete block');
    //console.log(element.parentNode.id);
    localStorage.removeItem(element.parentNode.id);
    indices.splice(indices.indexOf(element.parentNode.id), 1);
    localStorage.setItem("indices", indices);
    document.getElementById(element.parentNode.id).remove();

}
function enter(){
    if(event.key === 'Enter'){
        add_todo()
    }
    
}