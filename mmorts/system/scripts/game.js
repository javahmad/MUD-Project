//Item Variables
sword = false;
armor = false;
wand = false;
necklace = false;
key = false;

//Current Location
currentroom = "middle";

//Map
$("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
$("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [x] [o] </p></div>');
$("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');
var map = ["[o]","[o]","[o]","[o]","[o]","[o]","[o]","[o]","[o]","[o]"];
current_coordinate = 4;

//Make Random Monster
MakeMonster();

$(document).ready(function()
{
    $("#adventure-log").fadeIn(1000);
    
    $("form").submit(function(){
        var input = $("#command_line").val();
        var check = false;
        
        //Check Command
        function check() 
        {
            check = true;
        }
        //Map Movement
        function moveMap(direction,room)
        {       
            if(direction == "north")
            {
                if(room == "top_middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [x] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');
                }
                else if(room == "middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [x] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');    
                }
            }
            else if(direction == "south")
            {
                if(room == "middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [x] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');
                }
                else if(room == "bottom_middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [x] [o] </p></div>');    
                }
            }
            else if(direction == "west")
            {
                if(room == "west_middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [x] [o] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');
                }
                else if(room == "middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [x] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');    
                }
            }
            else if(direction == "east")
            {
                if(room == "east_middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [o] [x] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');
                }
                else if(room == "middle")
                {
                    $("div.top_rooms").replaceWith('<div class="top_rooms"><p> [o] [o] [o] </p></div>');
                    $("div.middle_rooms").replaceWith('<div class="middle_rooms"><p> [o] [x] [o] </p></div>');
                    $("div.bottom_rooms").replaceWith('<div class="bottom_rooms"><p> [o] [o] [o] </p></div>');    
                }
            }   
            
            return room;
        }
        
        //Reset Text Box
        $("#command_line").val("");

                
        //Help Command
        if(input == "-help")
        {
            $("#message_help").clone().hide().insertBefore("#placeholder").fadeIn(1000);       
            check();
        }
        
        //Create Character; 0 = not chosen yet, else = need to choose
        if(input == "create warrior" && classchosen == 0)
        {
            if(classchosen == 0)
            {
                $("<p>Warrior selected</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                MakePlayer("warrior");   
                check();    
            }
            else
            {
                $("<p>Class already chosen!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                check();    
            }
        }
        else if(input == "create wizard" && classchosen == 0)
        {
            if(classchosen == 0)
            {
                $("<p>Wizard selected</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                MakePlayer("wizard");
                check();    
            }
            else
            {
                $("<p>Class already chosen!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                check();    
            }
        }
        else if(input == "create rogue" && classchosen == 0)
        {
            if(classchosen == 0)
            {
                $("<p>Rogue selected</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                MakePlayer("rogue");
                check();    
            }
            else
            {
                $("<p>Class already chosen!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                check();    
            }
        }
                
        //Info of Each Class
        if(input == "info warrior")
        {
            $("<p>Warrior has high Strength and high Constitution</p>").hide().insertBefore("#placeholder").fadeIn(1000);        
            check();
        }
        if(input == "info wizard")
        {
            $("<p>Wizard has high Intelligence and debuffing spells</p>").hide().insertBefore("#placeholder").fadeIn(1000);            
            check();
        }
        if(input == "info rogue")
        {
            $("<p>Rogue has high dexterity and high critical chance</p>").hide().insertBefore("#placeholder").fadeIn(1000);            
            check();
        }
        
        //Proceed Once Class Is Selected
        if(classchosen == 1)
        {
            //Attack Command
            if(input == "attack")
            {   
                $("<p>Normal Strike!</p>").hide().insertBefore("#placeholder").fadeIn(1000); 
                AttackPhase("normal");
                check();            
            }
            
            //Spells
            else if(input == "frost ray")
            {
                $("<p>Frost Ray!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                AttackPhase("spell");
                check();
            }
            
            //Buffs
            else if(input == "cure light wounds")
            {
                $("<p>Cure Light Wounds</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                AttackPhase("buff");
                check();
            }
            
            //Take Commands
            if(input == "take sword" && currentroom == "middle")
            {
                if(sword == false)
                {
                    sword = true;
                    $("<p>You picked up a sword.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    $("div.item_placeholder").replaceWith('<div class="item_placeholder">Sword</div>');
                    check();            
                }
                else
                {
                    $("<p>You already have a sword.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();
                }                   
            }
            else if(input == "take sword" && currentroom != "middle")
            {
                $("<p>There is no sword here</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                check();
            }
            else if(input == "drop sword" && currentroom == "middle")
            {
                if(sword == true)
                {
                    sword = false;
                    $("<p>You dropped the sword.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    $("div.item_placeholder").replaceWith('<div class="item_placeholder"></div>');
                    check();            
                }
                else
                {
                    $("<p>You don't have a sword.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();
                }                   
            }
            else if(input == "drop sword" && currentroom != "middle")
            {
                if(sword == true)
                {
                    $("<p>Best not to leave the sword here</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();
                }
                else
                {
                    $("<p>You don't have a sword</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();
                }    
            }
            
            //Goto Commands
            if(input == "go west")
            {
                if(currentroom == "middle")
                {
                    $("<p>You are now in the west corridor. " +
                    "The West Corridor is especially dusty..." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("west","west_middle");
                    check();
                }
                if(currentroom == "east_middle")
                {
                    $("<p>You are now back in the middle room. " +
                    "The room invites you with a cold embrace." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("west","middle");
                    check();                    
                }
                else
                {
                    $("<p>You cannot go that way!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();    
                }
            }
            if(input == "go east")
            {
                if(currentroom == "middle")
                {
                    $("<p>You are now in the east corridor. " +
                    "The East Corridor has a slight chill coming from the end of the hall." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("east","east_middle");
                    check();                
                }
                else if(currentroom == "west_middle")
                {
                    $("<p>You are now back in the middle room. " +
                    "The room invites you with a cold embrace." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("east","middle");
                    check();                
                }
                else
                {
                    $("<p>You cannot go that way!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();       
                }
            }   
            if(input == "go north")
            {
                if(currentroom == "middle")
                {
                    $("<p>You are now in the north corridor. " +
                    "The North Corridor has many broken armor and weapons lying around." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("north","top_middle");
                    check();                
                }
                else if(currentroom == "bottom_middle")
                {
                    $("<p>You are now back in the middle room. " +
                    "The room invites you with a cold embrace." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("north","middle");
                    check();                
                }
                else
                {
                    $("<p>You cannot go that way!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();    
                }
            }    
            if(input == "go south")
            {
                if(currentroom == "middle")
                {
                    $("<p>You are now in the south corridor. " +
                    "In the South Corridor you spot a person in the back of the hallway." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("south","bottom_middle");
                    check();                    
                }
                else if(currentroom == "top_middle")
                {
                    $("<p>You are now back in the middle room. " +
                    "The room invites you with a cold embrace..." +
                    "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    
                    currentroom = moveMap("south","middle");
                    check();                
                }
                else
                {
                    $("<p>You cannot go that way!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
                    check();    
                }
            }    
        }
        //Ignore Commands Until Class Selected
        else if(classchosen == 0)
        {
            $("<p>Please select a class.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
            check();
        }
            
        //Unknown Command
        else if(check == false)
        {    
            $("<p>I do not understand " + input + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        }
    });
});