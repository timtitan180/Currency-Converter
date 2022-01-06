
//Add React
// ReactDOM.render({
//   <App/>,document.getElementById("root")
// });

var url = "https://api.exchangerate-api.com/v4/latest/";


// var secondCurrency = document.querySelectorAll("input")[1];

// var xml = new XMLHttpRequest();

// xml.open('GET',"https://api.exchangerate-api.com/v4/latest/USD",true);

// xml.onload = function(response) {
//    dataInJson = JSON.parse(xml.response);
//     secondCurrency.value = dataInJson["USD"] * 80;
// }

// xml.send();

//Add select with options instead of an unordered list
//document.querySelector(.selectElement option:selected)



// selection.addEventListener("click",function(){
//   options.addEventListener("click",function(e){
//       console.log(e.target.value);
//   });
// });


var secondList = document.getElementById("second-list");


var firstList = document.getElementById("first-list");


var firstInput = document.querySelectorAll("input")[0];

var secondInput = document.querySelectorAll("input")[1];


function switchValues() {
    console.log("Switch button clicked!");
    var temp;
    var convertFromInput = document.querySelectorAll("input")[0];
    var convertToInput = document.querySelectorAll("input")[1];
    temp = convertFromInput.value;
    convertFromInput.value = convertToInput.value;
    setTimeout(()=>{
    convertToInput.value = temp;
    },500);
}

function getCurrency(event) {
  var selectedCurrency = event.target.id;
  var CurrencyLabelButton = document.getElementById("currencyLabel");
  CurrencyLabelButton.innerHTML = selectedCurrency;
  return selectedCurrency;
}

function getSecondCurrency(event) {
  document.getElementById("secondCurrencyLabel").innerHTML = event.target.id;
  return event.target.id;
}


 var request = new XMLHttpRequest();

 var baseCurrency = getCurrency();
 request.open('GET',url + baseCurrency,true);

 var firstList = document.getElementById("first-list");

 firstList.addEventListener("click",function(e){
   if(e.target && e.target.nodeName == "LI") {
    request.onload = function() {
      var data = JSON.parse(request.response);
      console.log("Response:" + "" +  data);
      function getConvertedFrom() {
        var convertFrom = data.rates[baseCurrency] * firstInput.value;   
    }
  }
   }
   request.send();
 })

  

  secondList.addEventListener("click",function(e){
    if(e.target && e.target.nodeName == "LI") {
    var result = data.rates[""  + e.target.id + ""] * getConvertedFrom;
      secondInput = result;
    }  
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