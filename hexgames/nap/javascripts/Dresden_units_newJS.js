var situationAddress="situations/Dresden setup.html";
var tecAddress="charts/TEC Dresden.html";
var crtAddress="charts/CRT Borodino.html"; //"charts/goa crt.htm";
var crt2Address="charts/CRT Dresden.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Dresden.html" //MAP
var rulesAddress="rules/BattleAusterlitz.pdf"
var errataAddress="rules/reinf rulesAddress.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Dresden board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData=new Array();
    setupGameData[0] = "0,300,389,0,0,0,664,375,7, 0,300,386,0,0,0,652,380,7, 0,0,392,0,0,0,559,502,6, 0,0,395,0,0,0,565,513,6, 0,0,398,0,0,0,527,447,6, 0,0,401,0,0,0,532,455,6, 0,0,404,0,0,0,753,392,6, 0,0,407,0,0,0,758,399,6, 0,0,410,0,0,0,684,392,6, 0,0,413,0,0,0,693,397,6, 0,0,458,0,0,0,989,49,6, 0,0,464,0,0,0,1003,34,6, 0,0,471,0,0,0,1017,17,6, 0,0,492,0,0,0,1063,42,5, 0,0,483,0,0,0,1062,23,5, 0,0,443,0,0,0,908,14,5, 0,0,440,0,0,0,917,23,5, 0,0,446,0,0,0,899,26,5, 0,0,449,0,0,0,890,15,5, 0,0,461,0,0,0,994,41,5, 0,0,468,0,0,0,1012,26,5, 0,0,495,0,0,0,1031,10,5, 0,0,434,0,0,0,462,336,4, 0,0,437,0,0,0,464,374,4, 0,0,489,0,0,0,1045,37,3, 0,0,477,0,0,0,1042,22,3, 0,0,368,0,0,0,691,503,3, 0,0,371,0,0,0,684,499,3, 0,0,374,0,0,0,430,281,3, 0,0,377,0,0,0,426,241,3, 0,0,428,0,0,0,525,262,6, 0,0,416,0,0,0,926,13,6, 0,0,431,0,0,0,494,245,6, 0,0,365,0,0,0,431,246,4, 0,0,498,0,0,0,1051,10,1, 0,0,419,0,0,0,888,244,9, 0,0,422,0,0,0,561,429,8, 0,0,425,0,0,0,723,413,8, 0,0,380,0,0,0,658,449,6, 0,0,452,0,0,0,918,38,6, 0,0,474,0,0,0,1030,32,6, 0,0,362,0,0,0,625,432,2, 0,0,346,0,0,0,787,375,1, 0,0,349,0,0,0,722,447,1, 0,0,352,0,0,0,625,540,1, 0,0,355,0,0,0,527,484,1, 0,0,359,0,0,0,494,431,1, 0,0,331,0,0,0,813,35,8, 0,0,340,0,0,0,792,34,7, 0,30,262,0,0,0,396,748,7, 0,30,265,0,0,0,364,766,6, 0,0,301,0,0,0,362,503,6, 0,0,304,0,0,0,428,431,6, 0,0,307,0,0,0,364,393,6, 0,0,238,0,0,0,625,615,5, 0,30,328,0,0,0,560,728,5, 0,0,271,0,0,0,494,505,5, 0,0,235,0,0,0,559,580,4, 0,0,316,0,0,0,267,338,4, 0,30,244,0,0,0,624,728,3, 0,0,313,0,0,0,233,393,4, 0,30,274,0,0,0,462,711,3, 0,30,247,0,0,0,690,728,2, 0,30,259,0,0,0,656,749,2, 0,0,241,0,0,0,562,617,4, 0,30,295,0,0,0,493,689,4, 0,30,298,0,0,0,529,708,4, 0,30,268,0,0,0,397,783,3, 0,0,310,0,0,0,300,430,2, 0,0,343,0,0,0,767,33,2, 0,0,149,0,0,0,943,36,6, 0,0,119,0,0,0,983,411,5, 0,0,122,0,0,0,919,412,5, 0,30,223,0,0,0,756,729,5, 0,0,146,0,0,0,954,35,5, 0,0,152,0,0,0,938,31,5, 0,0,107,0,0,0,849,373,4, 0,30,225,0,0,0,757,802,4, 0,0,164,0,0,0,945,22,3, 0,0,113,0,0,0,951,352,3, 0,0,143,0,0,0,947,46,3, 0,30,224,0,0,0,723,747,6, 0,0,125,0,0,0,1016,393,3, 0,0,155,0,0,0,955,27,3, 0,0,116,0,0,0,886,357,2, 0,30,220,0,0,0,785,709,7, 0,0,180,0,0,0,755,505,6, 0,30,231,0,0,0,883,728,5, 0,0,186,0,0,0,820,502,5, 0,0,189,0,0,0,723,519,7, 0,0,192,0,0,0,689,577,7, 0,30,226,0,0,0,952,765,3, 0,30,229,0,0,0,944,773,1, 0,30,222,0,0,0,793,718,4, 0,0,195,0,0,0,787,599,3, 0,0,173,0,0,0,1145,57,TURN, 0,0,176,0,0,0,1192,319,to move, 0,0,1,8,A,0,situations/Dresden setup.html";
setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 1000;
var deadPosA_delX = 1000;
var deadPosA_Y0 = 7500;
var deadPosA_delY = 500;
var deadPosB_X0 = 7000;
var deadPosB_delX = 1000;
var deadPosB_Y0 = 7500;
var deadPosB_delY = 500;

var swidth=3000*4; //width of biggest board
var sheight=2000*4; //height of biggest board
var placePieceShift=400;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=40 //no of pieces in game
var unitTotal=17; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=89; //index number of last piece - turn now
var gerNumber=42; //the index number of the first side B piece
var neutNumber=89; //index number of first neutral piece

//var Abase = "#d2b486/";
//var Bbase = "#aaaaaa/";
var Abase = ["#0077ff","#0000ff", "#1000ff"];
var Bbase = ["#8fbc8f","#556b2f", "#696969"];
var Apanic=30;
var Bpanic=43;
const nameA="French";
const nameB="Allied";
const startingPlayer = nameB;
const secondPlayer = nameA;
var currentPlayer=nameA;//give name of non-starting player as it clicks over as starts
var colorA="#13cc6a";//"Red";
var colorAbx="#bbdfdc";
var textColorA="#ffffff";
var colorB="#82ff00";//"Blue";
var colorBbx="#a54316";
var textColorB="#000000";
var colorN="#999999";//"Silver";
var textColorN="Black";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "YellowGreen";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=150; //unit width/height
//alert("here!");
var sunit2=150;
var sunitB=150; //unit width/height
var sunitB2=150;

var noOfItems=9; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

//RED: totalPts=155 totalCFs=105
//BLACK: totalPts=150 totalCFs=104

