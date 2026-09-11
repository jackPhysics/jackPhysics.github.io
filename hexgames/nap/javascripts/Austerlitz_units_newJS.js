var situationAddress="situations/Austerlitz setup.html";
var tecAddress="charts/TEC Austerlitz.html";
var crtAddress="charts/CRT Borodino.html"; //"charts/goa crt.htm";
var crt2Address="charts/CRT Austerlitz.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Austerlitz.html" //MAP
var rulesAddress="rules/BattleAusterlitz.pdf"
var errataAddress="rules/reinf rulesAddress.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Austerlitz board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData=new Array();
    setupGameData[0] = "0,0,102,0,0,0,922,282,13, 0,0,106,0,0,0,461,171,12, 0,0,110,0,0,0,479,171,11, 0,0,114,0,0,0,500,172,11, 0,0,118,0,0,0,621,380,10, 0,0,122,0,0,0,699,383,7, 0,0,126,0,0,0,525,170,7, 0,0,146,0,0,0,5,381,7, 0,0,142,0,0,0,443,490,6, 0,0,138,0,0,0,482,420,6, 0,0,150,0,0,0,115,700,5, 0,0,154,0,0,0,823,386,5, 0,0,158,0,0,0,740,383,5, 0,0,162,0,0,0,257,594,4, 0,0,166,0,0,0,539,382,3, 0,0,170,0,0,0,198,631,3, 0,0,174,0,0,0,841,347,3, 0,0,178,0,0,0,546,170,4, 0,0,182,0,0,0,566,173,4, 0,0,186,0,0,0,462,150,4, 0,0,190,0,0,0,480,153,4, 0,0,194,0,0,0,495,155,3, 0,0,198,0,0,0,517,154,3, 0,0,202,0,0,0,17,364,3, 0,0,206,0,0,0,362,561,2, 0,0,210,0,0,0,904,314,1, 0,0,214,0,0,0,535,154,5, 0,0,218,0,0,0,557,156,5, 0,0,222,0,0,0,724,349,3, 0,0,226,0,0,0,419,446,3, 0,0,230,0,0,0,890,278,3, 0,0,234,0,0,0,8,343,3, 0,0,238,0,0,0,864,242,3, 0,0,242,0,0,0,800,349,2, 0,0,246,0,0,0,559,133,2, 0,0,250,0,0,0,158,558,2, 0,0,254,0,0,0,859,592,15, 0,0,258,0,0,0,846,630,10, 0,0,262,0,0,0,236,773,6, 0,0,266,0,0,0,259,734,6, 0,0,270,0,0,0,927,491,4, 0,0,274,0,0,0,231,764,2, 0,0,278,0,0,0,886,630,9, 0,0,282,0,0,0,315,770,3, 0,0,286,0,0,0,419,734,16, 0,0,290,0,0,0,640,703,16, 0,0,294,0,0,0,823,734,14, 0,0,298,0,0,0,1068,456,13, 0,0,302,0,0,0,585,527,13, 0,0,306,0,0,0,602,489,12, 0,0,310,0,0,0,441,701,11, 0,0,314,0,0,0,1048,486,10, 0,0,318,0,0,0,763,630,9, 0,0,322,0,0,0,722,631,5, 0,0,326,0,0,0,562,489,5, 0,0,330,0,0,0,904,526,8, 0,0,334,0,0,0,1032,449,7, 0,0,338,0,0,0,886,486,6, 0,0,393,0,0,0,1038,406,4, 0,0,387,0,0,0,776,727,4, 0,0,350,0,0,0,460,664,11, 0,0,354,0,0,0,867,732,8, 0,0,358,0,0,0,742,664,7, 0,0,362,0,0,0,1067,520,6, 0,0,366,0,0,0,623,521,6, 0,0,399,0,0,0,1062,888,TURN, 0,0,99,0,0,0,335,185,to move, 0,0,1,8,A,0,situations/Austerlitz setup.html";
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

