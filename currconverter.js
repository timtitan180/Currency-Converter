alert("This is from outside the public directory");

var url = "https://api.exchangerate-api.com/v4/latest/";

var input = document.querySelectorAll("input")[0];

var secondList = document.getElementById("second-list");


var firstList = document.getElementById("first-list");


var switchValuesButton = document.querySelector(".image");

var firstInput = document.querySelectorAll("input")[0].value;

var secondInput = document.querySelectorAll("input")[1].value;


function switchValues(firstInput,secondInput) {
  console.log("Function called!");
  if(firstInput != null || secondInput != null) {
    temp.value = "";
    temp.value = firstInput;
    firstInput = secondInput;
    secondInput = temp;
  }
  return document.querySelectorAll("input")[0].value = firstInput,document.querySelectorAll("input")[1].value = secondInput;
}


switchValuesButton.addEventListener("click",switchValues);

 var request = new XMLHttpRequest();
   
 var request = new XMLHttpRequest();
 firstList = document.getElementById("first-list");
 firstList.addEventListener("click",function(e){
     if(e.target && e.target.nodeName == "LI") {
         document.getElementById("currency-label").innerHTML = e.target.id;
     }
     request.open('GET',url + e.target.id,true);
     request.send();
     request.onload = function() {
         var data = JSON.parse(request.response);
         var convertFrom = data.rates[e.target.id] * input;
         console.log(convertFrom);
         secondList.addEventListener("click",function(e){
            document.getElementById("after-second-input").innerHTML = e.target.id;
             var result = data.rates[this.id] * convertFrom;
             return result
 
     });
     }
   
 });

  
  function getResult() {
     document.querySelectorAll("input")[1].value = result;
  
   }

 document.getElementById("button1").addEventListener("click",getResult);





  

  
  function getResult() {
     document.querySelectorAll("input")[1].value = result;
  
   }

 document.getElementById("button1").addEventListener("click",getResult);


// var url = "https://api.exchangerate-api.com/v4/latest";

// var input = document.querySelectorAll("input")[0];//Value to be converted FROM

// var first = document.getElementById("first-list").children;

// var second = document.getElementById("second-list").children;



// for(var i=0; i<first.length; i++) {
//   first[i].addEventListener("click",function() {
//   var base = event.target.textContent;
//   var request = new XMLHttpRequest();
//   request.open('GET',url + '/' + base,true);
//   request.send();
//   request.onload = function() {
//   var data = JSON.parse(request.response);
//   var Convertingfrom = data.rates['' + base + ''] * input.value;
//   document.getElementById("currency-label").textContent = base;
// for(var j=0;j<second.length; j++) {
//     second[j].addEventListener("click",function() {
//     target = event.target.textContent;
//     result = Convertingfrom * data.rates['' + target + ''];
//     document.getElementById("after-second-input").textContent = target;
//     });
// }
//   };
// });
// }
// function getResult() {
// var show = document.querySelectorAll("input")[1].value = result;
// return show;
// };

// document.getElementById("button1").addEventListener("click",getResult);
