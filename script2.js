var count = 0;
var count2 = 0;
var count3 = 0;
var countElement = document.querySelector(".count");
var count2Element = document.querySelector(".count2");
var count3Element = document.querySelector(".count3");

function addLike() {
    count++;
    countElement.innerText = count + " like(s)";
}
function addLike2() {
    count2++;
    count2Element.innerText = count2 + " like(s)";
}
function addLike3() {
    count3++;
    count3Element.innerText = count3 + " like(s)";
}