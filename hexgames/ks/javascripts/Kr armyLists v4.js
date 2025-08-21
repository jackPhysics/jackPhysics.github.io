
var redArmyMax = 64;
var blackArmyMax = 64;
var addSupplyUnitsFlag = false;
if(printArmiesFlag){addSupplyUnitsFlag = true;}
var addDummyUnitsFlag = false;
var addAirPowerFlag = false;
var addDepotUnitsFlag = false;

var allTheArmiesA = ["Republic of Red","United Black", "Sky Blue Social Democracy", "Green Jacket Junta",
 "Purple Reign", "Orange Orthodoxy", "Blue-Steel Legions","Guardians of the Green Grasslands",
"Cerulean Combined Clans", "Spearmint State", "Dune Democracy", "United Ultraviolet", "Democratic Blue",
"Fuchsia Fascists of Florida","The Scarlet Shires", "The Lavender Lands", "Plum Patriarchy",
"Khaki Marines", "Violet Valley Vassals", "Watermelon Micronations", "Ancient Armies Alliance",
"Dusty DAK", "Dusty DAK '43", "Edelweiss Eight Army", "Eight Army - Olive", "Eight Army - Olive - Late '42",
"Barbarossa Berry", "Barbarossa Black", "Frozen North All-Fours", "Fiery 4x4 Fields", "Countdown Country",
"Evergreen Even Eden", "Ochlocratic Order of Odd Overlords", "Silvery Moon Meritocracy",
"Rainbow Warriors", "Synthetic Technocracy Spectrum of States", "Infantry-only Indigo Intellectuals",
"Ivory Invisible Forces Intelligencia", "Firebrick Feudal Fallschirmjager",  "Maroon Great-Hate Mandate",
"Golden Ground Troops Government in Exile", "Day-Glo Dukedom", "Countdown Country #2",
"Green Dream Planeteers", "Goldbrick Graduates of Greater Gondwanaland", "Silverbacked Statists",
"HiLo Holistic Hotpink Honeydew Hegemony", "FastSlo Fantastically Floral Federalists",
"Crimson Celerity Cooperative","Zoetic zapping Zombie Hordes","Universal Church", "London Underground",
"Lost Souls","Armoured Fist", "Die Rolling Dystopians", "Coral Combat Committed Caeserian Confederation",
"Sea-Green Route 66 Convoy", "Seviche Seventeen Servants Severalty", "Geranium Giant Gentry",
"Gray Castles across the Borderland","Godzilla", "Blue Forts across the Frontier",
"Simply Infantry", "5 Large Units"];

