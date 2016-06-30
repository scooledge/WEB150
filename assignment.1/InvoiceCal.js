
            //ask the user for their name
            var user = prompt("Please enter your invoice amount? :", "0.00");
            
            //create a date object
            //create new instance of this object
            var amount = parseInt(user);
            

           var tax = amount*1.1;
          
            
            tax = tax.toFixed(2);

           //var final = Math.round(tax * 100.00) / 100.00;
        
              
            
            //get hold of the html element
            //where willl display welcome message
            //get element by id and use innerHTML to display
            
            

            //document object and getElementById is the method
            document.getElementById("output").innerHTML = "The amount you have entered, $"
            + user +  "<br> After taxes, your current invoice: " + "$" + tax ;