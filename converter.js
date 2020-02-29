

var data = {"base":"USD","date":"2020-02-19","time_last_updated":1582070790,"rates":{"USD":1,"AED":3.672045,"ARS":61.582426,"AUD":1.494287,"BGN":1.807606,"BRL":4.339089,"BSD":1,"CAD":1.325317,"CHF":0.981866,
"CLP":792.641792,"CNY":6.99486,"COP":3443.26087,"CZK":22.965352,"DKK":6.900941,"DOP":53.546315,"EGP":15.632649,"EUR":0.924413,"FJD":2.198823,"GBP":0.768415,"GTQ":7.633989,"HKD":7.767964,
"HRK":6.879474,"HUF":309.637183,"IDR":13582.013039,"ILS":3.422218,"INR":71.466278,"ISK":127.185177,"JPY":109.82079,"KRW":1188.704154,"KZT":377.119048,"MXN":18.611835,"MYR":4.149314,"NOK":9.303747,
"NZD":1.561357,"PAB":1,"PEN":3.382701,"PHP":50.637118,"PKR":154.376218,"PLN":3.943266,"PYG":6599.583333,"RON":4.416545,"RUB":63.707652,"SAR":3.750364,"SEK":9.743534,"SGD":1.391303,
"THB":31.202601,"TRY":6.061821,"TWD":30.047471,"UAH":24.361812,"UYU":37.892344,"ZAR":15.030525}}


var input = document.queryselectorAll("input")[0];
var result = document.getElementbyId("result");
const button = document.getElementbyId("button1");
function checkAmount () {
if (input.value.length < 1 || input != isNaN) { //checking if the user entered an amount and if that value is an integer
      var error = document.getElementbyId("error-message").innerHTML;
      error.style.display = "inline-block";       //if either condition above is false this message will be displayed to let the user know
}
else {
    var FirstDivlist = document.QuerySelector(".base") //base dropdown item
    FirstDivlist[i].addEventListener("click",function() {
        for(var i = 0; i<FirstDivlist.length; i++) {
              this.value = data.base;//ite o0m that was clicked = the base value of the data object
        }
    }
    var SecondDivList = document.QuerySelector(".currency");//desired target currency dropdown
    SecondDivList[j].addEventListener("click",function() {
      for(var j = 0; j<SecondDivList.lenght; i++) {
            this = data.rates;//item that was clicked equals the rate value
            var conversion = input * Math.round(this);//calculating the base Amount * the rate thats rounded to a decimal place? still not sure about this one
    }
          result.style.display.innerHTML = '${conversion}';
          result.style.display = "inline-block";
      });
};

    button.addEventListener("click",checkAmount);
