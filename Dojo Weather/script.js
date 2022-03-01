console.log("Hello");
var cookieBox = document.querySelector('#cookies');
var conversion = document.querySelector('#c-f');
var highTemp = document.getElementsByClassName('high');
var lowTemp = document.getElementsByClassName('low');
// var numHigh = parseInt(highTemp.innerHTML);
// var numLow = parseInt(lowTemp.innerText);

console.log(highTemp);

function loading(element) {
    element.alert;
}

function removeBox() {
    cookieBox.remove();
}

function cF() {
    console.log(conversion.value == "°F");
    for(var i = 0; i < highTemp.length; i++) {
        if(conversion.value == "°F") { 
        var numHigh = parseInt(highTemp[i].innerHTML);
        var numLow = parseInt(lowTemp[i].innerHTML);
        numHigh = numHigh * 1.8 + 32;
        numLow = numLow * 1.8 + 32;
        highTemp[i].innerText = Math.round(numHigh);
        lowTemp[i].innerText = Math.round(numLow);
    }
        else if(conversion.value == "°C") {
            var numHigh = parseInt(highTemp[i].innerHTML);
            var numLow = parseInt(lowTemp[i].innerHTML);
            numHigh = (numHigh - 32) * 5 / 9;
            numLow = (numLow - 32) * 5 / 9;
            highTemp[i].innerText = Math.round(numHigh);
            lowTemp[i].innerText = Math.round(numLow);
        }
}
}