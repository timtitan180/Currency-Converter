

var url = "https://api.exchangerate-api.com/v4/latest/";

var secondList = document.getElementById("second-list");


var firstInput = document.querySelectorAll("input")[0];

var secondInput = document.querySelectorAll("input")[1];

var resultText = document.getElementById("conversionResult");

var switchButton = document.querySelector(".image");

var switchBubble = document.querySelector(".switchBubble");

function switchValues() {
    console.log()
    var temp;
    var convertFromInput = document.querySelectorAll("input")[0];
    var convertToInput = document.querySelectorAll("input")[1];
    temp = convertFromInput.value;
    convertFromInput.value = convertToInput.value;
    setTimeout(()=>{
    convertToInput.value = temp;
    },500);
}

switchButton.addEventListener("mouseover",function(){
    switchBubble.style.visibility = "visible";
});

switchButton.addEventListener("mouseout",function(){
  switchBubble.style.visibility = "hidden";
});

var button = document.getElementById("button1");

 var request = new XMLHttpRequest();

 var firstList = document.getElementById("first-list");

 firstList.addEventListener("click",function(e) {
   var baseCurrency = e.target.id;
   document.getElementById("currencyLabel").innerHTML = baseCurrency;
   request.open('GET',url + baseCurrency,true);
    request.onload = function() {
      var data = JSON.parse(request.response);
        var convertFrom = data.rates[baseCurrency] * firstInput.value;
        secondList.addEventListener("click",function(e) {
          console.log("Event Listener function!");
          var secondCurrency = e.target.id;
          document.getElementById("secondCurrencyLabel").innerHTML = secondCurrency;
          var result = convertFrom * data.rates[secondCurrency];
          button.addEventListener("click",function(){
            secondInput.value = Math.ceil(result * 1000) / 1000;
            resultText.innerHTML += `${firstInput.value} ${baseCurrency} = ${secondInput.value} ${secondCurrency}`;
            if(resultText.innerHTML != "") {
              resultText.innerHTML =  `${firstInput.value} ${baseCurrency} = ${secondInput.value} ${secondCurrency}`;
            }
          });
      });  
  }
   request.send();
 });















































  
