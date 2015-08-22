//retrieve data from an API and display it
//preferred: some user interaction
var apikey = '2ff8830336954712959c5a233d786b0e'; // key for Open Exchange Rates


$(document).ready(function() {
$('#convert').on('click', function(e){//when the user clicks the convert button this function will start
    $.ajax({
        type: 'GET',
        url: 'https://openexchangerates.org/api/latest.json?app_id='+apikey,
        dataType: 'jsonp',
        complete: function() {//this will run after the AJAX call is made
            console.log('ajax complete');
        },
        success: function(json) {//this will run after the AJAX call is successfully completed
            console.log("success");
            convertDollars(json);
        },
        error: function(errorType, errorMessage) {//this will run if there is an error
            alert(errorType + " " + errorMessage)
        }
    });
})
});
// This function takes the rates object returned and calculates currency conversions
// It is called after 'search' is successfully executed.

function convertDollars(data) {
    var rates=(data.rates);//select the rates object from the returned results
    console.log(rates);
    console.log(rates.AUD);
    var dollars = parseFloat($('#dollars').val());//convert dollar string to a number
    console.log(dollars);
        $('#AUD').text(Math.round(rates.AUD*dollars*100)/100);//calculate conversion, round to 2 decimals for each currency of interest
        $('#CAD').text(Math.round(rates.CAD*dollars*100)/100);
        $('#CHF').text(Math.round(rates.CHF*dollars*100)/100);
        $('#CNY').text(Math.round(rates.CNY*dollars*100)/100);
        $('#DKK').text(Math.round(rates.DKK*dollars*100)/100);
        $('#EUR').text(Math.round(rates.EUR*dollars*100)/100);
        $('#GBP').text(Math.round(rates.GBP*dollars*100)/100);
        $('#HKD').text(Math.round(rates.HKD*dollars*100)/100);
        $('#JPY').text(Math.round(rates.JPY*dollars*100)/100);
        $('#INR').text(Math.round(rates.INR*dollars*100)/100);
        $('#SEK').text(Math.round(rates.SEK*dollars*100)/100);
        $('#SAR').text(Math.round(rates.SAR*dollars*100)/100);
    };
  