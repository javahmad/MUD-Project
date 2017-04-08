//Player Stats
var players = function(health,defense,attack,str,dex,con,int,wis,cha) {
    this.health = health;
    this.defense = defense;
    this.attack = attack;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
};
//Monster Stats
var monsters = function(health,defense,attack) {
    this.health = health;
    this.defense = defense;
    this.attack = attack;
};

//Player Classes
var warrior = new players(400,5,6,3,1,1,1,1,1);
var rogue = new players(300,5,8,1,3,1,1,1,1);
var wizard = new players(250,5,6,1,1,1,3,1,1);
var classname;
var classchosen = 0;
//Selected Player
var player;

//Monster Types
var goblin = new monsters(50,5,6);
var skeleton = new monsters(100,5,6);
var ogre = new monsters(150,5,6);
var monstername;
//Selected Monster
var selectedmonster;

//Battle Variables
var monsterdead = 0;
var playerdead = 0;

//Make Player Class
function MakePlayer(select)
{
    if(select == "warrior")
    {
        player = warrior;
        classname = "Warrior";
        classchosen = 1;
    }
    else if(select == "wizard")
    {
        player = wizard;
        classname = "Wizard";
        classchosen = 1;
    }
    else if(select == "rogue")
    {
        player = rogue;
        classname = "Rogue";
        classchosen = 1;
    }   
}

function MakeMonster()
{   
    //Random Number
    var randomnumber = Math.floor(Math.random(10)*10);

    if(randomnumber >= 0 && randomnumber < 3)
    {
        selectedmonster = goblin;
        monstername = "Goblin";
    }
    else if(randomnumber >= 3 && randomnumber < 6)
    {
        selectedmonster = skeleton;
        monstername = "Skeleton";
    }
    else if(randomnumber >= 6)
    {
        selectedmonster = ogre;
        monstername = "Ogre";
    }    
}

//Attack Function
function AttackPhase(attacktype)
{
    $("<p>Combat Initiated!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    $("<p> " + monstername + "'s Health is " + selectedmonster.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    $("<p>" + classname + "'s Health is " + player.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);
  
    //Player Turn
    if(attacktype == "normal")
    {
        $("<p>Player attacks for " + Math.ceil(Math.random(player.attack)*10+player.str) + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);       
        selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(player.attack)*10+player.str-selectedmonster.defense);
        $("<p> " + monstername + "'s Health is now " + selectedmonster.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);    
    }
    else if(attacktype == "spell")
    {
        $("<p>Player attacks for " + Math.ceil(Math.random(8)*10+player.int) + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);       
        selectedmonster.health = selectedmonster.health - Math.ceil(Math.random(8)*10+player.int);
        $("<p> " + monstername + "'s Health is now " + selectedmonster.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);    
    }
    else if(attacktype == "buff")
    {
        $("<p>Player heals for " + Math.ceil(Math.random(player.wis)*10+8) + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);       
        player.health = player.health + Math.ceil(Math.random(player.wis)*10+8);
        $("<p> " + classname + "'s Health is now " + player.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);    
    }

    //Monster is Dead
    if (selectedmonster.health < 0)
    {
        monsterdead = 1;
        battle = 0;
        $("<p>" + classname + " has won!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    else 
    {
        //Monster's Turn
        $("<p>Monster Attacks!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
        
        player.health = player.health - Math.ceil(Math.random(selectedmonster.str)+10-player.defense);
        $("<p>" + classname + "'s Health is now " + player.health + "</p>").hide().insertBefore("#placeholder").fadeIn(1000);    

    }       
    //Player is dead
    if(player.health < 0)
    {
        playerdead = 1;
        battle = 0;
        $("<p> "+ monstername + " has won!</p>").hide().insertBefore("#placeholder").fadeIn(1000);   
    }                     
}
