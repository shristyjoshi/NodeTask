var http=require('http')
 
var calculator=require('./calculator')
 var a=10,b=20;



http.createServer(function(req,res) 

{
    res.write("Hellllllllllllllooooooo World............\n");

     res.write("Addition:   " +calculator.add(a,b) );
     res.write("\n Subtraction:   "+calculator.sub(a,b));
     res.write("\n Multiplication: "+calculator.mul(a,b));
     res.end();
}).listen(5000); 