var swidth=3000*3; //width of biggest board
var sheight=3000*3; //height of biggest board
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
var Bbase = ["#77ff00","#a9a9a9", "#00ff01"];
var Apanic=70;
var Bpanic=80;
var maxTurns = 11;
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
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "13", "1", "n", "inf", "13", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "12", "1", "n", "inf", "12", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "11", "2", "n", "inf", "11", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "10", "1", "n", "inf", "10", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "7", "2", "n", "inf", "7", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "7", "1", "n", "inf", "7", "3", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "6", "2", "n", "inf", "6", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "5", "3", "n", "inf", "5", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "4", "1", "n", "inf", "4", "5", "XX",
"#0000ff/#ffff00/#ffff00/#000000", "Infantry", "3", "3", "n", "inf", "3", "5", "XX",
"#0000ff/#ffff00/#ff8c00/#000000", "Dragoons", "4", "2", "n", "dra", "4", "6", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "4", "2", "c", "cav", "4", "6", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "3", "1", "c", "cav", "3", "8", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "3", "1", "c", "cav", "3", "6", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "3", "1", "c", "cav", "3", "5", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "2", "1", "c", "cav", "2", "8", "XX",
"#0000ff/#ffff00/#ffffff/#000000", "Cavalry", "1", "1", "c", "cav", "1", "6", "XX",
"#0000ff/#ffff00/#ff0000/#000000", "Artillery", "5", "2", "a", "art", "5", "4", "XX",
"#0000ff/#ffff00/#ff0000/#000000", "Artillery", "3", "3", "a", "art", "3", "4", "XX",
"#0000ff/#ffff00/#ff0000/#000000", "Artillery", "3", "1", "a", "art", "3", "3", "XX",
"#0000ff/#ffff00/#ff0000/#000000", "Artillery", "3", "1", "a", "art", "3", "0", "XX",
"#0000ff/#ffff00/#ff0000/#000000", "Artillery", "2", "3", "a", "art", "2", "4", "XX",

"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "15", "1", "n", "inf", "15", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "10", "1", "n", "inf", "10", "4", "XX",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "7", "1", "n", "inf", "6", "4", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "6", "1", "c", "cav", "6", "8", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "4", "1", "c", "cav", "4", "6", "XX",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "2", "8", "XX",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "9", "1", "a", "art", "9", "4", "XX",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "3", "1", "a", "art", "3", "3", "XX",

"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "16", "2", "n", "inf", "16", "3", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "14", "1", "n", "inf", "14", "5", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "13", "1", "n", "inf", "13", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "13", "1", "n", "inf", "13", "3", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "12", "1", "n", "inf", "12", "3", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "11", "1", "n", "inf", "11", "3", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "10", "1", "n", "inf", "10", "5", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "9", "1", "n", "inf", "9", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "5", "1", "n", "inf", "5", "4", "XX",
"#556b2f/#ffffff/#ffff00/#000000" , "Infantry", "5", "1", "n", "inf", "5", "5", "XX",
"#556b2f/#ffffff/#ff8c00/#000000" , "Dragoons", "8", "1", "n", "dra", "8", "6", "XX",
"#556b2f/#ffffff/#ff8c00/#000000" , "Dragoons", "7", "1", "n", "dra", "7", "8", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "6", "1", "c", "cav", "6", "8", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "4", "1", "c", "cav", "4", "8", "XX",
"#556b2f/#ffffff/#ffffff/#000000" , "Cavalry", "4", "1", "c", "cav", "4", "6", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "11", "1", "a", "art", "11", "4", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "8", "1", "a", "art", "8", "3", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "7", "1", "a", "art", "7", "4", "XX",
"#556b2f/#ffffff/#ff0000/#000000" , "Artillery", "6", "2", "a", "art", "6", "4", "XX",

"#aaaaaa/#000000/#ffffff/#000000", "GAME TURN","0","1","x", "GAME", "TURN", "", "",
"#ffffaa/#000000/#ffffff/#000000", "Side to move","0","1","x", "side", "to move", "", ""
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

