
var http=require("http");
http.createServer(
    function serviceRequest (request, response)
    {
        var queryString=new String(request.url);
        var keyValuePairs = queryString.split("&");
        var action = keyValuePairs[0].replace("/","").split("=")[1]; // extracting the action specified in the URL
        var firstNumber = new String(keyValuePairs[1].split("&")).split("=")[1] || "0"; // extracting the first number
        var secondNumber = new String(keyValuePairs[2].split("&")).split("=")[1] || "0"; // extracting the second number
         // calling the method to get the result
  var result = getResult(action.toLowerCase(), Number(firstNumber) , Number(secondNumber));

  // HTML which we will display to the user
  var htmlContent = "<html><b>" + action + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</b></html>";

  // write the response
  response.end(htmlContent);
 }
).listen(5000);

// Utility method to perform an operation on 2 numbers. Helps to modularize code
function getResult(operation, number1, number2)
{
 var result = 0;

 if(operation == "add")
  result = number1 + number2;

 else if(operation == "subtract")
  result = number1 - number2;

 else if(operation == "multiply")
  result = number1 * number2;

 else if(operation == "divide" && number2 != 0)
  result = number1 / number2;

 return result;
}      

