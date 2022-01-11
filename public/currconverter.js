

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





























// alert("This is the file");

// var url = "https://api.exchangerate-api.com/v4/latest/";

// var input = document.querySelectorAll("input")[0];

// var second = document.getElementById("second-list");


// var first = document.getElementById("first-list");


// var switchValuesButton = document.querySelector(".image");

// var firstInput = document.querySelectorAll("input")[0].value;

// var secondInput = document.querySelectorAll("input")[1].value;

// function switchValues(a,b) {
//   if(firstInput != null || secondInput != null) {
//     firstInput = 0;
//   }
// }


// switchValuesButton.addEventListener("click",switchValues);

//  var request = new XMLHttpRequest();
 
       
//      first.addEventListener("click",function(e) { 
//       var request = new XMLHttpRequest();
//       document.getElementById("currency-label").innerHTML = e.target.id;
//       request.open('GET',url + e.target.id);
//       request.send();
//       request.onload = function() {
//         var data = JSON.parse(request.response);
//         second.addEventListener("click",function(e){
//           document.getElementById("after-second-input").textContent = e.target.id;                  
//           var secondRate = data.rates[e.target.id];
//         });
//         var result = firstInput * secondRate;
//         console.log(result);
//       }
//     });

//     function switchValues(firstInput,secondInput) {
//       console.log("Function called!");
//       if(firstInput != null || secondInput != null) {
//         firstInput === 0;
//       }
//     }
    
    
//     switchValuesButton.addEventListener("click",switchValues);

  
//  function getResult() {
//      show = document.querySelectorAll("input")[1].value = result;
//      return show;
//    }

//  document.getElementById("button1").addEventListener("click",getResult);




















// var url = "https://api.exchangerate-api.com/v4/latest";

// var input = document.querySelectorAll("input")[0];

// var second = document.getElementById("second-list").children;


// var first = document.getElementById("first-list").children;


// var switchValuesButton = document.querySelector(".image");

// var firstInput = document.querySelectorAll("input")[0].value;

// var secondInput = document.querySelectorAll("input")[1].value;


// function switchValues(a,b) {
//   firstInput = a;
//   secondInput = b;
//   return [a,b] = [b,a];
// }

// switchValuesButton.addEventListener("click",switchValues);

//  var show;

//  var set = {first:firstList,second:secondList};

//  function goThroughSet(e,list) {
//    if(e.target.id in set.list) {
//         element = this.id; 
//        }
//        return element;
//  }

//  function setItemClicked(event,element) {
//    event.preventDefault();
//    document.getElementById(element).textContent = event.target.id;
//  }

//  function getApi(currency,isAsync) {
//    var request = XMLHttpRequest();
//    request.open('GET',url + "/" + currency,isAsync);
//    request.send();
//  }

 
//      first.addEventListener("click",function(e) {
//       if(e.target.nodeName == "li") {
//       getApi(request,e.target.id,true);
//       document.getElementById("currency-label").textContent = e.target.id;
//       var product = input * data.rates['' + e.target.id  + ''];
//       request.send();
//       request.onload = function() {
//         var data = JSON.parse(request.response);
//            second.addEventListener("click",function(e){
//              if(e.target.nodeName == "li") {             
//              var result = product * data.rates[this.id];
//              console.log(result);
//              }
//            });
//       }
//      }
//    });

  
//  function getResult() {
//      show = document.querySelectorAll("input")[1].value = result;
//      return show;
//    }

//  document.getElementById("button1").addEventListener("click",getResult);