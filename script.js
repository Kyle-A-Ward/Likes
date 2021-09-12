var count = 0;
var countElement = document.querySelector("#count");

function addLike() {
    count++;
    countElement.innerText = count + " like(s)";
}