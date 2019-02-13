var convert = function(gallon) {
    return gallon*3.78541;
    }
    
    var gallon = parseFloat(prompt("Enter number of gallons: "));
    var litres = (convert(gallon)).toFixed(2);
    
    alert(litres);