var hqA=["", "I", "III", "IV","VIII", "V",
 "IG", "IG","1st", "2nd", "3rd", "4th",


"",
"", "", "IV Corps", "Imperial Grd",
"III Corps", "III Corps", "Imperial Grd", "Imperial Grd",
 "I Corps", "IV*(I) Corps", "IV Corps", "IV Corps",
 "I Corps", "V Corps", "V Corps",
"III Corps",
"VIII Corps","VIII Corps",
"Imperial Grd", "Imperial Grd",
 "I Corps", "III Corps",  "IV Corps", "V Corps", "I Res. Cav.", "I Res. Cav.", "I Res. Cav.", "II Res. Cav.", "II Res. Cav.", "III Res. Cav.", "III Res. Cav.", "IV Res. Cav.", "IV Res. Cav.",
 "VIII Corps", "III Res. Cav.", "IV Res. Cav.",
 "Imperial Grd", "I Corps", "IV Corps",
 "III Corps", "V Corps", "VIII Corps",

 "", "III", "II", "IV","VI", "VII",
  "VIII", "IG",

  "Game", "Side"
];

var designateLA=[
"V Corps", "I Corps",
"I Corps", "V Corps",
"IV Corps",
"IV Corps", "Imperial Grd",
 "III Corps", "IV Corps", "IV Corps",
 "IV Corps", "V Corps", "V Corps",
"IV Corps",
 "IV Corps", "IV Corps", "V Corps",
"Cav Res","Cav Res",
"Cav Res","Cav Res",
"I Corps", "Imperial Grd","III Corps",
 "IV Corps", "V Corps",
"I Corps", "Imperial Grd",
"IV Corps",  "IV Corps", "V Corps",
"III Corps", "V Corps",
"V Corps", "V Corps", "IV Corps",

 "Centre", "Centre", "Left",
 "Left","Right", "Left",
 "Centre", "Left",


 "Left", "Left", "Reserve", "Bagration","Left", "Left",
 "Left", "Bagration", "Centre", "Centre", "Left",
 "Right", "Bagration",
 "Right","Bagration", "Reserve",
 "Left", "Reserve", "Centre", "Bagration", "Left", "Left",

 "Turn", "to move"];

var designateRA=[
 "Caffarelli", "Drouet",
"Rivaud","Oudinot",
 "Shirer",
 "Candras", "Soules",
"Friant", "Vare", "Thiebaud",
 "Levasseur", "Becker", "Valhubert",
 "Ferey",
 "Morand", "Merle", "Claparede",
"Beaumont","Walther",
"D'Hautpoul","Nansouty",
"Kellerman", "Ordener","Bourcier",
 "Margaron", "Fauconnet",
"Bernadotte","Couin",
"Cabau", "Fontenay","Vasservas",
 "Ourie", "Santon",
"Fruchard", "Baltus","Cuny",

 "Rottermund", "Jurschek", "Carneville",
 "Stutterheim","Hohenloe", "Liechtenstein",
 "Kollowrath", "Kienmayer",


 "Levis", "Przbezewski", "Jankovich", "Dolgoruki","Kamensky", "Alsusiev",
 "Urusov", "Ulanius", "Miloradovitch", "Wodnianski", "Soulima",
 "Uvarov", "Chaplits",
 "Essen", "Lifeguard", "Wittgenstein",
 "Doctorov", "Kapersky", "Miloradovitch", "Bagration", "Langeron", "Przbezewski",

 "",

""
];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces =51;
var rusPieces =22;
var gerPieces =27;
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


var board1 = "boards/Austerlitz board 8.png";
var board_setup = "boards/Austerlitz board 4.png";
var board2 = "boards/Austerlitz board 2.png";
var board3 = "boards/Austerlitz board 8.png";

var boardA = ["boards/Austerlitz board 8.png", "boards/Austerlitz board 8.png",
"boards/Austerlitz board 8.png", "boards/Austerlitz board 8.png" ]


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
