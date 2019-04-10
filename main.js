// get user input
var filter = document.querySelector("#filter")

// Then add event listener to listen user input
filter.addEventListener("keyup", filterNames)
// Then filter out the users input
function filterNames() {
    // Get the value of user input
    var value = filter.value;
    // get all names in list
    var names = document.querySelectorAll("li a");
    // Loop over names
    for (var i=0;i<names.length;i++) {
        if(names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
            names[i].parentElement.style.display = "block";
        } else {
            names[i].parentElement.style.display = "none";  
        }
    }
}



