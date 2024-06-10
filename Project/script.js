var name = document.getElementById("name").value;
var span = document.getElementById("nameerror")
function btn1(){
if(name==''){
    span.innerHTML=+"<p>Enter Name</p>";
}else{
    span.innerHTML=+"<p></p>";
}
}