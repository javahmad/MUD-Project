//Visited Variables
visitedroom = true;

//Item Variables
sword = false;

//Current Location
currentroom = "n_corridor";

$(document).ready(function()
{
    $("#adventure-log").fadeIn(2000);
    
    $("form").submit(function(){
        var input = $("#command_line").val();
        
        if(input == "help")
        {
            $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);       
        }
        if(input == "take sword" && currentroom == "n_corridor")
        {
            $("<p>You picked up a sword.</p>").insertBefore("#placeholder").fadeIn(1000);
        } 
        else if(input == "take sword" && currentroom != "n_corridor")
        {
            $("<p>The sword is not here</p>").insertBefore("#placeholder").fadeIn(1000);
        }
        else
        {    
            $("<p>I do not understand " + input + "</p>").insertBefore("#placeholder").fadeIn(1000);
        }
        $("#command_line").val("");
        
        return false;
    });
 
});