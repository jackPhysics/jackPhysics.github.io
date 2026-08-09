
var redArmyMax = 0;
var blackArmyMax = 1;
var addSupplyUnitsFlag = false;
//if(printArmiesFlag){addSupplyUnitsFlag = true;}
var addDummyUnitsFlag = false;

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
  "Golden Ground Troops Government in Exile", "Day-Glo Dukedom", "Countdown Country #2"]

//43% or less
var darkColorsCode = ["blue","blueviolet","brown","darkblue","darkgreen","darkmagenta","darkolivegreen","darkred","darkslateblue","darkslategray","darkslategrey","darkviolet","firebrick","indigo","maroon","mediumblue","midnightblue","navy","purple","rebeccapurple","saddlebrown"];

//true light 92%+
//var lightColorsCode = ["aliceblue","antiquewhite","azure","beige","blanchedalmond","cornsilk","floralwhite","ghostwhite","honeydew","ivory","lavenderblush","lemonchiffon","lightcyan","lightgoldenrodyellow","lightyellow","linen","mintcream","oldlace","papayawhip","seashell","snow","whitesmoke","yellow"];

var darkColorsHex = ["#0000FF","#8A2BE2","#A52A2A","#00008B","#006400","#8B008B","#556B2F","#8B0000","#483D8B","#2F4F4F","#2F4F4F","#9400D3","#B22222","#4B0082","#800000","#0000CD","#191970","#000080","#800080","#663399","#8B4513"];

//var lightColorsHex = ["#F0F8FF","#FAEBD7","#F0FFFF","#F5F5DC","#FFEBCD","#FFF8DC","#FFFAF0","#F8F8FF","#F0FFF0","#FFFFF0","#FFF0F5","#FFFACD","#E0FFFF","#FAFAD2","#FFFFE0","#FAF0E6","#F5FFFA","#FDF5E6","#FFEFD5","#FFF5EE","#FFFAFA","#F5F5F5","#FFFF00"];

//medium light <76% to <93%
var lightColorsCode = ["aqua","aquamarine","bisque","burlywood","chartreuse","cyan","gainsboro","gold","greenyellow","khaki","lavender","lawngreen","lightblue","lightgray","lightgreen","lightgrey","lightpink","lightskyblue","lightsteelblue","lime","mediumspringgreen","mediumturquoise","mistyrose","moccasin","navajowhite","palegoldenrod","palegreen","paleturquoise","peachpuff","pink","powderblue","silver","skyblue","springgreen","thistle","turquoise","wheat","yellowgreen",];

var lightColorsHex = ["#00FFFF","#7FFFD4","#FFE4C4","#DEB887","#7FFF00","#00FFFF","#DCDCDC","#FFD700","#ADFF2F","#F0E68C","#E6E6FA","#7CFC00","#ADD8E6","#D3D3D3","#90EE90","#D3D3D3","#FFB6C1","#87CEFA","#B0C4DE","#00FF00","#00FA9A","#48D1CC","#FFE4E1","#FFE4B5","#FFDEAD","#EEE8AA","#98FB98","#AFEEEE","#FFDAB9","#FFC0CB","#B0E0E6","#C0C0C0","#87CEEB","#00FF7F","#D8BFD8","#40E0D0","#F5DEB3","#9ACD32",];

function findArmies(n) {//n = armySize

  var armyRepeats = n;
  var rndCol1 = Math.floor(Math.random() * darkColorsCode.length);
  var rndCol2 = Math.floor(Math.random() * lightColorsCode.length);
  var colD1 = darkColorsCode[rndCol1];
  var colD2 = darkColorsHex[rndCol1];
  var colL1 = lightColorsCode[rndCol2];
  var colL2 = lightColorsHex[rndCol2];

if(changeRedFlag&&redArmyNo==0||changeBlackFlag&&blackArmyNo==1){
var nameQ="The numbers";

var qbase = ["#000000","#000000", "#000000"];


  var unitsQ = new Array();
  noOfItems = 9;

  for (i = 0; i < armyRepeats; i++){
    unitsQ[i * noOfItems * 2] = "" + colD2 + "/#ffffff/" + colD2 + "/#ffffff";
    unitsQ[i * noOfItems * 2+1] = "" + colD1 + "";
    unitsQ[i * noOfItems * 2+2] = "1";
    unitsQ[i * noOfItems * 2+3] = "50";
    unitsQ[i * noOfItems * 2+4] = "x";
    unitsQ[i * noOfItems * 2+5] = "numb";
    unitsQ[i * noOfItems * 2+6] = "";
    unitsQ[i * noOfItems * 2+7] = "";
    unitsQ[i * noOfItems * 2+8] = "x";
    unitsQ[noOfItems + i * noOfItems * 2] = "" + colL2 + "/#000000/" + colL2 + "/#000000";
    unitsQ[noOfItems + i*noOfItems * 2+1] = "" + colL1 + "";
    unitsQ[noOfItems + i * noOfItems * 2+2] = "1";
    unitsQ[noOfItems + i * noOfItems * 2+3] = "50";
    unitsQ[noOfItems + i * noOfItems * 2+4] = "x";
    unitsQ[noOfItems + i * noOfItems * 2+5] = "numb";
    unitsQ[noOfItems + i * noOfItems * 2+6] = "";
    unitsQ[noOfItems + i * noOfItems * 2+7] = "";
    unitsQ[noOfItems + i * noOfItems * 2+8] = "x";
  }
  unitsQ[armyRepeats * noOfItems * 2] = "" + colD2 + "/#ffffff/" + colD2 + "/#ffffff";
  unitsQ[armyRepeats * noOfItems * 2+1] = "" + colD1 + "";
  unitsQ[armyRepeats * noOfItems * 2+2] = "1";
  unitsQ[armyRepeats * noOfItems * 2+3] = "50";
  unitsQ[armyRepeats * noOfItems * 2+4] = "y";
  unitsQ[armyRepeats * noOfItems * 2+5] = "numb";
  unitsQ[armyRepeats * noOfItems * 2+6] = "";
  unitsQ[armyRepeats * noOfItems * 2+7] = "";
  unitsQ[armyRepeats * noOfItems * 2+8] = "x";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2] = "" + colL2 + "/#000000/" + colL2 + "/#000000";
  unitsQ[noOfItems + armyRepeats*noOfItems * 2+1] = "" + colL1 + "";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+2] = "1";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+3] = "50";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+4] = "y";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+5] = "numb";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+6] = "";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+7] = "";
  unitsQ[noOfItems + armyRepeats * noOfItems * 2+8] = "x";

  console.log("" + unitsQ+" length="+unitsQ.length+" rows="+unitsQ.length/noOfItems);

