
var redArmyMax = 52;
var blackArmyMax = 52;
var addSupplyUnitsFlag = false;
if(printArmiesFlag){addSupplyUnitsFlag = true;}
var addDummyUnitsFlag = false;
var addAirPowerFlag = false;

var allTheArmiesA = ["All Units Red","All Units Black", "Militia", "Militia Spears", "Professional Spears", "Professional Pikemen",
 "Light Troops","Experimental Phalanx","Barbarian Infantry", "Swordsmen", "Axemen",
   "Light Cavalry", "Medium Cavalry","Heavy Cavalry","Bowmen", "Improved Bowmen",
    "Skirmishers","Balista", "Crossbows", "Early Arquebus", "Late Arquebus",
"Longbow", "Horsebows", "Oriental Cavalry", "Byzantine Cavalry", "Heavy Artillery",
"Light Artillery", "Elephants", "Vikings - AX", "Vikings - IB", "Chariots - Bows",
 "Chariots - IB", "Chariots - SK", "Chariots - AX","Chariots - MI", "Heavy Chariots - BI",
"Light Chariots - EX",  "Light Chariots - LT","Spartans", "Normans", "Vikings",
  "Saxons","Romans", "Pike and Shot", "Henry V","Arabs", "Hordes",
 "Mongols", "Angry Mob", "Mob", "Franks", "Legionaires"];

var allTheUnitsA = [
  "0","A", "n","inf","2","3","","","MI",
  "1","A", "n","spear","3","3","","","MS",
  "2","A", "n","hspear","4","3","","","PS",
  "3","A", "n","hspear","6","4","","","PP",
  "4","A", "n","spear","[4]","5","","","LT",
  "5","A", "n","ex","3","5","2","1","EX",

  "6", "B", "n","inf","[6]","5","","","BI",
  "7","B", "n","sd","4","4","","","SD",
  "8","B", "n","ax","3","4","","","AX",

  "9","C", "n","scout","1","9","","","LC",
  "10","C", "n","cav","[3]","9","","","MC",
  "11","C", "n","cav","[4]","7","","","HC",

  "12","D", "n","vf","4","15","","","VF",
  "13","D", "n","el","[8]","6","","","EL",
  "14","D", "n","ch1","o","9","","","CH",
  "15","D", "n","ch1","o","6","","","CH",
  "16","D", "n","ch1","o","10","","","CH",

  "17","Ff", "f","aa","o","5","2","2","BW",
  "18","Ff", "f","aa","o","5","2","3","IB",
  "19","Ff", "f","sk","[2]","5","2","1","SK",
  "20","Ff", "f","bl","o","5","3","7","BL",
  "21","Ff", "f","cb","o","5","2","3","CB",
  "22","Ff", "f","arq","o","5","2","3","AE",
  "23","Ff", "f","arq","o","5","2","4","AL",
  "24","Ff", "f","lb","o","5","3","3","LB",

  "25","Mf", "f","hb","o","9","1","2","HB",
  "26","Mf", "f","hb","2","9","1","1","OC",
  "27","Mf", "f","bc","3","9","1","2","BC",
  "28","Mf", "f","hvart","o","2","3","7","HA",
  "29","Mf", "f","hvart","o","-","3","7","HA",
  "30","Mf", "f","hvart","o","4","3","7","HA",
  "31","Mf", "f","art","o","4","2","5","LA",
  "32","Mf", "f","art","o","-","2","5","LA",
  "33","Mf", "f","art","o","8","2","5","LA",

  "34","B", "n","ax","3","4","","","AX(LB)",
  "35","B", "n","ax","3","4","1","1","AX(FR)",
  "36","Ff", "f","s1","2","5","2","1","SK(BC)",
  "37","B", "n","sd","4","4","","","SD(BC)",
  "38","B", "n","pl","4","4","1","1","PL",
  "39","A", "n","hspear","4","3","","","PS(HC)",
  "40","B", "n","sd","4","4","","","SD(MC)",
  "41","Ff", "f","cb","o","5","2","3","CB(LC)",
  "42","A", "n","mob","[2]","3","","","MB",


];

var allTheLeadersA = [

];

