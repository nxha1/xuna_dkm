const showHai = document.getElementById("xuna");
var formSearch = document.getElementById("hai");

showHai.addEventListener("click", function() {
    if(formSearch.style.display == 'none'){
        formSearch.style.display = "flex";
    }else{
        formSearch.style.display = "none";
    }
}); 

window.addEventListener('mousedown', function (event) {
    if(!formSearch.contains(event.target) && !showHai.contains(event.target)){
        formSearch.style.display = 'none';
    }
})