var unitsA=[
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "7", "2", "n", "inf", "7", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "6", "11", "n", "inf", "6", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "9", "n", "inf", "5", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "2", "n", "inf", "4", "4", "XX",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "3", "6", "n", "inf", "3", "4", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "12", "1", "c", "cav", "6", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "10", "2", "c", "cav", "5", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "8", "1", "c", "cav", "4", "6", "XX",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "1", "c", "cav", "1", "6", "XX",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "18", "1", "a", "art", "9", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "16", "2", "a", "art", "8", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "12", "3", "a", "art", "6", "3", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "0", "1", "a", "art", "2", "0", "",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "0", "5", "a", "art", "1", "0", "",

"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "8", "1", "n", "inf", "8", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "7", "2", "n", "inf", "7", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "6", "4", "n", "inf", "6", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "5", "3", "n", "inf", "5", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "4", "2", "n", "inf", "4", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "3", "1", "n", "inf", "3", "4", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "8", "1", "c", "cav", "4", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "6", "1", "c", "cav", "3", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "4", "2", "c", "cav", "2", "6", "XX",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "8", "3", "a", "art", "4", "3", "",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "6", "1", "a", "art", "3", "3", "",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "4", "2", "a", "art", "2", "3", "",

"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "6", "1", "n", "inf", "6", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "5", "5", "n", "inf", "5", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "4", "1", "n", "inf", "4", "4", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "8", "1", "c", "cav", "4", "6", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "6", "3", "c", "cav", "3", "6", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "12", "1", "a", "art", "6", "3", "",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "6", "2", "a", "art", "3", "3", "",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "4", "1", "a", "art", "2", "3", "",


"#696969/#000000/#ffff00/#000000" , "Infantry", "7", "1", "n", "inf", "7", "4", "XX",
"#696969/#000000/#ffff00/#000000" , "Infantry", "6", "1", "n", "inf", "6", "4", "XX",
"#696969/#000000/#ffff00/#000000" , "Infantry", "5", "2", "n", "inf", "5", "4", "XX",
"#696969/#000000/#ffff00/#000000" , "Infantry", "4", "2", "n", "inf", "4", "4", "XX",
"#696969/#000000/#ffffff/#000000" , "Cavalry", "6", "1", "c", "cav", "3", "6", "XX",
"#696969/#000000/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "1", "6", "XX",
"#696969/#000000/#ff0000/#000000" , "Artillery", "8", "1", "a", "art", "4", "3", "",
"#696969/#000000/#ff0000/#000000" , "Artillery", "6", "1", "a", "art", "3", "3", "",


"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#ffffaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "side", "to move", "", ""

];

var numbersA=[
];

//unitColor, textColor, boxColor, boxTextColor
//red and black
var coloring2=["#000000","#ffffff","#000000","#ffffff",
"#ff0000","#ffffff","#ff0000","#ffffff"
];

//other colours
var coloring=["#ff1ec0","#000000", "#a54316","#000000",
"#37c34e","#ffffff", "#6a1d6f","#ffffff"
];


var unitNamesA=[];

var rangeA=[];

var hqA=[];

var designateLA=["Old Gd", "Old Gd", "1", "1",  "1","1", "1",  "2", "1",
 "2", "1", "1", "1",
"1",  "2", "1", "2", "1","2", "2","2", "2",
 "1","2","1", "1", "1", "2",  "1","2",
 "1 Cur",  "Nansouty", "3 Cur", "Pajol", "Normann",
 "Old Gd", "1 YGd", "2 YGd", "XIV",  "II", "VI", "Westphalians", "L. I",
"L. II", "L. III", "L. IV", "L. V",

 "Hohenlohe", "Meyer", "Bianchi", "Chastelr",  "Weissenwolf", "ALichtenstein", "Crenneville", "Chiesa",
"Civallrrt", "Bubna", "Colloredo", "Mezco", "Scheither", "Schneller", "Lederer",  "vHessenHomberg",  "Nostitz",
"Colloredo",  "Reserve 1", "Reserve 2",  "Grendiers", "Gyulai",  "Klenau",

 "1 Gd", "1", "2", "1 Gren.",  "2 Gren.", "2 Gd", "AvGd", "1 Cuirassier",
"3 Cuirassier", "AvGd", "1 LGdCv", "Reserve",  "Gortschakov","Gd","AvGd",

"Guards", "AvGd", "9", "10",  "11","12", "Reserve",  "Reserve", "Reserve","Kliest",

"Game", "Side"];