function findArmies(){

if(changeRedFlag&&redArmyNo==0||changeBlackFlag&&blackArmyNo==1){
var nameQ="Republic of Red";

var qbase = ["#ff0000","#ff0000", "#ff0000"];


var unitsQ=[
  "#ff0000/#ffffff/#ff0000/#ffffff","Armor", "11", "6", "n","arm","8","6","x",
  "#ff0000/#ffffff/#ff0000/#ffffff","Special Forces", "8", "3", "n","sf","4","4","x",
  "#ff0000/#ffffff/#ff0000/#ffffff","Paratroops", "5", "3", "n","para","4","3","||",
  "#ff0000/#ffffff/#ff0000/#ffffff","Infantry", "5", "9", "n","inf","4","4","x",
  "#ff0000/#ffffff/#ff0000/#ffffff","Supply","0","0", "n","supply","0","10","||",
  "#ff0000/#ffffff/#ff0000/#ffffff","blank", "0", "0", "b","blank","0","0","-"
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
var nameQ="United Black";

var qbase = ["#000000","#000000", "#000000"];


var unitsQ=[
  "#000000/#ffffff/#000000/#ffffff","Mechanised", "10", "8", "n","mech","8","5","x",
  "#000000/#ffffff/#000000/#ffffff","Special Forces", "10", "5", "n","sf","6","4","x",
  "#000000/#ffffff/#000000/#ffffff","Paratroops", "4", "2", "n","para","3","3","||",
  "#000000/#ffffff/#000000/#ffffff","Infantry", "4", "3", "n","inf","3","4","x",
  "#000000/#ffffff/#000000/#ffffff","Supply","0","0", "n","supply","0","10","||",
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
var nameQ="Sky Blue Social Democracy";

var qbase = ["#54ffff","#54ffff", "#54ffff"];


var unitsQ=[
"#54ffff/#000000/#bcf2cb/#000000","Artillery","9","3","n","art","10","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","Armor","14","3","n","arm","13","4","xx",
"#54ffff/#000000/#bcf2cb/#000000","Special Forces","9","3","n","sf","6","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Paratroops","3","3","n","para","2","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","3","7","n","inf","3","3","xx",
"#54ffff/#000000/#bcf2cb/#000000","Infantry","6","4","n","inf","7","2","xx",
"#54ffff/#000000/#bcf2cb/#000000","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["Alpha", "Bravo", "Charlie", "Delta", "Golf", "Alpha", "Bravo", "Alpha",
 "Bravo", "Charlie", "Delta", "Echo", "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
  "Alpha", "Bravo", "Charlie", "Delta", "Echo"
];

var designateRQ=[
"1", "1", "1", "1", "1", "2", "2", "3", "3", "2",
 "2", "1", "4", "4", "3", "3", "2", "1", "5",
 "5", "4", "4", "3"];


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
var nameQ="Green Jacket Junta";

var qbase = ["#538115","#538115", "#538115"];


var unitsQ=[
"#538115/#ffffff/#69d97d/#538115","Artillery","8","2","n","art","9","2","xx",
"#538115/#ffffff/#69d97d/#538115","Armor","14","3","n","arm","11","6","xx",
"#538115/#ffffff/#69d97d/#538115","Special Forces","8","4","n","sf","3","5","xx",
"#538115/#ffffff/#69d97d/#538115","Paratroops","3","5","n","para","2","3","xx",
"#538115/#ffffff/#69d97d/#538115","Infantry","3","15","n","inf","2","4","xx",
"#538115/#ffffff/#69d97d/#538115","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=[
  "Territorial", "Reserve", "Territorial", "", "Mercenary",
  "Territorial", "Reserve", "Mercenary", "", "Reserve",
  "Territorial", "", "Territorial", "", "", "Territorial",
  "Territorial", "", "", "Mercenary", "Mercenary", "Territorial",
  "Territorial", "Territorial", "Reserve", "Reserve", "Territorial",
  "Mercenary", ""
];

var designateRQ=[
 "1", "2", "3", "4", "5", "6",
 "7", "8", "9", "10", "11", "12",
 "13", "14", "15", "16", "17",
 "18", "19", "20", "21", "22",
 "23", "24", "25", "26", "27",
 "28", "29"
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
var nameQ="Purple Reign";

var qbase = ["#6870fe","#6870fe", "#6870fe"];


var unitsQ=[
  "#6870fe/#ffd700/#d823e0/#ffd700","Armor","14","3","n","arm","10","7","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Special Forces","7","5","n","sf","3","4","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Paratroops","6","3","n","para","4","4","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Infantry","6","5","n","inf","4","5","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Infantry","5","5","n","inf","6","2","xx",
  "#6870fe/#ffd700/#d823e0/#ffd700","Supply","0","0","n","supply","0","10","xx"
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
var nameQ="Orange Orthodoxy";

var qbase = ["#ff7f00","#ff7f00", "#ff7f00"];


var unitsQ=[
  "#ff7f00/#000000/#ff7f00/#000000","Armor","9","5","n","arm","9","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Special Forces","11","3","n","sf","8","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Paratroops","3","5","n","para","2","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Infantry","5","7","n","inf","2","6","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Infantry","2","11","n","inf","2","3","xx",
  "#ff7f00/#000000/#ff7f00/#000000","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["Invade", "Invade", "Charge", "Invade", "Siege", "Patrol", "Hold", "Patrol",
 "Hold", "Repel", "Siege", "Hold", "Patrol", "Hold", "Patrol", "Patrol", "Invade", "Hold",
  "Repel", "Hold", "Charge", "Charge", "Repel", "Repel", "Repel", "Siege", "Invade", "Repel",
   "Siege", "Invade", "Repel"];

var designateRQ=["1", "2", "1", "3", "1", "1", "1", "2", "2", "1", "2",
"3", "3", "4", "4", "5", "4", "5", "2", "6", "2", "3", "3", "4", "5",
 "3", "5", "6", "4", "6", "7"];


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
var nameQ="Blue-Steel Legions";

var qbase = ["#2135b5","#2135b5", "#2135b5"];


var unitsQ=[
  "#2135b5/#ffffff/#443a3f/#ffffff","Mechanised","9","3","n","mech","7","5","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Mechanised","11","1","n","mech","8","6","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Special Forces","7","5","n","sf","4","3","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Paratroops","3","5","n","para","2","3","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Infantry","8","4","n","inf","7","4","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Infantry","3","10","n","inf","2","4","xx",
  "#2135b5/#ffffff/#443a3f/#ffffff","Supply","0","0","n","supply","0","10","xx"
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
var nameQ="Guardians of the Green Grasslands";

var qbase = ["#00ff11","#00ff11", "#00ff11"];


var unitsQ=[
"#00ff11/#000000/#5b817e/#000000","Mechanised","11","3","n","mech","8","6","xx",
"#00ff11/#000000/#5b817e/#000000","Special Forces","9","2","n","sf","4","5","xx",
"#00ff11/#000000/#5b817e/#000000","Paratroops","5","3","n","para","6","1","xx",
"#00ff11/#000000/#5b817e/#000000","Cavalry","3","15","n","cav","1","5","xx",
"#00ff11/#000000/#5b817e/#000000","Infantry","3","13","n","inf","2","4","xx",
"#00ff11/#000000/#5b817e/#000000","Supply","0","0","n","supply","0","10","xx"
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
var nameQ="Cerulean Combined Clans";

var qbase = ["#0035ff","#0035ff", "#0035ff"];


var unitsQ=[
"#0035ff/#ffffff/#6b1583/#ffffff","S.P.A.","13","4","n","spa","12","4","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Special Forces","8","4","n","sf","5","3","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Paratroops","5","4","n","para","5","2","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Cavalry","4","8","n","cav","1","6","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Infantry","2","7","n","inf","2","3","xx",
"#0035ff/#ffffff/#6b1583/#ffffff","Supply","0","0","n","supply","0","10","xx",

];


var designateLQ=["Bear", "Bear", "Wolf", "Swordfish",
  "Bear", "Wolf", "Swordfish",   "Bear",
  "Wolf","Bear", "Wolf", "Swordfish",
   "Thunderbird","Tarantula", "Elk", "Bear",
    "Wolf", "Swordfish", "Bear","Thunderbird",
    "Tarantula", "Elk", "Bear", "Wolf",
     "Swordfish", "Thunderbird", "Tarantula"];

var designateRQ=["1", "2", "3", "4", "5", "6",
"7", "8", "9", "10", "11", "12",
"13", "14", "15", "16", "17",
"18", "19", "20", "21", "22",
"23", "24", "25", "26", "27"];


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
var nameQ="Spearmint State";

var qbase = ["#7aff9b","#7aff9b", "#7aff9b"];


var unitsQ=[
  "#7aff9b/#000000/#6b8b85/#7aff9b","Artillery","8","3","n","art","9","2","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Armored Cavalry","9","3","n","acav","5","7","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Special Forces","7","4","n","sf","4","3","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Paratroops","5","3","n","para","6","1","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Infantry","9","4","n","inf","8","4","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Infantry","5","4","n","inf","5","3","xx",
  "#7aff9b/#000000/#6b8b85/#7aff9b","Supply","0","0","n","supply","0","10","xx",

];


var designateLQ=["II", "VI", "I", "II", "VI", "I", "II",
 "VI", "I", "II", "II", "VI", "I", "II", "VI", "I",
  "II", "II", "VI", "I", "II"
];

var designateRQ=["1", "1", "1", "2", "2", "2", "3", "3", "3",
 "4", "5", "4", "4", "6", "5", "5", "7", "8", "6", "6",
  "9",
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
var nameQ="Dune Democracy";

var qbase = ["#ebec87","#ebec87", "#ebec87"];


var unitsQ=[
  "#ebec87/#000000/#de958f/#ebec87","Mechanised","8","4","n","mech","6","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Armor","11","2","n","arm","7","7","xx",
"#ebec87/#000000/#de958f/#ebec87","Special Forces","7","4","n","sf","2","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Paratroops","3","3","n","para","3","2","xx",
"#ebec87/#000000/#de958f/#ebec87","Mountain Troops","7","5","n","mount","3","5","xx",
"#ebec87/#000000/#de958f/#ebec87","Infantry","6","4","n","inf","7","2","xx",
"#ebec87/#000000/#de958f/#ebec87","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="United Ultraviolet";

var qbase = ["#6870fe","#6870fe", "#6870fe"];


var unitsQ=[
  "#6870fe/#000000/#d823e0/#000000","Armor","14","3","n","arm","10","7","xx",
  "#6870fe/#000000/#d823e0/#000000","Special Forces","7","5","n","sf","3","4","xx",
  "#6870fe/#000000/#d823e0/#000000","Paratroops","6","3","n","para","4","4","xx",
  "#6870fe/#000000/#d823e0/#000000","Infantry","6","5","n","inf","4","5","xx",
  "#6870fe/#000000/#d823e0/#000000","Infantry","5","5","n","inf","6","2","xx",
  "#6870fe/#000000/#d823e0/#000000","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Democratic Blue";

var qbase = ["#0000ba","#0000ba", "#0000ba"];


var unitsQ=[
  "#0000ba/#ffffff/#000087/#ffffff","Mechanised","9","8","n","mech","7","5","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Special Forces","7","4","n","sf","3","4","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Paratroops","6","5","n","para","7","1","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Infantry","5","2","n","inf","4","4","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Infantry","5","2","n","inf","5","3","xx",
  "#0000ba/#ffffff/#000087/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["7th", "7th", "7th", "7th", "1st", "1st", "1st", "1st","4th", "4th", "4th", "4th",
 "8th", "8th", "8th", "8th", "8th", "10th", "10th", "3rd", "3rd"
];

var designateRQ=[
  "1","2","3","4","5","6",
  "7","8","9",
  "10","11","12",
  "13","14","15","16","17","18","19","20","21"];


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
var nameQ="Fuchsia Fascists of Florida";

var qbase = ["#ff00af","#ff00af", "#ff00af"];


var unitsQ=[
  "#ff00af/#000000/#d4e6cb/#ff00af","Armor","13","2","n","arm","11","5","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Special Forces","11","2","n","sf","7","4","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Paratroops","6","2","n","para","6","2","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Infantry","9","8","n","inf","9","3","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Infantry","2","9","n","inf","3","2","xx",
  "#ff00af/#000000/#d4e6cb/#ff00af","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Vulture", "Worm", "Worm", "Viper", "Viper", "Viper", "Snake",
 "Viper", "Snake", "Viper", "Vulture", "Viper", "Piranha", "Viper", "Vulture", "Rat", "Viper",
  "Piranha", "Viper", "Viper", "Rat", "Worm", "Viper"
];

var designateRQ=["1", "1", "2", "1", "2", "3", "1", "4",
 "2", "5", "2", "6", "1", "7", "3", "1", "8", "2", "9",
 "10", "2", "3", "11"];


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
var nameQ="The Scarlet Shires";

var qbase = ["#ff00af","#ff00af", "#ff00af"];


var unitsQ=[
  "#ff003b/#000000/#44ece3/#ff003b","Mechanised","9","6","n","mech","7","5","xx",
"#ff003b/#000000/#44ece3/#ff003b","Special Forces","10","2","n","sf","7","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Paratroops","5","3","n","para","4","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Infantry","9","5","n","inf","9","3","xx",
"#ff003b/#000000/#44ece3/#ff003b","Scout","2","8","n","scout","1","4","xx",
"#ff003b/#000000/#44ece3/#ff003b","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Bronze", "Lead", "Bronze", "Iron", "Helium", "Bronze",
 "Bronze", "Helium",  "Iron", "Sulphur", "Helium", "Helium",
 "Iron", "Bronze", "Sulphur",   "Sulphur", "Sulphur", "Iron",
  "Lead", "Sulphur", "Helium", "Iron", "Helium","Bronze"
];

var designateRQ=["1", "1", "2", "1", "1", "3",
 "4", "2", "2", "1", "3", "4",
  "3", "5", "2", "3", "4", "4",
   "2", "5", "5", "5", "6",  "6"
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
var nameQ="The Lavender Lands";

var qbase = ["#7b3dff","#7b3dff", "#7b3dff"];


var unitsQ=[
  "#7b3dff/#ffffff/#88e578/#7b3dff","Armor","14","2","n","arm","9","8","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Special Forces","11","2","n","sf","8","3","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Paratroops","4","4","n","para","3","3","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Infantry","5","9","n","inf","3","5","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Militia","3","13","n","inf","2","4","xx",
  "#7b3dff/#ffffff/#88e578/#7b3dff","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Plum Patriarchy";

var qbase = ["#74225f","#74225f", "#74225f"];


var unitsQ=[
  "#74225f/#ffffff/#9788ce/#ffffff","Mechanised","11","5","n","spa","8","6","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Special Forces","8","43","n","sf","4","4","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Paratroops","5","3","n","para","4","3","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Cavalry","5","4","n","cav","2","6","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Infantry","4","7","n","inf","5","2","xx",
  "#74225f/#ffffff/#9788ce/#ffffff","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Tan", "White", "Orange", "Tan", "White", "Tan", "White",
 "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange", "Tan", "White",
  "Orange", "Tan", "White", "Orange", "Tan", "White", "Orange"
];

var designateRQ=["1", "1", "1", "2", "2", "3", "3", "2", "4", "4", "3", "5",
 "5", "4", "6", "6", "5", "7", "7", "6", "8", "8", "7"
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
var nameQ="Khaki Marines";

var qbase = ["#2d3200","#2d3200", "#2d3200"];


var unitsQ=[
  "#2d3200/#ffffff/#8e6311/#2d3200","Armor","13","1","n","arm","11","5","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Mechanised","13","3","n","mech","8","8","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Special Forces","7","4","n","sf","3","4","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Paratroops","6","3","n","para","5","3","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Marines","4","8","n","mar","2","4","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Infantry","4","5","n","inf","4","3","xx",
  "#2d3200/#ffffff/#8e6311/#2d3200","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["6th", "6th", "10th", "10th", "4th", "4th",
 "5th", "5th", "4th", "5th", "9th","4th", "4th", "5th", "5th", "9th", "9th", "4th", "5th", "9th", "9th",
 "6th", "6th", "10th"];

var designateRQ=["637th", "611st", "188th", "153rd", "683rd", "243rd",
 "636th", "745th", "381st", "673rd", "685th", "448th",
  "387th", "131st", "382nd", "369th", "315th", "532nd",
   "936th", "835th", "423rd", "1st", "2nd", "3rd"
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
var nameQ="Violet Valley Vassals";

var qbase = ["#ae61b9","#ae61b9", "#ae61b9"];


var unitsQ=[
"#ae61b9/#ffffff/#511da7/#ae61b9","Mechanised","11","5","n","mech","7","7","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Special Forces","10","3","n","sf","4","6","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Airborne","5","4","n","para","4","3","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Infantry","3","15","n","inf","3","3","xx",
"#ae61b9/#ffffff/#511da7/#ae61b9","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Orion", "Horatio", "Meneleus", "Patroclus", "Diomedes", "Anneas", "Hippolyta", "Diomedes",
"Anneas", "Agamemnon", "Meneleus", "Meneleus", "Orion", "Agamemnon", "Diomedes", "Hippolyta",
 "Horatio","Anneas", "Anneas", "Patroclus", "Paris", "Paris", "Orion", "Hippolyta",
  "Meneleus", "Heracles", "Atalanta"
];

var designateRQ=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
"12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
"24", "25", "26", "27"
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
var nameQ="Watermelon Micronations";

var qbase = ["#f64b84","#f64b84", "#f64b84"];


var unitsQ=[
"#f64b84/#ffffff/#56d046/#ffffff","Tanks","12","1","n","arm","10","5","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Mechanised","10","4","n","mech","7","6","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Elite Infantry","8","4","n","sf","4","4","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Airlanding","3","5","n","para","2","3","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Motorised Infantry","6","2","n","motor","2","7","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Infantry","3","7","n","inf","3","3","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Militia","2","9","n","inf","3","2","xx",
"#f64b84/#ffffff/#56d046/#ffffff","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Ancient Armies Alliance";

var qbase = ["#355e43","#355e43", "#355e43"];


var unitsQ=[
"#355e43/#ffffff/#b0dd98/#355e43","Phalanx","14","2","n","arm","11","6","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Marine and Mountain","7","7","n","sf","2","5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Vertical Invaders","3","5","n","para","2","3","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Horsemen","5","6","n","cav","3","5","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Warriors","2","14","n","inf","3","2","xx",
"#355e43/#ffffff/#b0dd98/#355e43","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Spartans", "Spartans", "Athenians", "Athenians",
"Athenians", "Athenians", "Athenians", "Athenians", "Athenians",
"Cartaginians", "Cartaginians", "Cartaginians", "Cartaginians",
"Cartaginians", "Persians", "Persians", "Persians", "Persians",
"Persians", "Persians", "Amazons", "Amazons", "Amazons", "Amazons",
"Amazons", "Amazons", "Amazons", "Amazons", "Amazons", "Amazons",
"Etruscans", "Etruscans", "Etruscans", "Etruscans"
];

var designateRQ=["716th", "224th", "212nd", "263th", "915th", "487th",
"487th", "452nd", "371st", "581st", "112nd", "333th", "657th", "583th",
"722nd", "231st", "183th", "798th", "527th", "771st", "427th", "566th",
"496th", "887th", "312nd", "898th", "375th", "914th", "935th", "592nd",
"335th", "573th", "676th", "825th", "938th", "979th", "636th", "261st"
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
var nameQ="Dusty DAK";

var qbase = ["#d2b48c","#8b4513", "#d2b48c"];


var unitsQ=[
"#d2b48c/#000000/#8b4513/#ffffff","Rommel","3","0","n","hq","0","6","xxxx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzer","11","2","n","arm","7","7","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Tanks","7","2","n","arm","4","6","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzergrenadier", "7", "2", "n","mech","3","7","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Mechanised", "6", "1", "n","mech","3","6","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Recon", "7", "3", "n","acav","2","8","||",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","6","1","n","para","4","4","x",
"#8b4513/#ffffff/#d2b48c/#000000","Paratroops","3","1","n","para","1","4","x",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","6","1","n","inf","3","6","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","5","2","n","inf","2","6","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Special Forces","6","3","n","sf","2","4","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","3","6","n","inf","2","4","xx",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","4","3","n","mount","2","3","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["21", "15", "Italian", "Italian",
"21", "15", "Italian", "21", "15", "90",
 "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["5", "8", "Ariete", "Littorio",
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
var nameQ="Dusty DAK '43";

var qbase = ["#d2b48c","#8b4513", "#d2b48c"];


var unitsQ=[
"#d2b48c/#000000/#8b4513/#ffffff","Rommel","3","0","n","hq","0","6","xxxx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzer","9","3","n","arm","7","5","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Tanks","5","2","n","arm","4","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Panzergrenadier", "5", "4", "n","mech","3","5","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Mechanised", "4", "1", "n","mech","3","4","xx",
"#8b4513/#ffffff/#d2b48c/#000000","Mechanised", "4", "1", "n","mech","3","4","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Recon", "5", "4", "n","acav","2","6","||",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","7","1","n","para","5","4","x",
"#d2b48c/#000000/#8b4513/#ffffff","Paratroops","6","1","n","para","4","4","x",
"#8b4513/#ffffff/#d2b48c/#000000","Paratroops","3","1","n","para","1","4","x",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","4","1","n","inf","3","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Infantry","3","2","n","inf","2","4","|||",
"#d2b48c/#000000/#8b4513/#ffffff","Special Forces","6","3","n","sf","2","4","|||",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","2","6","n","inf","2","3","xx",
"#8b4513/#ffffff/#d2b48c/#000000","Infantry","1","3","n","mount","2","2","xx",
"#d2b48c/#000000/#8b4513/#ffffff","Supply","0","0","n","supply","0","10","xx"
];


var designateLQ=["21", "15", "10", "Italian", "Italian",
"21", "15", "10", "10", "HG", "Italian", "21", "15", "10", "90",
 "HG", "",  "Italian", "90",
 "90", "90", "164", "164", "164",
  "Italian", "Italian", "Italian", "Italian", "Italian",
  "Italian", "Italian", "Italian", "Italian"
];

var designateRQ=["5", "8", "7", "Ariete", "Littorio",
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
  var nameQ="Edelweiss Eight Army";

  var qbase = ["#ffffff","#ffffff", "#ffffff"];


  var unitsQ=[
  "#ffffff/#000080/#ffff00/#000080","Tanks","5","4","n","arm","4","4","x",
  "#ffffff/#000080/#ffff00/#000080","Tanks","4","2","n","arm","3","4","x",
  "#ffffff/#000080/#ffff00/#000080","Tanks","3","2","n","arm","2","4","x",
  "#ffffff/#000080/#ffff00/#000080","Mechanised", "4", "1", "n","mech","3","4","x",
  "#ffffff/#000080/#ffff00/#000080","Infantry","2","3","n","inf","2","3","x",
  "#ffffff/#000080/#ffff00/#000080","Motor","6","3","n","sf","2","4","x",
  "#ffffff/#000080/#ffff00/#000080","Recce", "4", "2", "n","acav","1","6","||",
  "#ffffff/#000080/#ffff00/#000080","Special Group", "5", "2", "n","sf","1","4","||",
  "#ffffff/#000080/#ffff00/#000080","Infantry","1","31","n","inf","1","3","x",
  "#ffffff/#000080/#ffff00/#000080","Infantry","2","3","n","mount","1","2","x",
  "#ffffff/#000080/#ffff00/#000080","Motor","5","2","n","sf","1","4","x",
  "#ffffff/#000080/#ffff00/#000080","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#ffffff/#000080/#ffff00/#000080","Special Air Service","5","1","n","para","1","6","x",
  "#ffffff/#000080/#ffff00/#000080","Supply","0","0","n","supply","0","10","xx"
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
  var nameQ="Eight Army - Olive";

  var qbase = ["#6b8e23","#6b8e23", "#6b8e23"];


  var unitsQ=[
  "#6b8e23/#000000/#ffff00/#000000","Tanks","5","4","n","arm","4","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","4","2","n","arm","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","3","2","n","arm","2","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Mechanised", "4", "1", "n","mech","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","inf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","6","3","n","sf","2","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Recce", "4", "2", "n","acav","1","6","||",
  "#6b8e23/#000000/#ffff00/#000000","Special Group", "5", "2", "n","sf","1","4","||",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","1","31","n","inf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","mount","1","2","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","5","2","n","sf","1","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Air Service","5","1","n","para","1","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Supply","0","0","n","supply","0","10","xx"
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
  var nameQ="Eight Army - Olive - Late '42";

  var qbase = ["#6b8e23","#6b8e23", "#6b8e23"];


  var unitsQ=[
  "#6b8e23/#000000/#ffff00/#000000","Tanks","7","2","n","arm","5","5","x",
  "#6b8e23/#000000/#ffff00/#000000","Tanks","5","4","n","arm","4","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Mechanised", "4", "1", "n","mech","3","4","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","2","3","n","inf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","5","3","n","sf","2","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Recce", "4", "2", "n","acav","1","6","||",
  "#6b8e23/#000000/#ffff00/#000000","Special Group", "2", "2", "n","sf","1","4","||",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","4","4","n","inf","4","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","1","18","n","inf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Infantry","3","3","n","mount","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Motor","2","2","n","sf","1","3","x",
  "#6b8e23/#000000/#ffff00/#000000","Long Range Desert Group","9","1","n","sf","1","8","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Air Service","6","1","n","para","1","7","x",
  "#6b8e23/#000000/#ffff00/#000000","Special Boat Service","5","1","n","mar","1","6","x",
  "#6b8e23/#000000/#ffff00/#000000","Supply","0","0","n","supply","0","10","xx"
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
  var nameQ="Barbarossa Berry";

  var qbase = ["#9999bb","#9999bb", "#9999bb"];


  var unitsQ=[
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "2", "0", "n","inf","3","2","xxx",
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "3", "10", "n","inf","4","2","xxx",
"#9999bb/#000000/#9999bb/#000000", "German inf corps", "5", "5", "n","inf","5","3","xxx",
"#9999bb/#000000/#9999bb/#000000", "German motor corps", "5", "1", "n","mech","3","5","xxx",
"#9999bb/#000000/#9999bb/#000000", "German motor corps", "6", "4", "n","mech","4","5","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "7", "4", "n","arm","6","4","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "9", "2", "n","arm","7","5","xxx",
"#9999bb/#000000/#9999bb/#000000", "German panzer corps", "10", "2", "n","arm","8","5","xxx",
"#9999bb/#000000/#9999bb/#000000","Supply","0","0","n","supply","0","10",""

  ];

    var designateLQ=[ "28", "27",
      "26", "25", "24", "23", "22", "21", "20", "19","18", "17",
       "16", "15", "14", "13", "12", "11", "10", "9", "8", "7",
        "6", "5", "4", "3", "2", "1"
    ];

    var designateRQ=[ "55", "29",
      "48", "4", "43", "3R", "4R", "5R", "26", "28", "2", "LR",
       "2R", "10", "3", "43", "53", "5", "44", "46", "6R", "24",
        "33", "55", "14", "42", "41", "57"];

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
  var nameQ="Barbarossa Black";

  var qbase = ["#000005","#000005", "#000005"];


  var unitsQ=[
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "3", "0", "n","inf","3","3","xxx",
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "5", "10", "n","inf","4","4","xxx",
"#000005/#ffffff/#9999bb/#000000", "German inf corps", "6", "4", "n","inf","5","4","xxx",

"#000005/#ffffff/#9999bb/#000000", "German motor corps", "6", "2", "n","mech","3","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German motor corps", "7", "2", "n","mech","4","6","xxx",

"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "9", "2", "n","arm","6","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "10", "1", "n","arm","7","6","xxx",
"#000005/#ffffff/#9999bb/#000000", "German panzer corps", "11", "2", "n","arm","8","6","xxx",
"#000005/#ffffff/#9999bb/#000000","Supply","0","0","n","supply","0","10",""

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
var nameQ="Frozen North All-Fours";

var qbase = ["#e0ffff","#e0ffff", "#e0ffff"];


var unitsQ=[
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Armoured Cars","9","4","n","acav","4","8","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Mechanised Infantry","7","5","n","mech","4","6","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Special Forces","7","4","n","sf","4","3","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Paratroops","4","4","n","para","4","2","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Infantry","5","7","n","inf","4","4","xx",
  "#e0ffff/#0000cd/#e0ffff/#0000cd","Supply","0","0","n","supply","0","10","xx",

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
var nameQ="Fiery 4x4 Fields";

var qbase = ["#ff8c00","#ff8c00", "#ff8c00"];


var unitsQ=[
  "#ff8c00/#000000/#ffff00/#ff0000","Light Tanks","5","5","n","arm","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Special Forces","8","6","n","sf","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Paratroops","6","6","n","para","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Infantry","5","8","n","inf","4","4","xx",
"#ff8c00/#000000/#ffff00/#ff0000","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Countdown Country";

var qbase = ["#fffffd","#fffffd", "#fffffd"];


var unitsQ=[
  "#fffffd/#000000/#ffffff/#000000","Artillery","8","1","n","art","10","1","xx",
  "#fffffd/#000000/#ffffff/#000000","Mobile Artillery","8","1","n","spa","9","2","xx",
  "#fffffd/#000000/#ffffff/#000000","Infantry","8","4","n","inf","8","3","xx",
  "#fffffd/#000000/#ffffff/#000000","Airborne","9","2","n","para","7","4","xx",
  "#fffffd/#000000/#ffffff/#000000","Special Forces","11","4","n","sf","6","5","xx",
  "#fffffd/#000000/#ffffff/#000000","Mechanised","8","1","n","mech","5","6","xx",
  "#fffffd/#000000/#ffffff/#000000","Armour","8","2","n","arm","4","7","xx",
  "#fffffd/#000000/#ffffff/#000000","Cavalry","8","1","n","cav","3","8","xx",
  "#fffffd/#000000/#ffffff/#000000","Armoured Cavalry","8","1","n","acav","2","9","xx",
  "#fffffd/#000000/#ffffff/#000000","Recon","8","1","n","recon","1","10","xx",
  "#fffffd/#000000/#ffffff/#000000","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Ten", "Nine", "Eight", "Eight", "Eight", "Eight",
 "Seven", "Seven", "Six", "Six", "Six", "Six",
  "Five", "Four", "Four", "Three", "Two", "One"
];

var designateRQ=["1/1","2/1","3/4","4/4","5/4","6/4",
"7/2","8/2","9/4",
"10/4","11/4","12/4",
"13/1","14/2","15/2","16/1","17/1","18/1"
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
var nameQ="Evergreen Even Eden";

var qbase = ["#006400","#006400", "#006400"];


var unitsQ=[
  "#006400/#ffffff/#556b2f/#ffffff","Artillery","10","3","n","art","10","3","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Paratroops","10","3","n","para","8","4","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Special Forces","10","3","n","sf","6","4","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Infantry","7","6","n","inf","4","6","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Light Armour","6","3","n","acav","2","7","xx",
  "#006400/#ffffff/#556b2f/#ffffff","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Ochlocratic Order of Odd Overlords";

var qbase = ["#da70d6","#da70d6", "#da70d6"];


var unitsQ=[
  "#da70d6/#000000/#afeeee/#000000","Tanks","10","3","n","arm","9","4","xx",
  "#da70d6/#000000/#afeeee/#000000","Infantry","8","6","n","inf","7","4","xx",
  "#da70d6/#000000/#afeeee/#000000","Special Forces","10","3","n","sf","5","5","xx",
  "#da70d6/#000000/#afeeee/#000000","Paratroops","6","3","n","para","3","5","xx",
  "#da70d6/#000000/#afeeee/#000000","Cavalry","4","6","n","cav","1","6","xx",
  "#da70d6/#000000/#afeeee/#000000","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Silvery Moon Meritocracy";

var qbase = ["#c0c0c0","#c0c0c0", "#c0c0c0"];


var unitsQ=[
  "#c0c0c0/#000000/#708090/#ffffff","Armour","8","6","n","arm","8","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Infantry","4","5","n","inf","4","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Special Forces","9","5","n","sf","6","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Paratroops","4","4","n","para","3","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Infantry","3","7","n","inf","3","3","xx",
  "#c0c0c0/#000000/#708090/#ffffff","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Rainbow Warriors";

var qbase = ["#000001","#000001", "#000001"];


var unitsQ=[
  "#000001/#ffffff/#ffffff/#000000","not","10","0","n","arm","8","5","xx",
  "#000001/#ffffff/#ff0000/#000000","Armour","10","3","n","arm","8","5","xx",
  "#000001/#ffffff/#ffa500/#000000","Mech","9","3","n","arm","6","6","xx",
  "#000001/#ffffff/#ffff00/#000000","Regular Infantry","5","6","n","inf","4","4","xx",
  "#000001/#ffffff/#00ff00/#000000","Special Forces","8","3","n","sf","4","4","xx",
  "#000001/#ffffff/#00ffff/#000000","Paratroops","4","3","n","para","3","3","xx",
  "#000001/#ffffff/#0000ff/#000000","Reserve Infantry","4","5","n","inf","3","3","xx",
  "#000001/#ffffff/#ee82ee/#000000","Scouts","3","4","n","scout","1","5","xx",
  "#000001/#ffffff/#ffffff/#000000","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Synthetic Technocracy Spectrum of States";

var qbase = ["#fffffe","#fffffe", "#fffffe"];


var unitsQ=[
  "#fffffe/#000000/#ffffff/#000000","not","10","0","n","arm","8","5","xx",
  "#fffffe/#000000/#ff0000/#000000","AI Tanks","11","3","n","arm","9","5","xx",
  "#fffffe/#000000/#ffa500/#000000","Driverless Gun-Trucks","8","3","n","arm","5","6","xx",
  "#fffffe/#000000/#ffff00/#000000","Tracked Robots","6","4","n","inf","4","5","xx",
  "#fffffe/#000000/#00ff00/#000000","Legged Robots","7","3","n","sf","4","3","xx",
  "#fffffe/#000000/#4169e1/#fffffe","Aerial Drones","7","3","n","para","3","5","xx",
  "#fffffe/#000000/#4b0082/#fffffe","Cyborg Zombies","3","5","n","inf","4","2","xx",
  "#fffffe/#000000/#ee82ee/#000000","Scout Drones","4","3","n","scout","1","6","xx",
  "#fffffe/#000000/#ffffff/#000000","Data Bus","0","0","n","supply","0","10","xx"

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
var nameQ="Infantry-only Indigo Intellectuals";//Intelligencia

var qbase = ["#4b0082","#4b0082", "#4b0082"];


var unitsQ=[
  "#4b0082/#ffffff/#4b0082/#ffffff","Imperial Guard","9","6","n","inf","8","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Veterans","7","6","n","inf","6","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Regulars","5","6","n","inf","4","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Militia","3","4","n","inf","2","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Replacements","2","6","n","inf","1","4","xx",
  "#4b0082/#ffffff/#4b0082/#ffffff","Supply","0","0","n","supply","0","10","xx"

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
"1","2","3","4",
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
var nameQ="Ivory Invisible Forces Intelligencia";//Intelligencia

var qbase = ["#fffff0","#fffff0", "#fffff0"];


var unitsQ=[
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","14","3","n","sf","10","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","10","4","n","sf","6","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","8","3","n","sf","4","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","6","4","n","sf","2","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Special Service","5","4","n","sf","1","4","xx",
  "#fffff0/#4b0082/#9acd32/#fffff0","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Firebrick Feudal Fallschirmjager";//Intelligencia

var qbase = ["#b22222","#b22222", "#b22222"];


var unitsQ=[
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","9","4","n","para","8","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","7","4","n","para","6","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","6","6","n","para","5","3","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","6","5","n","para","4","4","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Fallschirmjager","5","4","n","para","3","4","xx",
  "#b22222/#ffffff/#1e90ff/#ffffff","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Maroon Great-Hate Mandate";//Intelligencia

var qbase = ["#800000","#800000", "#800000"];


var unitsQ=[
  "#800000/#ffffff/#ffff00/#800000","Mechanised","10","5","n","arm","8","5","xx",
  "#800000/#ffffff/#ffff00/#800000","Infantry","8","6","n","inf","8","3","xx",
  "#800000/#ffffff/#ffff00/#800000","Special Forces","12","2","n","sf","8","4","xx",
  "#800000/#ffffff/#ffff00/#800000","Paratroops","7","4","n","para","8","1","xx",
  "#800000/#ffffff/#ffff00/#800000","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Golden Ground Troops Government in Exile";//Intelligencia

var qbase = ["#ffd700","#ffd700", "#ffd700"];


var unitsQ=[
  "#ffd700/#000000/#000000/#ffd700","Armoured","10","4","n","arm","8","5","xx",
  "#ffd700/#000000/#000000/#ffd700","Mechanised","10","4","n","mech","7","6","xx",
    "#ffd700/#000000/#000000/#ffd700","Guards","7","3","n","guard","6","4","xx",
    "#ffd700/#000000/#000000/#ffd700","Infantry","4","7","n","inf","4","3","xx",
    "#ffd700/#000000/#000000/#ffd700","Scouts","7","3","n","recon","2","8","xx",
  "#ffd700/#000000/#000000/#ffd700","Supply","0","0","n","supply","0","10","xx"

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
var nameQ="Day-Glo Despotic Dukedom";//Intelligencia

var qbase = ["#a4ff00","#a4ff000", "#a4ff00"];


var unitsQ=[
"#a4ff00/#000000/#a6e3a1/#000000","arm","10","3","n","arm","9","4","xx",
"#a4ff00/#000000/#a6e3a1/#000000","arm","11","2","n","arm","9","5","xx",
"#a4ff00/#000000/#a6e3a1/#000000","sf","7","5","n","sf","4","3","xx",
"#a4ff00/#000000/#a6e3a1/#000000","para","3","6","n","para","3","2","xx",
"#a4ff00/#000000/#a6e3a1/#000000","inf","5","5","n","inf","4","4","xx",
"#a4ff00/#000000/#a6e3a1/#000000","inf","5","4","n","inf","5","3","xx",
"#a4ff00/#000000/#a6e3a1/#000000","supply","0","0","n","supply","0"," 10","xx",


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
var nameQ="Countdown Country #2";

var qbase = ["#123456","#123456", "#123456"];


var unitsQ=[
  "#123456/#fedcba/#654321/#abcdef","Armour","9","2","n","arm","8","4","xx",
  "#123456/#fedcba/#654321/#abcdef","Mechanised","8","2","n","mech","7","4","xx",
  "#123456/#fedcba/#654321/#abcdef","Strike Force","10","2","n","sf","6","4","xx",
  "#123456/#fedcba/#654321/#abcdef","Infantry","7","2","n","inf","5","5","xx",
  "#123456/#fedcba/#654321/#abcdef","Airborne","7","2","n","para","5","4","xx",
  "#123456/#fedcba/#654321/#abcdef","Motorised","7","2","n","mot","4","6","xx",
  "#123456/#fedcba/#654321/#abcdef","Cavalry","8","2","n","cav","3","8","xx",
  "#123456/#fedcba/#654321/#abcdef","Rangers","9","2","n","acav","2","10","xx",
  "#123456/#fedcba/#654321/#abcdef","Scouts","10","2","n","scout","1","12","xx",
  "#123456/#fedcba/#654321/#abcdef","Supply","0","0","n","supply","0","10","xx"

];


var designateLQ=["Head", "Head", "Eyes", "Eyes", "Heart",
 "Heart", "Stomach", "Stomach", "Hands", "Hands", "Hips",
  "Hips", "Knees", "Knees", "Ankles", "Ankles", "Feet", "Feet"
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
var nameQ="Green Dream Planeteers";

var qbase = ["#4edf78","#4edf78", "#4edf78"];


var unitsQ=[
"#4edf78/#000000/#caef67/#000000","Mechanised","8","4","n","mech","6","5","xx",
"#4edf78/#000000/#caef67/#000000","Armour","10","3","n","arm","7","6","xx",
"#4edf78/#000000/#caef67/#000000","Special Forces","11","3","n","sf","7","4","xx",
"#4edf78/#000000/#caef67/#000000","Airborne","5","3","n","para","4","3","xx",
"#4edf78/#000000/#caef67/#000000","Motorised","4","5","n","motor","2","5","xx",
"#4edf78/#000000/#caef67/#000000","Infantry","2","10","n","inf","2","3","xx",
"#4edf78/#000000/#caef67/#000000","supply","0","0","n","supply","0","10","xx",


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
var nameQ="Goldbrick Graduates of Greater Gondwanaland";

var qbase = ["#d39600","#d39600", "#d39600"];


var unitsQ=[
  "#d39600/#ffffff/#79a25e/#d39600","Tank Troops","11","4","n","arm","9","5","xx",
  "#d39600/#ffffff/#79a25e/#d39600","Elite Troops","11","4","n","sf","5","6","xx",
  "#d39600/#ffffff/#79a25e/#d39600","Para Troops","3","4","n","para","4","1","xx",
  "#d39600/#ffffff/#79a25e/#d39600","Motorbike Troops","4","5","n","motor","1","6","xx",
  "#d39600/#ffffff/#79a25e/#d39600","Regular Troops","3","10","n","inf","3","3","xx",
  "#d39600/#ffffff/#79a25e/#d39600","supply","0","0","n","supply","0","10","xx",

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
var nameQ="Silverbacked Statists";

var qbase = ["#d2d7cf","#d2d7cf", "#d2d7cf"];

var unitsQ=[
  "#d2d7cf/#000000/#523ad0/#d2d7cf","art","11","2","n","art","12","2","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","arm","11","4","n","arm","9","5","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","sf","10","2","n","sf","5","5","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","para","4","4","n","para","4","2","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","inf","3","8","n","inf","4","2","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","inf","3","8","n","inf","3","3","xx",
  "#d2d7cf/#000000/#523ad0/#d2d7cf","supply","0","0","n","supply","0","10","xx",
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
var nameQ="HiLo Holistic Hotpink Honeydew Hegemony";

var qbase = ["#ff69b4","#ff69b4", "#ff69b4"];

var unitsQ=[
  "#ff69b4/#000000/#f0fff0/#000000","arm","10","3","n","arm","10","5","xx",
  "#ff69b4/#000000/#f0fff0/#000000","acav","5","4","n","acav","1","7","xx",
  "#ff69b4/#000000/#f0fff0/#000000","sf","8","2","n","sf","4","4","xx",
  "#ff69b4/#000000/#f0fff0/#000000","sf","7","3","n","sf","1","6","xx",
  "#ff69b4/#000000/#f0fff0/#000000","para","5","2","n","para","4","3","xx",
  "#ff69b4/#000000/#f0fff0/#000000","para","1","5","n","para","1","2","xx",
  "#ff69b4/#000000/#f0fff0/#000000","inf","7","4","n","inf","6","4","xx",
  "#ff69b4/#000000/#f0fff0/#000000","cav","4","5","n","cav","1","6","xx",
  "#ff69b4/#000000/#f0fff0/#000000","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Hi", "Hi", "Hi", "Lo", "Lo",
 "Lo", "Lo", "Hi", "Hi", "Lo",
  "Lo", "Lo", "Hi", "Hi", "Lo",
   "Lo", "Lo", "Lo", "Lo", "Hi",
   "Hi", "Hi", "Hi", "Lo",
    "Lo", "Lo", "Lo", "Lo"
];

var designateRQ=["1", "2", "3", "1", "2",
 "3", "4", "4", "5", "5",
  "6", "7", "6",  "7",  "8",
   "9", "10", "11", "12", "8",
   "9","10", "11", "12",
    "13","14", "15", "16"
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
var nameQ="FastSlo Fantastically Floral Federalists";

var qbase = ["#FFFAF0","#FFFAF0", "#FFFAF0"];

var unitsQ=[
  "#FFFAF0/#ff0000/#0000ff/#FFFAF0","mech","9","2","n","mech","4","8","xx",
  "#FFFAF0/#ff0000/#0000ff/#FFFAF0","acav","11","4","n","acav","2","12","xx",
  "#FFFAF0/#0000ff/#ff0000/#FFFAF0","sf","7","4","n","sf","4","3","xx",
  "#FFFAF0/#0000ff/#ff0000/#FFFAF0","para","4","3","n","para","4","2","xx",
  "#FFFAF0/#0000ff/#ff0000/#FFFAF0","inf","3","8","n","inf","3","3","xx",
  "#FFFAF0/#0000ff/#ff0000/#FFFAF0","garrison","6","4","n","guard","8","1","xx",
  "#FFFAF0/#ff0000/#ffff00/#FFFAF0","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Strike I", "Strike II", "Strike I",
"Strike I", "Strike II", "Strike II",
 "Strike III", "Strike III", "Strike IV",
  "Strike IV", "Strike III", "Strike IV",
   "", "Strike V", "Strike V", "Strike V","Strike V",
    "City II", "City II", "City II", "City II",
    "City I", "City I", "City I", "City I"
];

var designateRQ=["1", "1", "2",
 "3", "2", "3",
 "1", "2", "1",
  "2",  "3", "3",
   "Commando",  "1",  "2",  "3", "4",
   "1","2", "3", "4",
    "1","2", "3", "4"
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
var nameQ="Crimson Celerity Cooperative";

var qbase = ["#DC143C","#DC143C", "#DC143C"];

var unitsQ=[
  "#DC143C/#FFff00/#6495ED/#FFFfFf","mech","9","4","n","mech","4","8","xx",
  "#DC143C/#FFff00/#6495ED/#FFFfFf","acav","8","4","n","acav","1","10","xx",
  "#DC143C/#FFff00/#6495ED/#FFFfFf","sf","10","3","n","sf","4","6","xx",
  "#DC143C/#FFff00/#6495ED/#FFFfFf","para","5","2","n","para","3","4","xx",
  "#DC143C/#FFff00/#6495ED/#FFFfFf","inf","6","7","n","inf","3","6","xx",
  "#DC143C/#FFff00/#6495ED/#FFFfFf","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Thunder", "Thunder", "Thunder",
"Thunder", "Lightning", "Lightning",
 "Lightning", "Lightning", "Spark",
  "Spark", "Spark",
   "Strike", "Strike", "Bolt", "Bolt","Bolt",
    "Bolt", "Bolt", "Bolt", "Bolt"
];

var designateRQ=["1", "2", "3",
 "4", "5", "6",
 "7", "8", "9",
  "10",  "11", "12",
   "13",  "14",  "15",  "16", "17",
   "18","19", "20"
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
var nameQ="Zoetic zapping Zombie Hordes";

var qbase = ["#FAF0E6","#FAF0E6", "#FAF0E6"];

var unitsQ=[
  "#FAF0E6/#000000/#FAF0E6/#000000","zombie dogs","6","12","n","sf","2","4","xx",
  "#FAF0E6/#000000/#FAF0E6/#000000","newly raised zombies","2","10","n","para","1","3","xx",
  "#FAF0E6/#000000/#FAF0E6/#000000","zombie virus victims","1","10","n","para","1","2","xx",
  "#FAF0E6/#000000/#FAF0E6/#000000","zombies","1","48","n","inf","1","3","xx",
  "#FAF0E6/#000000/#FAF0E6/#000000","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE",
"ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE", "ZOMBIE"
];

var designateRQ=["DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG", "DOG",
"RAISED", "RAISED", "RAISED", "RAISED", "RAISED", "RAISED", "RAISED", "RAISED", "RAISED", "RAISED",
"VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS", "VIRUS",
"covid", "HIV", "AIDS", "influenza", "Epstein-Barr", "RFK Jr", "herpes", "chickenpox", "rabies", "Ebola",
"avian", "SARS", "HHV6", "DNA", "life", "dsDNA", "dsDNA-RT", "dsRNA", "RNA", "emergent",
"endogenous", "EVE", "GVN", "gag", "helper", "host", "IN", "kb", "LVRS", "lytic",
"MOI", "mycophage", "ssRNA", "neurotropic", "novel", "onco", "orphan", "parasite", "passenger", "plant",
"negative", "positive", "prolate", "prophage", "provirus", "recombinant", "replication", "reverse", "slow", "ssRNA-RT",
"strain", "subviral", "agent", "synthetic", "virology", "superinfection", "T-number", "temperate", "tissue", "tropism",
"transduction", "triangulation", "uncoating", "failure", "virological", "culture", "disease", "dynamic", "envelope", "interference",
"matrix", "virion", "particle", "load", "plaque", "shedding", "transformation", "viral", "viral", "viral",
"vector", "viremia", "viriod", "virokine", "virome", "viropexis", "viroplasm", "virostatic", "virotherapy", "virucide",
"virulence", "attachment", "virusoid", "zygotic", "induction", "liquid", "virulent", "state", "hijack", "immunity",
"natural", "acquired", "severe", "symptoms", "pathogen", "cellular", "infected", "latency", "segment", "nucleic",
"coinfection", "encoded", "tumour", "sample", "fluid", "lysogenic", "genome", "NCLDVs", "giant", "virology"
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
var nameQ="Universal Church";

var qbase = ["#ffd700","#110000", "#800080"];

var unitsQ=[
  "#ffd700/#800080/#9932cc/#ffffff","","15","1","n","art","16","2","xx",
  "#ffd700/#800080/#ff0000/#000000","","12","3","n","sf","8","4","xx",
  "#ffd700/#800080/#800080/#ffffff","","5","6","n","inf","4","4","xx",
  "#ffd700/#800080/#9acd32/#000000","","5","8","n","inf","2","6","xx",
  "#ffd700/#000000/#ffffff/#ff0000","","1","2","n","inf","1","3","xx",
  "#110000/#ffffff/#ffffff/#000000","","1","4","n","inf","1","3","xx",
  "#ffd700/#0000ff/#0000ff/#ff0000","","1","5","n","inf","3","1","xx",
  "#800080/#ffd700/#ffd700/#000000","","9","2","n","para","1","10","xx",
  "#ffd700/#800080/#800080/#ffffff","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Pope", "Cardinal", "Cardinal", "Cardinal", "Bishop", "Bishop", "Bishop", "Bishop", "Bishop", "Bishop",
"Priest", "Priest", "Priest", "Priest", "Priest", "Priest", "Priest", "Priest", "Altar Server", "Altar Server",
"Nuns", "Nuns", "Nuns", "Nuns", "Swiss Guard", "Swiss Guard", "Swiss Guard", "Swiss Guard", "Swiss Guard", "HERETIC",
 "HERETIC"
];

//"#ffd700/#000000/#ffd700/#000000","","1","5","n","inf","1,"3","xx",   "Congragation"

var designateRQ=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"1", "2", "3", "4", "5", "6", "7", "8", "1", "2",
"1", "2", "3", "4", "1", "2", "3", "4", "5", "10",
"11"
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
var nameQ="London Underground";

var qbase = ["#ff1111","#ff1111", "#ff1111"];

var unitsQ=[
  "#ff1111/#ffffff/#800080/#ffffff","","10","2","n","mech","10","3","xx",
  "#ff1111/#ffffff/#ffc0cb/#000000","","9","2","n","inf","9","3","xx",
  "#ff1111/#ffffff/#00ff00/#0000ff","","11","2","n","inf","8","6","xx",
  "#ff1111/#ffffff/#ffff00/#000000","","8","3","n","arm","7","4","xx",
  "#ff1111/#ffffff/#000000/#ffffff","","8","2","n","inf","6","5","xx",
  "#ff1111/#ffffff/#ff0000/#0000ff","","7","3","n","inf","5","5","xx",
  "#ff1111/#ffffff/#8b4513/#ffffff","","4","2","n","inf","4","3","xx",
  "#ff1111/#ffffff/#000099/#ffffff","","6","3","n","para","3","5","xx",
  "#ff1111/#ffffff/#00ffff/#0000ff","","1","2","n","inf","2","2","xx",
  "#ff1111/#ffffff/#a9a9a9/#0000ff","","1","1","n","inf","1","3","xx",
  "#ff1111/#ffffff/#800080/#ffffff","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Metropolitan", "Metropolitan", "Hammersmith", "Hammersmith", "District", "District",
 "Circle", "Circle", "Circle",
 "Northern", "Northern", "Central", "Central", "Central", "Bakerloo", "Bakerloo",
  "Piccadilly", "Piccadilly", "Piccadilly", "Victoria",
"Victoria", "Jubilee"
];

var designateRQ=["Uxbridge", "Aldgate", "Farringdon", "Barbican", "West Ham", "District",
 "Victoria", "Liverpool St.", "Paddington",
 "Finchley", "Balham", "Tot.Crt Road", "Mile End", "Stratford", "Baker St.", "Waterloo",
  "Arsenal", "Heathrow T4", "Heathrow T5", "Brixton",
"Pimlico", "Jubilee"
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


else if(changeRedFlag&&redArmyNo==52||changeBlackFlag&&blackArmyNo==52){
var nameQ="Lost Souls";

var qbase = ["#676869","#676869", "#676869"];

var unitsQ=[
  "#676869/#00ff00/#ff0000/#000000","","11","3","n","sf","6","5","xx",
  "#676869/#00ff00/#ff0000/#000000","","10","3","n","mount","5","6","xx",
  "#676869/#00ff00/#ff0000/#000000","","8","3","n","inf","8","3","xx",
  "#676869/#00ff00/#ff0000/#000000","","5","4","n","inf","4","4","xx",
  "#676869/#00ff00/#ff0000/#000000","","9","3","n","art","10","2","xx",
  "#676869/#00ff00/#ff0000/#000000","","4","4","n","para","2","4","xx",
  "#676869/#00ff00/#ff0000/#000000","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Vampires", "Vampyres", "Bloodsuckers", "Werewolves", "Lychanthropes", "Wolfmen",
 "Reanimated", "Flesh-eating", "Artificial",
 "Alien", "Dark", "Evil", "Dark", "BEM", "BEM", "BEM",
  "Spectres", "Ghosts", "Wraiths", "Spooks"
];

var designateRQ=["", "", "", "", "", "",
 "Corpses", "Ghouls", "Life",
 "Alter-egos", "Dopplegangers", "Halves", "Souls", "Blob", "Big Brain", "Grey",
  "", "", "", ""
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

else if(changeRedFlag&&redArmyNo==53||changeBlackFlag&&blackArmyNo==53){
var nameQ="Armoured Fist";

var qbase = ["#444444","#444444", "#444444"];

var unitsQ=[
  "#444444/#ffffff/#666666/#ffffff","Heavy Tanks","10","6","n","arm","8","5","xx",
  "#444444/#ffffff/#666666/#ffffff","Self-propelled Guns","9","4","n","spa","6","6","xx",
  "#444444/#ffffff/#666666/#ffffff","Mechanised","9","3","n","mech","4","8","xx",
  "#444444/#ffffff/#666666/#ffffff","Light Tanks","9","3","n","acav","2","10","xx",
  "#444444/#ffffff/#666666/#ffffff","supply","0","0","n","supply","0","10","xx",
];

var designateLQ=["Guderian", "Guderian","Guderian", "Guderian", "Guderian", "Guderian",
 "Fuller", "Fuller", "Fuller", "Fuller",
 "Rommel", "Rommel", "Rommel",
  "Patton", "Patton", "Patton"
];

var designateRQ=["I", "II","III", "IV", "V", "VI",
 "I", "II", "III", "IV",
 "I", "II", "III",
  "I", "II", "III"
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

else if(changeRedFlag&&redArmyNo==54||changeBlackFlag&&blackArmyNo==54){
var nameQ="Die Rolling Dystopians";

var qbase = ["#000080","#000080", "#000080"];

var unitsQ=[
  "#000080/#ffffff/#800000/#ffffff","Tracked","9","6","n","mech","6","6","xx",
  "#000080/#ffffff/#800000/#ffffff","Marine and Mountain","10","3","n","sf","6","4","xx",
  "#000080/#ffffff/#800000/#ffffff","Air Service","6","3","n","para","6","2","xx",
  "#000080/#ffffff/#800000/#ffffff","Foot","6","8","n","inf","6","3","xx",
  "#000080/#ffffff/#800000/#ffffff","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Box", "Box","Box", "Box", "Box", "Box",
 "Natural", "Natural", "Nina",
 "Hi-Lo-Yo", "Hi-Lo-Yo","Hi-Lo-Yo",
  "Snake-Eyes", "Snake-Eyes", "Snake-Eyes", "Snake-Eyes","Snake-Eyes", "Snake-Eyes","Snake-Eyes", "Snake-Eyes"];

var designateRQ=["4", "5","6" ,"8", "9", "10",
 "7", "11", "9",
 "2", "3", "12",
  ".", ":",":.", "::", "::.", ":::",":::.","::::"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==55||changeBlackFlag&&blackArmyNo==55){
var nameQ="Coral Combat Committed Caeserian Confederation";

var qbase = ["#FF7F50","#FF7F50", "#FF7F50"];

var unitsQ=[
  "#FF7F50/#000000/#D2691E/#ffffff","Heavy Tanks","10","5","n","arm","12","1","xx",
  "#FF7F50/#000000/#D2691E/#ffffff","Marine and Mountain","7","4","n","sf","6","1","xx",
  "#FF7F50/#000000/#D2691E/#ffffff","Paratroopers","5","4","n","para","6","1","xx",
  "#FF7F50/#000000/#D2691E/#ffffff","Regular Infantry","6","6","n","inf","8","1","xx",
  "#FF7F50/#000000/#D2691E/#ffffff","Elite Infantry","8","2","n","inf","10","1","xx",
  "#FF7F50/#000000/#D2691E/#ffffff","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Julius", "Julius", "Julius", "Julius", "Julius",
 "Claudius", "Claudius", "Claudius", "Claudius",
 "Nero", "Nero", "Nero", "Nero",
  "Augustus", "Augustus","Augustus", "Augustus", "Augustus", "Augustus",
  "Hadrian", "Hadrian"];

var designateRQ=["I", "II","III" ,"IV", "V",
 "I", "II","III" ,"IV",
 "I", "II","III" ,"IV",
  "I", "II","III" ,"IV", "V", "VI",
"I", "II"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==56||changeBlackFlag&&blackArmyNo==56){
var nameQ="Sea-Green Route 66 Convoy";

var qbase = ["#2E8B57","#2E8B57", "#2E8B57"];

var unitsQ=[
  "#2E8B57/#ffffff/#fff5ee/#000000","Mach Trucks","9","5","n","arm","6","6","xx",
  "#2E8B57/#ffffff/#fff5ee/#000000","Motorbikes","8","5","n","sf","2","6","xx",
  "#2E8B57/#ffffff/#fff5ee/#000000","Microlights","7","5","n","para","3","6","xx",
  "#2E8B57/#ffffff/#fff5ee/#000000","Pick-ups","6","5","n","inf","3","6","xx",
  "#2E8B57/#ffffff/#fff5ee/#000000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["California", "Arizona", "New Mexico", "Oklahoma", "Missouri",
 "California", "Arizona", "New Mexico", "Oklahoma", "Missouri",
"California", "Arizona", "New Mexico", "Oklahoma", "Missouri",
"California", "Arizona", "New Mexico", "Oklahoma", "Missouri"];

var designateRQ=["6", "12","18" ,"24", "30",
 "36", "42","48" ,"54","60",
  "66","72" ,"78",  "84", "90",
  "96" ,"102", "108", "114", "120"];

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==57||changeBlackFlag&&blackArmyNo==57){
var nameQ="Seviche Seventeen Servants Severalty";

var qbase = ["#708090","#708090", "#708090"];

var unitsQ=[
  "#708090/#FFFACD/#00FF00/#000000","Panzers","11","5","n","arm","7","7","xx",
  "#708090/#FFFACD/#00FF00/#000000","Storm-Troopers","11","2","n","sf","7","5","xx",
  "#708090/#FFFACD/#00FF00/#000000","Fallschirmjager","7","2","n","para","7","2","xx",
  "#708090/#FFFACD/#00FF00/#000000","Infantry","7","5","n","inf","7","3","xx",
  "#708090/#FFFACD/#00FF00/#000000","Panzergrenadiers","8","3","n","inf","7","4","xx",
  "#708090/#FFFACD/#00FF00/#000000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Seven", "Seven", "Seven", "Seven", "Seven", "Seven", "Seven", "Seven",
"Nine", "Seven", "Seven", "Seven", "Seven", "Seven", "Seven", "Seven", "Seven"];

var designateRQ=["Days", "Sins","Planets" ,"Churches", "Circuits",
 "Seas", "Hills" , "Heavens", "Clouds", "Ages",
  "Plots", "Sisters" , "Oaks",  "Sons", "Seals",
  "Rivers" ,"Colours"];
//championships, sexes, eons, worlds, angels, trumpets, "Immersions", "Religions"

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==58||changeBlackFlag&&blackArmyNo==58){
var nameQ="Geranium Giant Gentry";

var qbase = ["#800080","#800080", "#800080"];

var unitsQ=[
  "#800080/#ffffff/#808000/#000000","Heavy Armour","12","3","n","arm","12","3","xx",
  "#800080/#ffffff/#808000/#000000","Super Strike Force","14","3","n","sf","12","2","xx",
  "#800080/#ffffff/#808000/#000000","Airlanding Invaders","11","2","n","para","12","1","xx",
  "#800080/#ffffff/#808000/#000000","Army Front","10","5","n","inf","12","1","xx",
  "#800080/#ffffff/#808000/#000000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Chicxulub", "Krakatoa", "Vredefort", "Amazon", "Mount", "Olympus", "Hurricane", "Typhoon",
"Mauna Loa", "Caspian", "Seller", "Boxing Day", "Lituya Bay"];

var designateRQ=["Asteroid", "Eruption","Crater" ,"River", "Everest",
 "Mons", "Wilma" , "Tip", "Volcano", "Sea",
  "Glacier", "Quake" , "Tsunami"];
//championships, sexes, eons, worlds, angels, trumpets

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==59||changeBlackFlag&&blackArmyNo==59){
var nameQ="Gray Castles across the Borderland";

var qbase = ["#aaaaaa","#aaaaaa", "#aaaaaa"];

var unitsQ=[
  "#aaaaaa/#000000/#333333/#ffffff","Gun Emplacements","12","4","n","spa","15","0","xx",
  "#aaaaaa/#000000/#333333/#ffffff","Mountain Forts","10","3","n","sf","10","0","xx",
  "#aaaaaa/#000000/#333333/#ffffff","Fortress","17","3","n","inf","20","0","xx",
  "#aaaaaa/#000000/#333333/#ffffff","Strongpoint","7","3","n","inf","10","0","xx",
  "#aaaaaa/#000000/#333333/#ffffff","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Castle","Mukachevo", "Windsor", "Malbork",
"Cheyenne", "", "Fortress Of",
 "Maginot", "Citadel", "Fort",
"Tower", "Krak des", "Chittorgarh"];

var designateRQ=["Conwy" , "Castle", "Castle" ,"Castle",
"Mountain", "Masada", "The Orsini",
 "Line", "Of Aleppo", "Douaumont",
"Of London", "Chevaliers" , "Fort"];
//championships, sexes, eons, worlds, angels, trumpets

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==60||changeBlackFlag&&blackArmyNo==60){
var nameQ="Godzilla";

var qbase = ["#006400","#FF8b00", "#DCDCDb"];

  //"#006400/#ffffff/#556B2F/#ffffff","Godzilla","118","1","n","godz","100","18","xx",
var unitsQ=[
  "#006400/#ffffff/#ffffff/#556B2F","Godzilla","118","1","n","godz","100","18","xx",
  "#FF8b00/#000000/#ffff00/#ff0000","Fires","2","6","n","para","4","0","xx",
  "#DCDCDb/#000000/#696969/#ffffff","Smoke","4","5","n","smoke","1","6","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Godzilla",
"Flames", "Flames","Flames", "Flames","Flames","Flames",
"Debris", "Debris","Debris","Debris","Debris"];

var designateRQ=["Monster",
"Fire", "Fire","Fire","Fire","Fire","Fire",
 "Smoke", "Smoke","Smoke","Smoke","Smoke"];
//championships, sexes, eons, worlds, angels, trumpets

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}

else if(changeRedFlag&&redArmyNo==61||changeBlackFlag&&blackArmyNo==61){
var nameQ="Blue Forts across the Frontier";

var qbase = ["#1E90FF","#ffffee", "#ffffee"];

var unitsQ=[
  "#1E90FF/#ffffff/#0000ff/#ff0000","Fortress","15","2","n","inf","18","0","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","Mountain Forts","8","6","n","sf","8","0","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","Flying Fort","3","3","n","para","5","0","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","Fort","9","5","n","inf","12","0","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","Strongpoint","3","6","n","arm","6","0","xx",
  "#1E90FF/#ffffff/#0000ff/#ff0000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=["Fort","Fort", "Fort", "Fort", "Fort",
"Fort","Fort", "Fort", "Fort", "Fort",
 "Fort","Fort", "Fort", "Fort", "Fort",
"Fort","Fort", "Fort", "Fort", "Fort",
"Fort","Fort"];

var designateRQ=["Laramie","Apache", "Sumner", "Reno", "Union",
"Defiance","Cobb", "Phil Kearney", "Lyon", "Peck",
 "Buford","Randall", "Sully", "Keogh", "Lincoln",
"Bridger","CF Smith", "Wingate", "Dodge", "Hays",
"Sedgwick","Wallace"];
//"Clark","Concho", "Davis", "Griffin", "Worth",
 //"Richardson","Wichita", "Elliot", "Larned", "Riley",
//"Snelling","Yates", "Rice", "Robinson", "Berthold",
//"Thomas","Sill", "Kearney"

var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==62||changeBlackFlag&&blackArmyNo==62){
var nameQ="Simply Infantry";

var qbase = ["#dddddd","#dddddd", "#dddddd"];

var unitsQ=[
  "#dddddd/#000000/#bbbbbb/#000000","Active","10","10","n","sf","10","3","xx",
  "#dddddd/#000000/#bbbbbb/#000000","Reserve","5","10","n","para","5","3","xx",
  "#dddddd/#000000/#bbbbbb/#000000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=[
"A","A","A","A","A","A","A","A","A","A",
"R","R","R","R","R","R","R","R","R","R"
];

var designateRQ=[
  "1","2","3","4","5","6","7","8","9","10",
  "11","12","13","14","15","16","20","30","33","35"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}


else if(changeRedFlag&&redArmyNo==63||changeBlackFlag&&blackArmyNo==63){
var nameQ="5 Large Units";

var qbase = ["#FFBF00","#FFBF00", "#FFBF00"];

var unitsQ=[
  "#FFBF00/#000000/#40E0D0/#000000","Front","30","3","n","inf","24","6","xx",
  "#FFBF00/#000000/#40E0D0/#000000","Revolution","30","2","n","inf","30","2","xx",
  "#FFBF00/#000000/#40E0D0/#000000","supply","0","0","n","supply","0","10","xx"
];

var designateLQ=[
  "1st","2nd","3rd","4th","5th"
];

var designateRQ=[
"Column","Column","Column","Column","Column"];


var noOfSide = unitsQ.length/noOfItems;
  var sideQ=new Array();
  if(changeRedFlag){
 for(s=0;s<noOfSide;s++){
   sideQ[s]=0;    }}
  else if(changeBlackFlag){
  for(s=0;s<noOfSide;s++){
    sideQ[s]=1;    }}
}
//interesting colours
//purple:800080   leaf green:808000

if(addSupplyUnitsFlag){
  unitsQ.push(unitsQ[0], "Supply","0","8","n","supply","0","10","xx");
  designateLQ.push("", "", "", "", "", "", "captured", "captured");
  designateRQ.push("1","2","3","4","5","6","1","2");
}

if(addDummyUnitsFlag){
  unitsQ.push(unitsQ[0], "Blank","0","8","b","blank","","","");
  designateLQ.push("", "", "", "", "", "", "", "");
  designateRQ.push("","","","","","", "", "");
}


if(addAirPowerFlag){
  unitsQ.push(unitsQ[0], "Air Power","0","6","a","air","0","","");
  designateLQ.push("Air Power", "Air Power", "Air Power", "Air Power","Air Power", "Air Power");
  designateRQ.push("1","2","3","4","5","6");
}

if(addDepotUnitsFlag){
  unitsQ.push(unitsQ[0], "Supply Depot","0","4","a","depot","0","","");
  designateLQ.push("Repl pts", "Repl pts", "Repl pts", "Repl pts");
  designateRQ.push("1","2","3","4");
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
else{
if(!addAirPowerFlag){
var unitsN = [
"#ffaaaa/#000000/#ffffff/#000000","R REPLC","1","1","x", "<--R x1", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R REPLC x10","1","1","x", "<--R x10", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
"#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
"#ffaaaa/#000000/#ffffff/#000000","R Capital","1","1","x", "RED", "CAPITAL", "", "",
"#dddddd/#000000/#ffffff/#000000","B Capital","1","1","x", "BLACK", "CAPITAL", "", "",
"#aaffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}
else{
  var unitsN = [
  "#ff8888/#000000/#ffffff/#000000","R AIR","1","1","x", "<--R x1", "AIR PTS", "", "",
  "#ff8888/#000000/#ffffff/#000000","R AIR x10","1","1","x", "<--R x10", "AIR PTS", "", "",
  "#aaaaaa/#000000/#ffffff/#000000","B AIR","1","1","x", "<--B x1", "AIR PTS", "", "",
  "#aaaaaa/#000000/#ffffff/#000000","B AIR x10","1","1","x", "<--B x10", "AIR PTS", "", "",
  "#ffaaaa/#000000/#ffffff/#000000","R REPLC","1","1","x", "<--R x1", "REPL", "", "",
  "#ffaaaa/#000000/#ffffff/#000000","R REPLC x10","1","1","x", "<--R x10", "REPL", "", "",
  "#dddddd/#000000/#ffffff/#000000","B REPLC","1","1","x", "<--B x1", "REPL", "", "",
  "#dddddd/#000000/#ffffff/#000000","B REPLC x10","1","1","x", "<--B x10", "REPL", "", "",
  "#ffaaaa/#000000/#ffffff/#000000","R Capital","1","1","x", "RED", "CAPITAL", "", "",
  "#dddddd/#000000/#ffffff/#000000","B Capital","1","1","x", "BLACK", "CAPITAL", "", "",
  "#aaffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
  "#dddd00/#000000/#ffffff/#000000", "side move","0","1","x", "Side to", "MOVE", "", ""];}
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


function depotUnitsYesNo(){
  if(addDepotUnitsFlag){
    addDepotUnitsFlag=false;
    document.getElementById('btnDepot').innerText="Depot Units - No";
  }
  else{
    addDepotUnitsFlag=true;
    document.getElementById('btnDepot').innerText="Depot Units - Yes";
  }
}
