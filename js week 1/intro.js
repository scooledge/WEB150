
            //ask the user for their name
            var user = prompt("Please enter your name? :", "enter your name").toUpperCase();
            
            //create a date object
            //create new instance of this object
            var date = new Date();
            
            //get hold of the html element
            //where willl display welcome message
            //get element by id and use innerHTML to display
            
            //document object and getElementById is the method
            document.getElementById("output").innerHTML = "Welcome, "
            + user + "!" + "<br> The current date is: " + date;