var designateRA=[
"Friant", "Curial", "1 YGd", "1 YGd",  "2 YGd","2 YGd", "3 YGd",  "3 YGd", "4 YGd",
 "4 YGd", "20/VI", "21/VI", "22/VI", "4/II",
"4/II",  "5/II", "5/II", "6/II", "6/II","20/VI", "21/VI","22/VI", "Teste", "Teste",
 "43/XIV","43/XIV","44/XIV", "44/XIV", "45/XIV", "45/XIV",  "1 RsCav","Gd",
 "1 RsCav",  "XIV RsCv", "VI",
 "", "", "", "",  "", "", "", "",
"", "", "", "",

"", "", "Grenadiers", "Grenadiers",  "", "", "", "Colloredo",
"", "", "", "",  "MLicht","",  "","MLicht",  "",  "", "", "",
 "",  "", "",

 "Rosen", "5", "5 ", "Rajevsky",  "Tchoglikov", "Udom", "Roth", "Depre",
"Duckn", "Lucken", "Shavich", "",  "","","",

"Alvensleben", "Ziethen", "Klux", "Pirch",  "Jagow","Pr August", "Roder",  "Guards", "Braun","",

"Turn", "to move"
];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =43;
var rusPieces =14;
var gerPieces =28;
var neutPieces = 2;

//...calculated here...
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var baseAlen = Abase.length;
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+"noOfItems="+noOfItems+"i*noOfItems="+(i*noOfItems)+"unitsA[i*noOfItems]="+unitsA[i*noOfItems])
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  if(dumBase0==Abase[0]||dumBase0==Abase[1]||dumBase0==Abase[2]){//if side A
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==Bbase[0]||dumBase0==Bbase[1]||dumBase0==Bbase[2]){//if side B
  gerUnits = 1*gerUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else{
    neutUnits = 1*neutUnits + 1*unitsA[(i*noOfItems)+3];
  }
}


noOfPieces= rusUnits+gerUnits+neutUnits; //no of pieces in game
unitTotal= totalPieces; //number of types of pieces
lastIndex= rusUnits+gerUnits+neutUnits; //index number of last piece - north marker
gerNumber= rusUnits;//rusUnits+1; //the index number of the first german piece
neutNumber= rusUnits+gerUnits+1;//rusUnits+gerUnits+1; //index number of first neutral piece


var board1 = "boards/Dresden board 8.png";
var board_setup = "boards/Dresden board 4.png";
var board2 = "boards/Austerlitz board 2.png";
var board3 = "boards/Dresden board 8.png";

var boardA = ["boards/Dresden board 8.png", "boards/Dresden board 4.png",
"boards/Dresden board 2.png", "boards/Dresden board 8.png" ]


var hidJapUnitA = new Array();
var hidJapUnitAlen = 0;
/*
  hidJapUnitA[0]="neut/j_blank1.jpg";
  hidJapUnitA[1]="Japan dummy unit \n...?";
  hidJapUnitAlen++;
*/
var hidJapArtA = new Array();
var hidJapArtAlen = 0;
/*
    hidJapArtA[0]="neut/j_blank1.jpg";
    hidJapArtA[1]="Japan dummy unit \n...?";
    hidJapArtAlen++;
*/
var japInfA=[
]
var japInfTListA =[
]

var japArtA=[
]
var japArtTListA =[
]

var maxTurns = 32;
var startYear=26;
//var seasonA=new Array();
var seasonA=["16:00","17:00","18:00","19:00","20:00","21:00", "22:00 Night","02:00 Night",
 "06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00", "22:00 Night","02:00 Night",
 "06:00","08:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"];
var yearAdd = 0;//counts how many times go thru seasonA array
//var currentPlayer=nameB;//give name of non-starting player as it clicks over as starts
//above moved to 'units' file
var startSeasonOffset=0;
var seasonNow=seasonA[0+startSeasonOffset];
var yearNow=startYear;


function nameOfTurn(){
var weather = "";
	if(turnLetter=="A"){
	currentPlayer=startingPlayer;}
else{
	currentPlayer=secondPlayer;}
var step3 = turnNumber*1;
step3=turnNumber;
turnPos = step3;
if(turnPos==7||turnPos==17){
yearAdd++;
yearNow=yearNow+1;
//turnPos=0;
}
if(turnPos>5&&turnPos<20){
  weather = "RAIN";
}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Aug "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\n"+seasonNow+"\n"+yearNow+"th Aug "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
