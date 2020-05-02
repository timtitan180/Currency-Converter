var url = "https://api.exchangerate-api.com/v4/latest";

var input = document.querySelectorAll("input")[0];

var first = document.getElementById("first-list").children;

var second = document.getElementById("second-list").children;

for(var i=0; i<first.length; i++) {
  first[i].addEventListener("click",function() {
  var base = event.target.textContent;
  var request = new XMLHttpRequest();
  request.open('GET',url + '/' + base,true);
  request.send();
  request.onload = function() {
  var data = JSON.parse(request.response);
  var Convertingfrom = data.rates['' + base + ''] * input.value;
for(var j=0;j<second.length; j++) {
    second[j].addEventListener("click",function() {
    target = event.target.textContent;
    result = Convertingfrom * data.rates['' + target + ''];
    });
}
  };
});
}
function getResult() {
var show = document.querySelectorAll("input")[1].value = result;
};

document.getElementbyId("button1").addEventListener("click",getResult);
 
 