function findArmies(){

if(changeRedFlag&&redArmyNo==0||changeBlackFlag&&blackArmyNo==1){
var nameQ="All Units Red";

var qbase = ["#ff0000","#ff0000", "#ff0000"];


var unitsQ=[
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "1", "1", "n","inf","2","3","","","MI",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","spear","3","3","","","MS",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","hspear","4","3","","","PS",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "3", "1", "n","hspear","6","4","","","PP",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "2", "1", "n","spear","[4]","5","","","LT",
  "#ff0000/#ffffff/#ff0000/#ffffff","A", "4", "1", "n","ex","3","5","2","1","EX",

  "#ff0000/#ffffff/#ff0000/#ffffff","B", "3", "1", "n","inf","[6]","5","","","BI",
"#ff0000/#ffffff/#ff0000/#ffffff","B", "2", "1", "n","sd","4","4","","","SD",
"#ff0000/#ffffff/#ff0000/#ffffff","B", "2", "1", "n","ax","3","4","","","AX",

  "#ff0000/#ffffff/#ff0000/#ffffff","C", "1", "1", "n","scout","1","9","","","LC",
  "#ff0000/#ffffff/#ff0000/#ffffff","C", "2", "1", "n","cav","[3]","9","","","MC",
  "#ff0000/#ffffff/#ff0000/#ffffff","C", "3", "1", "n","cav","[4]","7","","","HC",

    "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","vf","4","15","","","VF",
  "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","el","[8]","6","","","EL",
  "#ff0000/#ffffff/#ff0000/#ffffff","D", "1", "1", "n","ch1","o","9","","","CH",

  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","2","BW",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","3","IB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","sk","[2]","5","2","1","SK",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "4", "1", "f","bl","o","5","3","7","BL",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","cb","o","5","2","3","CB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","3","AE",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","4","AL",
  "#ff0000/#ffffff/#ff0000/#ffffff","Ff", "4", "1", "f","lb","o","5","3","3","LB",

  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "2", "1", "f","hb","o","9","1","2","HB",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "2", "1", "f","hb","2","9","1","1","OC",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "3", "1", "f","bc","3","9","1","2","BC",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "4", "1", "f","hvart","o","2","3","7","HA",
  "#ff0000/#ffffff/#ff0000/#ffffff","Mf", "3", "1", "f","art","o","4","2","5","LA",
  "#ff0000/#ffffff/#ff0000/#ffffff","Supply","0","0", "n","supply","0","10","","","||",
  "#ff0000/#ffffff/#ff0000/#ffffff","blank", "0", "0", "b","blank","0","0","","","-"
];

var designateLQ=[
"I","I","II","II","III","III",
"I","II","III",
"I","II","III",
"I","I","I","II","II","II","III","III","III"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20","21"];

    //var noOfSide = designateLQ.length;
    var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
      for(s=0;s<noOfSide;s++){
      sideQ[s]=0;
    }

}

else if(changeRedFlag&&redArmyNo==1||changeBlackFlag&&blackArmyNo==0){
var nameQ="All Units Black";

var qbase = ["#000000","#000000", "#000000"];


var unitsQ=[
    "#000000/#ffffff/#000000/#ffffff","A", "1", "1", "n","inf","2","3","","","MI",
      "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","spear","3","3","","","MS",
        "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","hspear","4","3","","","PS",
          "#000000/#ffffff/#000000/#ffffff","A", "3", "1", "n","hspear","6","4","","","PP",
            "#000000/#ffffff/#000000/#ffffff","A", "2", "1", "n","spear","[4]","5","","","LT",
              "#000000/#ffffff/#000000/#ffffff","A", "4", "1", "n","ex","3","5","2","1","EX",

    "#000000/#ffffff/#000000/#ffffff","B", "3", "1", "n","inf","[6]","5","","","BI",
  "#000000/#ffffff/#000000/#ffffff","B", "2", "1", "n","sd","4","4","","","SD",
  "#000000/#ffffff/#000000/#ffffff","B", "2", "1", "n","ax","3","4","","","AX",

    "#000000/#ffffff/#000000/#ffffff","C", "1", "1", "n","scout","1","9","","","LC",
      "#000000/#ffffff/#000000/#ffffff","C", "2", "1", "n","cav","[3]","9","","","MC",
        "#000000/#ffffff/#000000/#ffffff","C", "3", "1", "n","cav","[4]","7","","","HC",

              "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","vf","4","15","","","VF",
                    "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","el","[8]","6","","","EL",
                        "#000000/#ffffff/#000000/#ffffff","D", "1", "1", "n","ch1","o","9","","","CH",

    "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","2","BW",
      "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","aa","o","5","2","3","IB",
        "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","sk","[2]","5","2","1","SK",
          "#000000/#ffffff/#000000/#ffffff","Ff", "4", "1", "f","bl","o","5","3","7","BL",
            "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","cb","o","5","2","3","CB",
              "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","3","AE",
                "#000000/#ffffff/#000000/#ffffff","Ff", "3", "1", "f","arq","o","5","2","4","AL",
                  "#000000/#ffffff/#000000/#ffffff","Ff", "4", "1", "f","lb","o","5","3","3","LB",

    "#000000/#ffffff/#000000/#ffffff","Mf", "2", "1", "f","hb","o","9","1","2","HB",
      "#000000/#ffffff/#000000/#ffffff","Mf", "2", "1", "f","hb","2","9","1","1","OC",
        "#000000/#ffffff/#000000/#ffffff","Mf", "3", "1", "f","bc","3","9","1","2","BC",
          "#000000/#ffffff/#000000/#ffffff","Mf", "4", "1", "f","hvart","o","2","3","7","HA",
            "#000000/#ffffff/#000000/#ffffff","Mf", "3", "1", "f","art","o","4","2","5","LA",
    "#000000/#ffffff/#000000/#ffffff","Supply","0","0", "n","supply","0","10","","","||",
    "#ff0000/#ffffff/#ff0000/#ffffff","blank", "0", "0", "b","blank","0","0","","","-"
];


var designateLQ=[
  "JG","JG","JG","JG","JG","JG","JG","JG",
  "Elitegruppe","Elitegruppe","Elitegruppe","Elitegruppe","Elitegruppe",
  "Blakbutte","Blakbutte","Blakbutte","Blakbutte","Blakbutte"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
    for(s=0;s<noOfSide;s++){
      sideQ[s]=1;    }
  }
else if(changeRedFlag&&redArmyNo==2||changeBlackFlag&&blackArmyNo==2){
var nameQ="Militia";

var qbase = ["#F0F8FF","#54ffff", "#54ffff"];


var unitsQ=[
    "#F0F8FF/#000000/#FAEBD7/#000000","A", "1", "24", "n","inf","2","3","","","MI"
];


var designateLQ=["Alpha", "Bravo", "Charlie", "Delta", "Golf", "Alpha", "Bravo", "Alpha",
 "Bravo", "Charlie", "Delta", "Echo", "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
  "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Alpha", "Bravo", "Alpha",
   "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Alpha"
];

var designateRQ=[
"1", "1", "1", "1", "1", "2", "2", "3", "3", "2",
 "2", "1", "4", "4", "3", "3", "2", "1", "5",
 "5", "4", "4", "3", "2", "6", "6", "7", "7",
 "5", "5", "4", "3", "8"];


 var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==3||changeBlackFlag&&blackArmyNo==3){
var nameQ="Militia Spears";

var qbase = ["#00FFFF","#538115", "#538115"];


var unitsQ=[
"#00FFFF/#000000/#7FFFD4/#000000","A", "2", "12", "n","spear","3","3","","","MS"
];


var designateLQ=[
  "Territorial", "Reserve", "Territorial", "", "Mercenary",
  "Territorial", "Reserve", "Mercenary", "", "Reserve",
  "Territorial", "", "Territorial", "", "", "Territorial",
  "Territorial", "", "", "Mercenary", "Mercenary", "Territorial",
  "Territorial", "Territorial", "Reserve", "Reserve", "Territorial",
  "Mercenary", "", "Mercenary", "Territorial", "Reserve", "Mercenary",
  "", "", "Mercenary", "", "Territorial"
];

var designateRQ=[
 "1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17",
 "18", "19", "20", "21", "22",
 "23", "24", "25", "26", "27",
 "28", "29", "30", "31", "32",
 "33", "34", "35", "36", "37",
 "38", "39"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==4||changeBlackFlag&&blackArmyNo==4){
var nameQ="Professional Spears";

var qbase = ["#F0FFFF","#F0FFFF", "#F0FFFF"];


var unitsQ=[
  "#F0FFFF/#000000/#F5F5DC/#000000","A", "2", "12", "n","hspear","4","3","","","PS"
];


var designateLQ=[
  "1999", "Sign o'", "1999",
   "Planet", "Chaos", "Emancipation", "Planet", "1999",
    "Sign o'", "1999","Sign o'",
     "Diamonds", "Chaos", "Sign o'", "Diamonds", "1999",
      "1999", "Xpectation", "Planet", "Planet ", "Planet"
];

var designateRQ=["#1", "Times #1", "#2",
 "Earth #1", "Disorder #1", "#1", "Earth #2", "#3",
  "Times #2", "#4", "Times #3",
   "Pearls #1", "Disorder #2", "Times #4", "Pearls #2", "#5",
    "#6", "#1", "Earth #3", "Earth #4", "Earth #5"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==5||changeBlackFlag&&blackArmyNo==5){
var nameQ="Professional Pikes";

var qbase = ["#FFE4C4","#FFE4C4", "#FFE4C4"];


var unitsQ=[
"#FFE4C4/#000000/#000000/#ffffff","A", "3", "8", "n","hspear","6","4","","","PP"
];


var designateLQ=["Invade", "Invade", "Charge", "Invade", "Siege", "Patrol", "Hold", "Patrol",
 "Hold", "Repel", "Siege", "Hold", "Patrol", "Hold", "Patrol", "Patrol", "Invade", "Hold",
  "Repel", "Hold", "Charge", "Charge", "Repel", "Repel", "Repel", "Siege", "Invade", "Repel",
   "Siege", "Invade", "Repel", "Siege", "Hold", "Charge", "Invade", "Hold"];

var designateRQ=["1", "2", "1", "3", "1", "1", "1", "2", "2", "1", "2",
"3", "3", "4", "4", "5", "4", "5", "2", "6", "2", "3", "3", "4", "5",
 "3", "5", "6", "4", "6", "7", "5", "7", "4", "7", "8", "1", "2", "3",
  "4", "5", "6", "7", "8"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==6||changeBlackFlag&&blackArmyNo==6){
var nameQ="Light Troops";

var qbase = ["#FFEBCD","#FFEBCD", "#FFEBCD"];


var unitsQ=[
  "#FFEBCD/#000000/#0000FF/#ffffff","A", "2", "12", "n","spear","[4]","5","","","LT"
];


var designateLQ=[
  "XXVI", "XVIII", "XVIII", "XII",
  "XI", "XII", "XVIII", "XI",
  "XII", "XVIII", "XII", "XVIII", "XVIII",
  "XII", "XVIII", "XVIII", "XIX", "XIX",
  "XII", "XI", "XXVI", "XVIII", "XIX", "XVIII", "XXVI", "XIX", "XII", "XI"
];

var designateRQ=["682nd", "297th", "773th", "685th",
 "949th", "933th", "749th", "694th",
 "542nd", "324th", "347th", "121st", "772nd",
 "938th", "946th", "981st", "984th", "365th",
 "181st", "548th", "452nd", "826th", "818th",
 "559th", "378th", "185th", "134th", "526th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==7||changeBlackFlag&&blackArmyNo==7){
var nameQ="Experimental Phalanx";

var qbase = ["#8A2BE2","#8A2BE2", "#8A2BE2"];


var unitsQ=[
"#8A2BE2/#ffffff/#A52A2A/#ffffff","A", "4", "6", "n","ex","3","5","2","1","EX"
];


var designateLQ=["Dawn", "Morning-Star", "Sol", "Mars", "Sol",
 "Morning-Star", "Morning-Star", "Luna", "Sol", "Mars", "Morning-Star",
  "Venus", "Dawn", "Dawn", "Dawn", "Venus", "Morning-Star", "Dawn",
   "Mercury", "Mercury", "Dawn", "Morning-Star", "Venus", "Mars", "Venus",
    "Mars", "Venus", "Luna", "Sol", "Mercury", "Morning-Star", "Venus",
     "Dawn", "Luna", "Morning-Star", "Morning-Star"];

var designateRQ=["541st", "539th", "416th", "221st", "576th", "639th", "897th",
 "335th", "761st", "269th", "584th", "242nd", "133th", "477th", "776th", "946th",
  "828th", "599th", "512nd", "824th", "818th", "892nd", "276th", "761st",
   "668th", "712nd", "712nd", "872nd", "161st", "667th", "155th", "437th",
    "713th", "758th", "985th", "143th", "817th", "915th", "267th", "624th",
     "874th", "968th", "197th", "528th"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==8||changeBlackFlag&&blackArmyNo==8){
var nameQ="Barbarian Infantry";

var qbase = ["#DEB887","#DEB887", "#DEB887"];


var unitsQ=[
  "#DEB887/#000000/#5F9EA0/#000000","B", "3", "8", "n","inf","[6]","5","","","BI"
];


var designateLQ=["Shark",
 "Shark", "Python", "Swordfish",
  "Shark", "Python", "Swordfish",
   "Shark", "Python",
"Shark", "Python", "Swordfish", "Sparrowhawk","Tarantula",
 "Bat", "Shark", "Python", "Swordfish", "Shark",
"Sparrowhawk","Tarantula", "Bat", "", "Shark",
 "Python", "Swordfish", "Sparrowhawk", "Tarantula", "Bat",
  "Bat", "Shark", "Python", "Swordfish", "Sparrowhawk",
"Tarantula", "Bat", "Tarantula", "Shark", "Python",
"Swordfish", "Sparrowhawk", "Tarantula", "Bat", "Tarantula",
"Shark", "Python","Swordfish", "Sparrowhawk", "Tarantula",
"Bat", "Sparrowhawk", "Shark", "Python", "Swordfish"];

var designateRQ=["1", "2", "1", "1", "3", "2", "2", "4", "3", "5", "4", "3",
 "1", "1", "1", "1", "6", "5", "4", "2", "2", "2", "2", "7", "6", "5", "3",
  "3", "3", "3", "8", "7", "6", "4", "4", "4", "4", "9", "8", "7", "5", "5",
   "5", "5", "10", "9", "8", "6", "6", "6", "6", "11", "10", "9", "7", "8",
    "9", "10", "11", "12", "13", "14"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==9||changeBlackFlag&&blackArmyNo==9){
var nameQ="Swordsmen";

var qbase = ["#7FFF00","#7FFF00", "#7FFF00"];


var unitsQ=[
"#7FFF00/#000000/#D2691E/#ffffff","B", "2", "12", "n","sd","4","4","","","SD"
];


var designateLQ=["XXVII", "VI", "XXVI", "XXVII", "VI", "XXVI", "XXVII",
 "VI", "XXVI", "XXVII", "XXVII", "VI", "XXVI", "XXVII", "VI", "XXVI",
  "XXVII", "XXVII", "VI", "XXVI", "XXVII", "XXVII", "VI", "XXVI", "XXVII",
   "VI", "XXVI", "XXVII", "VI"
];

var designateRQ=["1", "1", "1", "2", "2", "2", "3", "3", "3",
 "4", "5", "4", "4", "6", "5", "5", "7", "8", "6", "6",
  "9", "1", "2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==10||changeBlackFlag&&blackArmyNo==10){
var nameQ="Axemen";

var qbase = ["#FF7F50","#FF7F50", "#FF7F50"];


var unitsQ=[
"#FF7F50/#000000/#6495ED/#ffffff","B", "2", "12", "n","ax","3","4","","","AX"
];


var designateLQ=["Sierra", "Kilo", "Papa", "Sierra", "Kilo", "Sierra", "Kilo", "Papa", "Uniform",
 "Sierra", "Kilo", "Papa", "Uniform", "Sierra", "Sierra", "Kilo", "Papa", "Uniform",
  "Sierra", "Kilo", "Papa", "Sierra"
];

var designateRQ=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==11||changeBlackFlag&&blackArmyNo==11){
var nameQ="Light Cavalry";

var qbase = ["#FFF8DC","#FFF8DC", "#FFF8DC"];


var unitsQ=[
  "#FFF8DC/#000000/#DC143C/#ffffff","C", "24", "24", "n","scout","1","9","","","LC"
];


var designateLQ=["Von-der-Tann", "Schleswig-Holstein", "Von-der-Tann", "Lutzow",
 "Frauenlob", "Seydlitz", "Lutzow", "Von-der-Tann", "Schleswig-Holstein", "Von-der-Tann",
  "Schleswig-Holstein", "Pillau", "Frauenlob", "Schleswig-Holstein", "Pillau", "Von-der-Tann",
   "Von-der-Tann", "Von-der-Tann", "Lutzow", "Lutzow", "Lutzow"
];

var designateRQ=["1", "1", "2", "1", "1", "1", "2", "3", "2", "4", "3", "1",
 "2", "4", "2", "5", "6", "7", "3", "4", "5", "1", "2", "3", "4", "5", "6",
  "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==12||changeBlackFlag&&blackArmyNo==12){
var nameQ="Medium Cavalry";

var qbase = ["#00FFFF","#00FFFF", "#00FFFF"];


var unitsQ=[
  "#00FFFF/#000000/#00008B/#ffffff","C", "2", "12", "n","cav","[3]","9","","","MC"
];


var designateLQ=["7th", "7th", "1st", "1st", "4th", "4th", "4th", "4th", "4th",
 "8th", "8th", "8th", "8th", "8th", "10th", "10th", "10th", "3rd", "3rd"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==13||changeBlackFlag&&blackArmyNo==13){
var nameQ="Heavy Cavalry";

var qbase = ["#008B8B","#008B8B", "#008B8B"];


var unitsQ=[
  "#008B8B/#ffffff/#B8860B/#ffffff","C", "3", "8", "n","cav","[4]","7","","","HC"
];


var designateLQ=["Fox", "Sparrowhawk", "Sparrowhawk", "Viper", "Viper", "Viper", "Eagle",
 "Viper", "Eagle", "Viper", "Fox", "Viper", "Piranha", "Viper", "Fox", "Rat", "Viper",
  "Piranha", "Viper", "Viper", "Rat", "Sparrowhawk", "Viper", "Sparrowhawk", "Viper",
   "Sparrowhawk", "Piranha", "Piranha", "Rat", "Eagle", "Piranha", "Fox", "Piranha",
    "Fox", "Viper", "Sparrowhawk"
];

var designateRQ=["1", "1", "2", "1", "2", "3", "1", "4",
 "2", "5", "2", "6", "1", "7", "3", "1", "8", "2", "9",
 "10", "2", "3", "11", "4", "12", "5", "3", "4", "3", "3",
 "5", "4", "6", "5", "13", "6", "1", "2", "3", "4", "5",
  "6", "7", "8"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==14||changeBlackFlag&&blackArmyNo==14){
var nameQ="Bowmen";

var qbase = ["#A9A9A9","#A9A9A9", "#A9A9A9"];


var unitsQ=[
  "#A9A9A9/#000000/#006400/#ffffff","Ff", "3", "8", "f","aa","o","5","2","2","BW"
];


var designateLQ=["Bronze", "Lead", "Bronze", "Iron", "Helium", "Bronze",
 "Bronze", "Helium",
  "Iron", "Sulphur", "Helium",
   "Helium", "Iron", "Bronze", "Sulphur",
  "Sulphur", "Sulphur", "Iron", "Lead", "Sulphur", "Helium", "Iron", "Helium","Bronze", "Iron", "Iron", "Bronze", "Sulphur"
];

var designateRQ=["1", "1", "2", "1", "1", "3", "4", "2", "2", "1",
 "3", "4", "3", "5", "2", "3", "4", "4", "2", "5", "5", "5", "6",
  "6", "6", "7", "7", "6", "1", "2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==15||changeBlackFlag&&blackArmyNo==15){
var nameQ="Improved Bowmen";

var qbase = ["#BDB76B","#BDB76B", "#BDB76B"];


var unitsQ=[
  "#BDB76B/#000000/#8B008B/#ffffff","Ff", "3", "8", "f","aa","o","5","2","3","IB"
];


var designateLQ=["Indomitable", "Incredible", "Inflexible", "Incredible", "Indefatigable",
 "Inconstant", "Inflexible", "Indomitable", "Inflexible", "Indomitable", "Indomitable",
  "Indefatigable", "Inconstant", "Inflexible", "Inconstant", "Incredible", "Inflexible",
   "Indefatigable", "Inconstant", "Incredible", "Indefatigable", "Indomitable", "Incredible",
    "Indefatigable", "Incredible", "Indomitable", "Incredible", "Indomitable", "Indomitable",
     "Indomitable"
];

var designateRQ=["76th", "8th", "97th", "6th", "67th", "89th",
 "5th", "1st", "82nd", "38th", "3th", "53th", "51st", "44th",
  "895th", "55th", "24th", "7th", "68th", "56th", "57th", "35th",
   "445th", "574th", "688th", "32nd", "37th", "25th", "81st", "9th",
    "87th", "74th", "47th", "556th", "16th", "65th", "817th", "66th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==16||changeBlackFlag&&blackArmyNo==16){
var nameQ="Skirmishers";

var qbase = ["#556B2F","#556B2F", "#556B2F"];


var unitsQ=[
  "#556B2F/#ffffff/#FF8C00/#000000","Ff", "3", "8", "f","sk","[2]","5","2","1","SK"
];


var designateLQ=["Tan", "White", "Orange", "Tan", "White", "Tan", "White",
 "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange", "Tan", "White",
  "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange", "Tan"
];

var designateRQ=["1", "1", "1", "2", "2", "3", "3", "2", "4", "4", "3", "5",
 "5", "4", "6", "6", "5", "7", "7", "6", "8", "8", "7", "9"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==17||changeBlackFlag&&blackArmyNo==17){
var nameQ="Balista";

var qbase = ["#9932CC","#9932CC", "#9932CC"];


var unitsQ=[
  "#9932CC/#ffffff/#8B0000/#ffffff","Ff", "4", "6", "f","bl","o","5","3","7","BL"

];


var designateLQ=["6th", "6th", "10th", "10th", "4th", "4th",
 "5th", "5th", "4th", "5th", "9th","4th", "4th", "5th", "5th", "9th", "9th", "4th", "5th", "9th", "9th"];

var designateRQ=["637th", "611st", "188th", "153rd", "683rd", "243rd",
 "636th", "745th", "381st", "673rd", "685th", "448th",
  "387th", "131st", "382nd", "369th", "315th", "532nd",
   "936th", "835th", "423rd"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==18||changeBlackFlag&&blackArmyNo==18){
var nameQ="Crossbows";

var qbase = ["#E9967A","#E9967A", "#E9967A"];


var unitsQ=[
  "#E9967A/#000000/#8FBC8F/#000000","Ff", "3", "8", "f","cb","o","5","2","3","CB"
];


var designateLQ=["Orion", "Horatio", "Meneleus", "Patroclus", "Diomedes", "Anneas", "Hippolyta", "Diomedes",
"Anneas", "Agamemnon", "Meneleus", "Meneleus", "Orion", "Agamemnon", "Diomedes", "Hippolyta", "Horatio",
"Anneas", "Anneas", "Patroclus", "Paris", "Paris", "Orion", "Hippolyta", "Meneleus", "Heracles", "Atalanta",
"Patroclus", "Heracles", "Heracles", "Anneas", "Paris"
];

var designateRQ=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
"12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
"24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35",
"36", "37", "38", "39", "40"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==19||changeBlackFlag&&blackArmyNo==19){
var nameQ="Early Arquebus";

var qbase = ["#483D8B","#483D8B", "#483D8B"];


var unitsQ=[
  "#483D8B/#ffffff/#2F4F4F/#ffffff","Ff", "3", "8", "f","arq","o","5","2","3","AE"
];


var designateLQ=["Rock", "Pearl", "Pearl", "Pearl", "Pearl", "Marble",
"Marble", "Marble", "Marble", "Mica", "Mica", "Mica", "Mica", "Mica",
"Ruby", "Ruby", "Ebony", "Ebony", "Ebony", "Ebony", "Ebony", "Ebony",
"Ebony", "Emerald", "Emerald", "Emerald", "Emerald", "Emerald", "Emerald",
"Emerald", "Emerald", "Emerald", "Ivory", "Ivory", "Ivory", "Ivory", "Ivory",
"Ivory", "Ivory", "Ivory"
];

var designateRQ=["1", "1", "2", "3", "4", "1", "2", "3", "4",
"1", "2", "3", "4", "5", "1", "2", "1", "2", "3", "4", "5",
"6", "7", "1", "2", "3", "4", "5", "6", "7", "8", "9", "1",
"2", "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==20||changeBlackFlag&&blackArmyNo==20){
var nameQ="Late Arquebus";

var qbase = ["#00CED1","#00CED1", "#00CED1"];


var unitsQ=[
  "#00CED1/#ffffff/#9400D3/#ffffff","Ff", "3", "1", "f","arq","o","5","2","4","AL"
];


var designateLQ=["Spartans", "Spartans", "Athenians", "Athenians",
"Athenians", "Athenians", "Athenians", "Athenians", "Athenians",
"Cartaginians", "Cartaginians", "Cartaginians", "Cartaginians",
"Cartaginians", "Persians", "Persians", "Persians", "Persians",
"Persians", "Persians", "Amazons", "Amazons", "Amazons", "Amazons",
"Amazons", "Amazons", "Amazons", "Amazons", "Amazons", "Amazons",
"Amazons", "Amazons", "Amazons", "Amazons", "Etruscans", "Etruscans",
"Etruscans", "Etruscans"
];

var designateRQ=["716th", "224th", "212nd", "263th", "915th", "487th",
"487th", "452nd", "371st", "581st", "112nd", "333th", "657th", "583th",
"722nd", "231st", "183th", "798th", "527th", "771st", "427th", "566th",
"496th", "887th", "312nd", "898th", "375th", "914th", "935th", "592nd",
"335th", "573th", "676th", "825th", "938th", "979th", "636th", "261st",
"684th", "176th", "443th", "276th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==21||changeBlackFlag&&blackArmyNo==21){
var nameQ="Longbows";

var qbase = ["#FF1493","#FF1493", "#FF1493"];


var unitsQ=[
  "#FF1493/#ffffff/#00BFFF/#ffffff","Ff", "4", "6", "f","lb","o","5","3","3","LB"
];


var designateLQ=["", "21", "15", "Italian", "Italian",
"21", "15", "Italian", "21", "15", "90",
 "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["ROMMEL", "5", "8", "Ariete", "Littorio",
"104", "115", "Trieste", "3", "32", "580",
 "51", "Folgere", "361",
 "55", "200", "125", "382", "433",
  "Bologna", "Centor", "Pistolio", "Sabratha", "Savena",
   "Fascists", "Bresia", "Pavia", "Trenta"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==22||changeBlackFlag&&blackArmyNo==22){
var nameQ="Horsebows";

var qbase = ["#696969","#696969", "#696969"];


var unitsQ=[
  "#696969/#ffffff/#1E90FF/#ffffff","Mf", "2", "12", "f","hb","o","9","1","2","HB"
];


var designateLQ=["", "21", "15", "10", "Italian", "Italian",
"21", "15", "10", "10", "HG", "Italian", "21", "15", "10", "90",
 "HG", "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["ROMMEL", "5", "8", "7", "Ariete", "Littorio",
"104", "115", "69", "86", "1", "Trieste", "3", "32", "10", "580",
 "5", "51", "Folgere", "361",
 "55", "200", "125", "382", "433",
  "Bologna", "Centor", "Pistolio", "Sabratha", "Savena",
   "Fascists", "Bresia", "Pavia", "Trenta"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
  }

else if(changeRedFlag&&redArmyNo==23||changeBlackFlag&&blackArmyNo==23){
  var nameQ="Oriental Cavalry";

  var qbase = ["#B22222","#B22222", "#B22222"];


  var unitsQ=[
  "#B22222/#ffffff/#FFFAF0/#000000","Mf", "2", "12", "f","hb","2","9","1","1","OC"
  ];

  var designateLQ=["7", "2", "1", "1", "10", "10", "", "", "7",
   "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
    "NZ", "70", "51", "51", "50",
     "50", "50", "44", "44", "10 I",
      "10 I", "8 I", "8 I", "7 A", "7 A",
       "5 I", "5 I", "5 I", "4 I", "4 I",
        "4 I", "4 I", "2 SA", "2 SA", "2 NZ",
         "2 NZ", "2 NZ", "1 SA", "1 SA", "1 SA",
          "1 SA",
   "Pol", "Jews", "Free Fr", "50", "7",
   "", ""
  ];

  var designateRQ=["4", "3", "22", "2", "23", "8", "32", "1", "7",
   "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
    "2", "23", "2", "1", "151",
     "150", "69", "132", "61", "25",
      "21", "161", "18", "2", "1",
       "29", "10", "9", "23", "11",
        "7", "5", "6", "4", "6",
         "5", "4", "5", "3", "2",
          "1",
   "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
   "LRDG", "SAS"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==24||changeBlackFlag&&blackArmyNo==24){
  var nameQ="Byzantine Cavalry";

  var qbase = ["#228B22","#228B22", "#228B22"];


  var unitsQ=[
  "#228B22/#ffffff/#FF00FF/#ffffff","Mf", "3", "8", "f","bc","3","9","1","2","BC"
  ];

    var designateLQ=["7", "2", "1", "1", "10", "10", "", "", "7",
     "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
      "NZ", "70", "51", "51", "50",
       "50", "50", "44", "44", "10 I",
        "10 I", "8 I", "8 I", "7 A", "7 A",
         "5 I", "5 I", "5 I", "4 I", "4 I",
          "4 I", "4 I", "2 SA", "2 SA", "2 NZ",
           "2 NZ", "2 NZ", "1 SA", "1 SA", "1 SA",
            "1 SA",
     "Pol", "Jews", "Free Fr", "50", "7",
     "", ""
    ];

    var designateRQ=["4", "3", "22", "2", "23", "8", "32", "1", "7",
     "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
      "2", "23", "2", "1", "151",
       "150", "69", "132", "61", "25",
        "21", "161", "18", "2", "1",
         "29", "10", "9", "23", "11",
          "7", "5", "6", "4", "6",
           "5", "4", "5", "3", "2",
            "1",
     "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
     "LRDG", "SAS"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==25||changeBlackFlag&&blackArmyNo==25){
  var nameQ="Heavy Artillery";

  var qbase = ["#FFD700","#FFD700", "#FFD700"];


  var unitsQ=[
  "#FFD700/#000000/#DAA520/#000000","Mf", "4", "6", "f","hvart","o","2","3","7","HA"
  ];

    var designateLQ=["7", "2", "1", "1", "10", "",  "7",
     "9 A",  "9 A", "9 A", "", "1", "7", "2 SA", "1 SA", "7", "2",
     "50", "5 I", "2 NZ", "1 SA",
      "NZ", "70", "51", "51",  "44", "44", "10 I",
        "10 I", "8 I", "8 I", "7 A", "7 A",
          "4 I", "4 I",
          "4 I", "4 I", "2 SA", "2 SA",
     "Pol", "Jews", "Free Fr", "50", "7",
     "LRDG", "SAS", "SBS"
    ];

    var designateRQ=["4", "3",  "22", "2", "8", "32",  "7",
     "24",  "20", "18", "22 Gds", "201 Gds", "3 I Motor", "7", "3", "7 S.G.", "2 S.G.",
     "", "", "", "",
      "2", "23", "2", "1",  "132", "61", "25",
        "21", "161", "18", "2", "1",
         "23", "11",
          "7", "5", "6", "4",
     "Carpathian", "", "1", "6 SA Motor", "4 SA Motor",
     "", "", ""];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==26||changeBlackFlag&&blackArmyNo==26){
  var nameQ="Light Artillery";

  var qbase = ["#008000","#008000", "#008000"];


  var unitsQ=[,
  "#008000/#ffffff/#ADFF2F/#000000","Mf", "3", "8", "f","art","o","4","2","5","LA"
  ];

    var designateLQ=["46", "45", "44", "43", "42", "41", "40", "39", "38", "37", "36", "35", "34",
  "33", "32", "31", "30", "29", "28", "27", "26", "25", "24", "23", "22", "21", "20", "19",
  "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4",
  "3", "2", "1"
    ];

    var designateRQ=["11", "30", "34", "52", "54", "38", "1", "23", "6", "3", "20", "43", "7",
  "13", "9", "35", "12", "17", "55", "29", "48", "4", "43", "3R", "4R", "5R", "26", "28",
  "2", "LR", "2R", "10", "3", "43", "53", "5", "44", "46", "6R", "24", "33", "55", "14",
  "42", "41", "57"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==27||changeBlackFlag&&blackArmyNo==27){
  var nameQ="Elephants";

  var qbase = ["#F0E68C","#F0E68C", "#F0E68C"];


  var unitsQ=[
  "#F0E68C/#000000/#fffff0/#000000","D", "4", "6", "n","el","[8]","6","","","EL"
  ];

    var designateLQ=["17th", "55th", "29th", "48th", "4th", "43th", "3R", "4R", "5R", "26th",
    "28th", "2nd",  "LR", "2R", "10th", "3th", "53th", "5th", "6R", "24th",  "55th", "41th", "57th"
    ];

    var designateRQ=["23", "22", "21", "20", "19",
   "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4",
   "3", "2", "1"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==28||changeBlackFlag&&blackArmyNo==28){
var nameQ="Vikings - AX";

var qbase = ["#20B2AA","#20B2AA", "#20B2AA"];


var unitsQ=[
"#20B2AA/#ffffff/#87CEFA/#000000","D", "2", "3", "n","vf","4","15","","","VF",
"#20B2AA/#ffffff/#87CEFA/#000000","B", "2", "9", "n","vk","3","4","","","AX"
];


var designateLQ=["1st", "2nd", "3rd", "4th",
"1st", "1st", "2nd", "3rd", "4th",
"1st", "2nd", "3rd", "4th",
"1st", "2nd", "3rd", "4th", "1st", "2nd", "2nd","3rd", "3rd", "4th",  "4th"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20","21","22","23","24"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==29||changeBlackFlag&&blackArmyNo==29){
var nameQ="Vikings - IB";

var qbase = ["#CD5C5C","#CD5C5C", "#CD5C5C"];


var unitsQ=[
"#CD5C5C/#ffffff/#4B0082/#000000","D", "2", "3", "n","vf","4","15","","","VF",
"#CD5C5C/#ffffff/#4B0082/#ffffff","Ff", "3", "6", "f","aa","o","5","2","3","IB"
];


var designateLQ=["GHIJ", "GHIJ", "GHIJ","GHIJ", "GHIJ",
 "NOPQ", "NOPQ", "NOPQ", "NOPQ", "NOPQ", "NOPQ",
  "STUV", "STUV", "STUV", "STUV", "STUV", "STUV",
  "CDEF", "CDEF","CDEF","CDEF","CDEF", "CDEF","CDEF","CDEF"
];

var designateRQ=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
 "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
else if(changeRedFlag&&redArmyNo==30||changeBlackFlag&&blackArmyNo==30){
var nameQ="Chariots - BW";

var qbase = ["#F0FFF0","#F0FFF0", "#F0FFF0"];


var unitsQ=[
  "#F0FFF0/#000000/#FF69B4/#000000","D", "1", "6", "n","ch1","o","9","","","CH",
  "#F0FFF0/#000000/#FF69B4/#000000","Ff", "3", "6", "f","aa","o","5","2","2","BW"
];


var designateLQ=["Artillery", "Mobile Artillery", "Infantry", "Infantry", "Infantry", "Infantry",
 "Airborne", "Airborne", "Special Forces", "Special Forces", "Special Forces", "Special Forces",
  "Mechanised", "Armour", "Armour", "Cavalry", "Armoured Cavalry", "Recon"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==31||changeBlackFlag&&blackArmyNo==31){
var nameQ="Chariots - IB";

var qbase = ["#E6E6FA","#E6E6FA", "#E6E6FA"];


var unitsQ=[
  "#E6E6FA/#000000/#FFF0F5/#000000","D", "1", "6", "n","ch1","o","9","","","CH",
  "#E6E6FA/#000000/#FFF0F5/#000000","Ff", "3", "6", "f","aa","o","5","2","3","IB"
];


var designateLQ=["Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak",
 "Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak", "Pine", "Laurel", "Oak",
  "Pine", "Laurel", "Oak"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==32||changeBlackFlag&&blackArmyNo==32){
var nameQ="Chariots - SK";

var qbase = ["#ADD8E6","#ADD8E6", "#ADD8E6"];


var unitsQ=[
  "#ADD8E6/#000000/#F08080/#000000","D", "1", "6", "n","ch1","o","9","","","CH",
  "#ADD8E6/#000000/#F08080/#000000","Ff", "3", "6", "f","sk","[2]","5","2","1","SK"
];


var designateLQ=["Odin", "Odin", "Odin", "Baldr", "Baldr", "Baldr",
 "Baldr", "Baldr", "Baldr", "Loki", "Loki", "Loki", "Thor", "Thor", "Thor",
  "Freyja", "Freyja", "Freyja","Freyja", "Freyja", "Freyja"
];

var designateRQ=["1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18", "19","20","21"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==33||changeBlackFlag&&blackArmyNo==33){
var nameQ="Chariots - AX";

var qbase = ["#E0FFFF","#E0FFFF", "#E0FFFF"];


var unitsQ=[
  "#E0FFFF/#000000/#FAFAD2/#000000","D", "1", "8", "n","ch1","o","9","","","CH",
"#E0FFFF/#000000/#FAFAD2/#000000","B", "2", "8", "n","ax","3","4","","","AX"
];


var designateLQ=["Armstrong", "Armstrong", "Armstrong", "Armstrong", "Armstrong", "Armstrong",
 "Columbia", "Columbia", "Columbia", "Columbia", "Columbia",
 "Aldrin", "Aldrin", "Aldrin", "Aldrin", "Aldrin",
  "Collins", "Collins", "Collins","Collins",
  "Eagle", "Eagle","Eagle", "Eagle","Eagle", "Eagle","Eagle"
];

var designateRQ=["I","II","III","IV","V","VI",
"VII","VIII","IX",
"X","XI","XII",
"XIII","XIV","XV","XVI","XVII","XVIII", "XIV","XX","XXI",
"XXII","XXIII","XXIV", "XXXV","XXVI","XXVII"
];
}
else if(changeRedFlag&&redArmyNo==34||changeBlackFlag&&blackArmyNo==34){
var nameQ="Chariots - MI";

var qbase = ["#FFA07A","#FFA07A", "#FFA07A"];


var unitsQ=[
  "#FFA07A/#000000/#D3D3D3/#000000","D", "1", "12", "n","ch1","o","9","","","CH",
  "#FFA07A/#000000/#D3D3D3/#000000","A", "1", "12", "n","inf","2","3","","","MI"
];


var designateLQ=["Red", "Red", "Red", "Orange", "Orange", "Orange",
 "Yellow", "Yellow", "Yellow", "Yellow", "Yellow", "Yellow",
 "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Indigo", "Indigo","Indigo","Indigo","Indigo",
  "Violet", "Violet","Violet", "Violet"
];

var designateRQ=[
"1","2","3","4","5","6",
"7","8","9",
"10","11","12",
"13","14","15","16","17","18", "19","20","21",
"22","23", "24","25","26", "27"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==35||changeBlackFlag&&blackArmyNo==35){
var nameQ="Heavy Chariots - BI";

var qbase = ["#90EE90","#90EE90", "#90EE90"];


var unitsQ=[
  "#90EE90/#000000/#FFB6C1/#000000","D", "1", "6", "n","ch2","o","6","","","CH",
  "#90EE90/#000000/#FFB6C1/#000000","B", "3", "6", "n","inf","[6]","5","","","BI"
];


var designateLQ=["700", "700", "700", "600", "600", "600",
 "580", "580", "580", "580",
 "555", "555", "555", "475", "475",
  "475", "430", "430","430","430","430",
  "400", "400","400"
];

var designateRQ=[
"0","1","10","11","100","101",
"110","111","1000",
"1001","1010","1011",
"1100","1101","1110","1111","10000","10001", "10010","10011","10100",
"10101","10110", "10111"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==36||changeBlackFlag&&blackArmyNo==36){
var nameQ="Light Chariots - EX";//Intelligencia

var qbase = ["#778899","#778899", "#778899"];


var unitsQ=[
  "#778899/#ffffff/#B0C4DE/#000000","D", "1", "4", "n","ch1","o","10","","","CH",
  "#778899/#ffffff/#B0C4DE/#000000","A", "4", "5", "n","ex","3","5","2","1","EX"
];


var designateLQ=["Division", "Division", "Division", "Division", "Division", "Division",
"Brigade", "Brigade", "Brigade", "Brigade", "Brigade", "Brigade",
"Regiment", "Regiment", "Regiment", "Regiment", "Regiment", "Regiment",
"Battalion", "Battalion", "Battalion", "Battalion", "Battalion", "Battalion",
"Company", "Company", "Company", "Company", "Company", "Company"
];

var designateRQ=[
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6",
"1","2","3","4","5","6"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==37||changeBlackFlag&&blackArmyNo==37){
var nameQ="Light Chariots - LT";//Intelligencia

var qbase = ["#FFFFE0","#FFFFE0", "#FFFFE0"];


var unitsQ=[
  "#FFFFE0/#000000/#00FF00/#000000","D", "1", "8", "n","ch1","o","10","","","CH",
  "#FFFFE0/#000000/#00FF00/#000000","A", "2", "8", "n","spear","[4]","5","","","LT"
];


var designateLQ=["Assault", "Assault", "Assault",
"Attack", "Attack", "Attack", "Attack",
"Hold", "Hold", "Hold",
"Defend", "Defend", "Defend", "Defend",
"Garrison", "Garrison", "Garrison", "Garrison"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==38||changeBlackFlag&&blackArmyNo==38){
var nameQ="Spartans";//Intelligencia

var qbase = ["#32CD32","#32CD32", "#32CD32"];


var unitsQ=[
  "#32CD32/#ffffff/#FAF0E6/#000000","A", "3", "6", "n","hspear","6","4","","","PP",
  "#32CD32/#ffffff/#FAF0E6/#000000","Ff", "3", "1", "f","aa","o","5","2","2","BW",
  "#32CD32/#ffffff/#FAF0E6/#000000","Ff", "3", "1", "f","sk","[2]","5","2","1","SK"
];


var designateLQ=["1st", "1st", "1st","3rd",
 "3rd", "3rd" , "4th", "4th",
  "4th", "6th", "6th", "6th","7th", "7th",
"7th", "8th", "8th","8th", "10th",
 "10th", "10th", "11th", "11th"
];

var designateRQ=[
  "1st","3rd","4th","5th",
  "8th","9th", "10th","11th",
  "12th","16th","17th","18th","19th","20th",
  "21st","22nd","24th","32nd","28th",
  "29th","30th","37th","38th"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==39||changeBlackFlag&&blackArmyNo==39){
var nameQ="Normans";//Intelligencia

var qbase = ["#0000CD","#0000CD", "#0000CD"];


var unitsQ=[
  "#0000CD/#ffffff/#66CDAA/#000000","C", "2", "3", "n","cav","[3]","9","","","MC",
  "#0000CD/#ffffff/#66CDAA/#000000","C", "3", "4", "n","cav","[4]","7","","","HC",
  "#0000CD/#ffffff/#66CDAA/#000000","Ff", "3", "2", "f","aa","o","5","2","3","IB"
];


var designateLQ=["Troll", "Ogre", "Gorgon",
 "Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon",
"Troll", "Ogre", "Gorgon","Ogre","Gorgon"
];

var designateRQ=[
  "1","1","1",
  "2","2", "2",
  "3","3","3","4","4","4",
  "5","5","5",
  "6","6"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==40||changeBlackFlag&&blackArmyNo==40){
  var nameQ="Vikings";//single types are 24 pts, armies more points?

  var qbase = ["#7CFC00","#7CFC00", "#7CFC00"];

var unitsQ=[
"#7CFC00/#000000/#FFFACD/#000000","D", "2", "3", "n","vf","4","15","","","VF",
"#7CFC00/#000000/#FFFACD/#000000","B", "2", "6", "n","vk","3","4","","","AX",
"#7CFC00/#000000/#FFFACD/#000000","Ff", "3", "2", "f","aa","o","5","2","3","IB"
];


var designateLQ=["6th", "6th", "6th", "5th", "6th",
 "8th", "8th", "10th", "8th",  "5th",
  "8th", "6th", "10th", "5th", "6th",
   "5th","5th","10th", "8th", "6th",
    "10th"
];

var designateRQ=["1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12", "13", "14",
  "15", "16", "17", "18", "19", "20", "21"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==41||changeBlackFlag&&blackArmyNo==41){
var nameQ="Saxons";//Intelligencia

var qbase = ["#800000","#800000", "#800000"];


var unitsQ=[
"#800000/#ffffff/#FF00FF/#000000","B", "2", "5", "n","sd","4","4","","","SD",
"#800000/#ffffff/#FF00FF/#000000","B", "2", "5", "n","ax","3","4","","","AX",
  "#800000/#ffffff/#FF00FF/#000000","A", "1", "4", "n","inf","2","3","","","MI"
];


var designateLQ=["3rd", "1st", "3rd", "1st", "8th",
 "5th", "3rd", "5th", "5th", "1st", "1st", "1st",
  "3rd", "5th", "3rd", "8th", "5th", "5th", "3rd",
   "1st", "5th", "1st", "3rd", "3rd", "8th"
];

var designateRQ=["1", "1", "2", "2", "1", "1", "3", "2", "3",
 "3", "4", "5", "4", "4", "5", "2", "5", "6",
  "6", "6", "7", "7", "7", "8", "3", "1", "2",
   "3", "4", "5", "6", "7", "8"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==42||changeBlackFlag&&blackArmyNo==42){
var nameQ="Romans";

var qbase = ["#BA55D3","#BA55D3", "#BA55D3"];


var unitsQ=[
"#BA55D3/#ffffff/#9370DB/#ffffff","B", "2", "7", "n","sd","4","4","","","SD",
"#BA55D3/#ffffff/#9370DB/#ffffff","Ff", "3", "3", "f","sk","[2]","5","2","1","SK",
"#BA55D3/#ffffff/#9370DB/#ffffff","C", "1", "2", "n","scout","1","9","","","LC"
];


var designateLQ=["Artillery", "Mobile Artillery", "Infantry", "Infantry", "Infantry",
 "Airborne", "Airborne", "Special Forces", "Special Forces", "Special Forces", "Special Forces",
  "Mechanised", "Armour", "Armour", "Cavalry", "Cavalry", "Armoured Cavalry", "Recon"
];

var designateRQ=["1","2","3","4","5",
"7","8","9",
"10","11","12",
"13","14","15","16","6", "17","18"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==43||changeBlackFlag&&blackArmyNo==43){
var nameQ="Pike and Shot";

var qbase = ["#7B68EE","#7B68EE", "#7B68EE"];


var unitsQ=[
  "#7B68EE/#ffffff/#3CB371/#ffffff","A", "3", "4", "n","hspear","6","4","","","PP",
  "#7B68EE/#ffffff/#3CB371/#ffffff","Ff", "3", "4", "f","arq","o","5","2","4","AL"
];


var designateLQ=["Jupiter", "Mars", "Venus", "Pluto", "Titan", "Uranus", "Mars",
 "Mercury", "Pluto", "Jupiter", "Titan", "Saturn", "Uranus", "Mercury",
 "Jupiter", "Titan", "Neptune", "Venus", "Mercury", "Moon", "Moon",
 "Titan", "Titan", "Saturn", "Moon", "Neptune", "Mercury", "Titan"
];

var designateRQ=["1", "1", "1", "1", "1", "1", "2",
 "1", "2", "2", "2","1", "2", "2",
"3", "3", "1", "2", "4", "1", "2",
 "4", "5", "1", "3", "2", "1", "6"
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==44||changeBlackFlag&&blackArmyNo==44){
var nameQ="Henry V";

var qbase = ["#C71585","#C71585", "#C71585"];


var unitsQ=[
  "#C71585/#ffffff/#48D1CC/#000000","Ff", "4", "4", "f","lb","o","5","3","3","LB",
  "#C71585/#ffffff/#48D1CC/#000000","A", "2", "4", "n","hspear","4","3","","","PS"
];


var designateLQ=["Hell Yeah", "Hell Yeah", "Hell Yeah", "Hell Yeah",
"Howzat", "Howzat","Howzat", "Howzat",
 "Who Dat", "Who Dat","Who Dat", "Who Dat",
  "Hell No", "Hell No", "Hell No", "Hell No", "Hell No",
     "H-Force", "H-Force", "H-Force", "H-Force", "H-Force",
     "Hazard", "Hazard", "Hazard", "Hazard", "Hazard"
];

//"Happenstance" , "Hardmen"

var designateRQ=["1", "2", "3", "4",
 "1", "2", "3", "4",
  "1", "2", "3", "4",
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
  "1", "2", "3", "4", "5",
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==45||changeBlackFlag&&blackArmyNo==45){
var nameQ="Arabs";//single types are 24 pts, armies more points?

var qbase = ["#F5FFFA","#F5FFFA", "#F5FFFA"];

var unitsQ=[
  "#F5FFFA/#000000/#FFE4E1/#000000","Mf", "2", "6", "f","hb","o","9","1","2","HB",
  "#F5FFFA/#000000/#FFE4E1/#000000","Mf", "2", "6", "f","hb","2","9","1","1","OC"
];

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==46||changeBlackFlag&&blackArmyNo==46){
var nameQ="Hordes";//single types are 24 pts, armies more points?

var qbase = ["#191970","#191970", "#191970"];

var unitsQ=[
  "#191970/#ffffff/#00FA9A/#000000","A", "1", "16", "n","inf","2","3","","","MI",
  "#191970/#ffffff/#00FA9A/#000000","C", "1", "8", "n","scout","1","9","","","LC"
];

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==47||changeBlackFlag&&blackArmyNo==47){
var nameQ="Mongols";//single types are 24 pts, armies more points?

var qbase = ["#FFE4B5","#FFE4B5", "#FFE4B5"];

var unitsQ=[
  "#FFE4B5/#000000/#FFE4B5/#000000","C", "2", "3", "n","cav","[3]","9","","","MC",
  "#FFE4B5/#000000/#FFE4B5/#000000","C", "3", "2", "n","cav","[4]","7","","","HC",
  "#FFE4B5/#000000/#FFE4B5/#000000","Mf", "2", "6", "f","hb","o","9","1","2","HB"
];

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==48||changeBlackFlag&&blackArmyNo==48){
var nameQ="Angry Mob";//single types are 24 pts, armies more points?

var qbase = ["#FFE4E1","#FFE4E1", "#FFE4E1"];

var unitsQ=[
  "#FFE4E1/#000000/#808000/#ffffff","A", "1", "24", "n","mob","[2]","3","","","mob!"
];//#808000

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==49||changeBlackFlag&&blackArmyNo==49){
var nameQ="Mob";//single types are 24 pts, armies more points?

var qbase = ["#6B8E23","#6B8E23", "#6B8E23"];

var unitsQ=[
  "#6B8E23/#ffffff/#000000/#000000","A", "1", "24", "n","mob","1","3","","","mob"
];//#FFDEAD

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==50||changeBlackFlag&&blackArmyNo==50){
var nameQ="Franks";//single types are 24 pts, armies more points?

var qbase = ["#FFA500","#FFA500", "#FFA500"];

var unitsQ=[
  "#FFA500/#000000/#EEE8AA/#000000","A", "3", "8", "n","ax","3","4","1","1","FR"
];//#FFDEAD

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==51||changeBlackFlag&&blackArmyNo==51){
var nameQ="Legionaires";//single types are 24 pts, armies more points?

var qbase = ["#FF4500","#FF4500", "#FF4500"];

var unitsQ=[
  "#FF4500/#ffffff/#DA70D6/#000000","A", "3", "8", "n","pl","4","4","1","1","PL"
];//#FFDEAD

var designateLQ=["Omicron", "Xi", "Lambda", "Xi", "Xi", "Xi",
 "Omicron", "Lambda", "Xi", "Xi", "Omicron", "Xi", "Xi", "Xi",
  "Omicron", "Xi", "Lambda", "Omicron", "Lambda", "Omicron",
   "Omicron", "Omicron", "Xi", "Lambda", "Lambda", "Xi", "Lambda",
    "Xi",
];

var designateRQ=["1", "1", "1", "2", "3", "4",
 "2", "2", "5", "6", "3", "7", "8",  "9",
  "4", "10", "3", "5", "4", "6",
   "7","8", "11", "5", "6", "12", "7",
   "13"
];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(addSupplyUnitsFlag){
  unitsQ.push(unitsQ[0], "D","0","4","n","trans","o","6","","","WG");
  designateLQ.push("", "", "", "", "", "", "captured", "captured");
  designateRQ.push("1","2","3","4","5","6","1","2");
}

if(addDummyUnitsFlag){
  unitsQ.push(unitsQ[0], "-","0","8","b","blank","","","","","?");
  designateLQ.push("", "", "", "", "", "", "", "");
  designateRQ.push("","","","","","", "", "");
}


if(addAirPowerFlag){
  unitsQ.push(unitsQ[0], "Air Power","0","6","a","air","0","","","","");
  designateLQ.push("Air Power", "Air Power", "Air Power", "Air Power","Air Power", "Air Power");
  designateRQ.push("1","2","3","4","5","6");
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];
/*var blankCode1 = new Array();
var blankCode1 = unitsQ[0];
var blankCode2 = ["0","0","3","b","0","0","0","0"];
var blankCode = blankCode1.concat(blankCode2);
//alert(""+blankCode);
unitsQ = unitsQ+","+blankCode;
alert(""+unitsQ+"                  len="+unitsQ.length+"                  len="+unitsQ.length/noOfItems);
var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}*/
}
else{var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","A's VPx1","-","1","x", "<VP x1", "side A", "", "VP","x1", "",
"#ffaaaa/#000000/#ffffff/#000000","A's VPx10","-","1","x", "<VP x10", "side A", "", "VP","x10", "",
"#dddddd/#000000/#ffffff/#000000","B's VPx1","-","1","x", "<VP x1", "side B", "", "VP","x1", "",
"#dddddd/#000000/#ffffff/#000000","B's VPx10","-","1","x", "<VP x10", "side B", "", "VP","x10", "",
"#aaffaa/#000000/#ffffff/#000000", "GAME TURN","-","1","x", "GAME", "TURN", "", "","", "",
"#dddd00/#000000/#ffffff/#000000", "side move","-","1","x", "Side to", "MOVE","", "", "", ""];
  /*
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","R REPLC","1","1","x", "<--R x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R REPLC x10","1","1","x", "<--R x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R Capital","1","1","x", "RED", "CAPITAL", "", "",
"#dddddd/#000000/#ffffff/#000000","B Capital","1","1","x", "BLACK", "CAPITAL", "", "",
"#aaffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}
*/
}
if(changeRedFlag){
 nameA = nameQ;
/*
 Abase = qbase;

 unitsA1 = unitsQ;
 unitsA = unitsA1+unitsA2+unitsN;

  designateLA1 = designateLQ;
  designateRA1 = designateRQ;
*/
Abase = [];
for (const item of qbase) {
  Abase.push(item);
}
unitsA1 = [];
for (const item of unitsQ) {
  unitsA1.push(item);
}
designateLA1 = [];
designateRA1 = [];
for (const item of designateLQ) {
  designateLA1.push(item);
}
for (const item of designateRQ) {
  designateRA1.push(item);
}
  designateLA = designateLA1.concat(designateLA2);
  designateRA = designateRA1.concat(designateRA2);

unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("3:"+unitsA);

    sideA1 = [];
    for (const item of sideQ) {
      sideA1.push(item);
    }
    sideA = sideA1.concat(sideA2);
//alert(""+unitsA)
}
else if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function findArmiesBlackBlank(){

if(changeBlackFlag){
var nameQ="";

var qbase = ["#355e43","#355e43", "#355e43"];


var unitsQ=[
"#355e43/#ffffff/#b0dd98/#355e43","Phalanx","14","0","n","arm","11"," 6","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Marine and Mountain","7","0","n","sf","2"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Vertical Invaders","3","0","n","para","2"," 3","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Hoorsemen","5","0","n","cav","3"," 5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Warriors","2","0","n","inf","3"," 2","xx",
"#355e43/#ffffff/#b0dd98/#355e43","supply","0","0","n","supply","0"," 10","xx"

];


var designateLQ=[
];

var designateRQ=[
];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

if(printArmiesFlag){
var unitsN = [
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","0","x", "GAME", "TURN", "", ""];}
else{
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","A REPLC","1","1","x", "<--A x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","A REPLC x10","1","1","x", "<--A x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}


if(changeBlackFlag){
  //alert(""+nameQ)
 nameB = nameQ;
/*
 Bbase = qbase;

 unitsA2 = unitsQ;

  designateLA2 = designateLQ;
  designateRA2 = designateRQ;
 */
 Bbase = [];
 for (const item of qbase) {
   Bbase.push(item);
 }
 unitsA2 = [];
 for (const item of unitsQ) {
   unitsA2.push(item);
 }
 designateLA2 = [];
 designateRA2 = [];
 for (const item of designateLQ) {
   designateLA2.push(item);
 }
 for (const item of designateRQ) {
   designateRA2.push(item);
 }
   designateLA = designateLA1.concat(designateLA2);
   designateRA = designateRA1.concat(designateRA2);
 unitsA = unitsA1.concat(unitsA2,unitsN);
    //alert("4:"+unitsA);
        sideA2 = [];
        for (const item of sideQ) {
          sideA2.push(item);
        }
        sideA = sideA1.concat(sideA2);

}
    //alert("4:"+unitsA);

}

function supplyUnitsYesNo(){
  if(addSupplyUnitsFlag){
    addSupplyUnitsFlag=false;
    document.getElementById('btnSupply').innerText="Supply Units - No";
  }
  else{
    addSupplyUnitsFlag=true;
    document.getElementById('btnSupply').innerText="Supply Units - Yes";
  }
}

function blankUnitsYesNo(){
  if(addDummyUnitsFlag){
    addDummyUnitsFlag=false;
    document.getElementById('btnBlank').innerText="Blank Units - No";
  }
  else{
    addDummyUnitsFlag=true;
    document.getElementById('btnBlank').innerText="Blank Units - Yes";
  }
}


function airUnitsYesNo(){
  if(addAirPowerFlag){
    addAirPowerFlag=false;
    document.getElementById('btnAir').innerText="Air Units - No";
  }
  else{
    addAirPowerFlag=true;
    document.getElementById('btnAir').innerText="Air Units - Yes";
  }
}