/*
var unitsQ=[
"#8b0000/#000000/##000000/#000000","DarkRed", "1", "50", "x","numb","","","x",
"#ffdab9/#ffffff/##000000/#000000","PeachPuff", "1", "50", "x","numb","","","x",
"#8b0000/#000000/##000000/#000000","DarkRed", "1", "50", "x","numb","","","x",
"#ffdab9/#ffffff/##000000/#000000","PeachPuff", "1", "50", "x","numb","","","x",
"#8b0000/#000000/##000000/#000000","DarkRed", "1", "50", "x","numb","","","x",
"#ffdab9/#ffffff/##000000/#000000","PeachPuff", "1", "50", "x","numb","","","x",
"#8b0000/#000000/##000000/#000000","DarkRed", "1", "50", "x","numb","","","x",
"#ffdab9/#ffffff/##000000/#000000","PeachPuff", "1", "50", "x","numb","","","x"
];
*/

//"#4b0082/#ffffff/##000000/#000000","8", "1", "9", "x","numb","8","","x",
//"#ee82ee/#000000/##000000/#000000","9", "1", "9", "x","numb","9","","x",

/*
var unitsQ=[
"#ff0000/#000000/##000000/#000000","red", "1", "20", "x","numb","","","x",
"#0000ff/#ffffff/##000000/#000000","blue", "1", "20", "x","numb","","","x",
"#00ff00/#000000/##000000/#000000","green", "1", "20", "x","numb","","","x",
"#ffff00/#000000/##000000/#000000","yellow", "1", "20", "x","numb","","","x",
"#da70d6/#000000/##000000/#000000","orchid", "1", "20", "x","numb","","","x",
"#ffa500/#000000/##000000/#000000","orange", "1", "20", "x","numb","","","x",
"#40e0d0/#000000/##000000/#000000","turquoise", "1", "20", "x","numb","","","x",
  "#a52a2a/#ffffff/##000000/#000000","brown", "1", "20", "x","numb","","","x",
  "#4b0082/#ffffff/##000000/#000000","indigo", "1", "20", "x","numb","","","x",
  "#ffc0cb/#000000/##000000/#000000","pink", "1", "20", "x","numb","","","x",
  "#c0c0c0/#ffffff/##000000/#000000","silver", "1", "20", "x","numb","","","x",
  "#91cd32/#ffffff/##000000/#000000","yellowGreen", "1", "20", "x","numb","","","x",
  "#d2b48c/#ffffff/##000000/#000000","tan", "1", "20", "x","numb","","","x",
  "#000089/#ffffff/##000000/#000000","navy", "1", "20", "x","numb","","","x",
  "#808000/#ffffff/##000000/#000000","olive", "1", "20", "x","numb","","","x",
  "#ff1493/#ffffff/##000000/#000000","deeppink", "1", "20", "x","numb","","","x",
  "#7b68ee/#ffffff/##000000/#000000","mediumSlateBlue", "1", "20", "x","numb","","","x",
  "#f5f5dc/#ffffff/##000000/#000000","beige", "1", "20", "x","numb","","","x",
];*/

var designateLQ=[
  "","","","",""
];

var designateRQ=[
  "","","","",""];

    //var noOfSide = designateLQ.length;
    var noOfSide = unitsQ.length/noOfItems;

    var sideQ=new Array();
      for(s=0;s<noOfSide;s++){
      sideQ[s]=0;
    }

}

if(addSupplyUnitsFlag){
  unitsQ.push(unitsQ[0], "Supply","0","8","n","supply","0","10","xx");
  designateLQ.push("", "", "", "", "", "", "captured", "captured");
  designateRQ.push("1","2","3","4","5","6","1","2");
}

if(addDummyUnitsFlag){
  unitsQ.push(unitsQ[0], "Blank","","8","b","blank","","","");
  designateLQ.push("", "", "", "", "", "", "", "");
  designateRQ.push("","","","","","", "", "");
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
var unitsN = []}

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
    console.log("4:"+unitsA);

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
