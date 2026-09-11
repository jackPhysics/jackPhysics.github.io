var situationAddress="situations/marengo rules.pdf";
var tecAddress="charts/nap_quad_TEC.html";
var crt2Address="charts/nap_quad_CRT.html"; //"charts/goa crt.htm";
var crtAddress="charts/CRT Dresden.html"
var reinfAddress="charts/reinf ruled.html" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/SoP Austerlitz.html" //seq of play
var victoryAddress="situations/pharsalus_sit.html" //victory, situation
var weatherAddress="charts/Kr battle manual.pdf" //weather
var supplyAddress="charts/map Dresden.html" //MAP
var rulesAddress="rules/nap_quad_rules.pdf"
var errataAddress="rules/reinf rulesAddress.html" //extra rules
var manualAddress="rules/OOB Borodino.html" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Marengo board 8.png";
var presetupGameData = "";
var setupGameData ="";

var setupGameData = new Array();
//rotated to show which units cannot move turn 1
setupGameData[0] = "0,0,212,0,0,0,416,779,5, 0,0,672,0,0,0,860,18,5, 0,0,211,0,0,0,430,749,5, 0,0,660,0,0,0,429,15,4, 0,0,328,0,0,0,356,512,4, 0,0,280,0,0,0,388,835,4, 0,0,259,0,0,0,370,484,4, 0,0,666,0,0,0,427,43,4, 0,0,678,0,0,0,862,45,4, 0,0,313,0,0,0,401,755,4, 0,0,223,0,0,0,339,485,3, 0,0,657,0,0,0,380,41,3, 0,0,663,0,0,0,420,33,3, 0,0,277,0,0,0,357,834,2, 0,0,675,0,0,0,852,33,2, 0,0,241,0,0,0,387,511,2, 0,0,250,0,0,0,527,809,2, 0,0,298,0,0,0,465,266,2, 0,0,684,0,0,0,59,485,2, 0,0,681,0,0,0,49,233,2, 0,0,334,0,0,0,306,648,2, 0,0,307,0,0,0,511,836,2, 0,0,687,0,0,0,49,455,1, 0,0,690,0,0,0,50,510,2, 0,0,454,0,0,0,402,537,2, 0,0,214,0,0,0,447,728,2, 0,0,235,0,0,0,510,401,2, 0,0,669,0,0,0,466,38,2, 0,0,590,0,0,0,291,1053,7, 0,0,593,0,0,0,261,1051,7, 0,0,554,0,0,0,306,971,6, 0,0,563,0,0,0,262,999,5, 0,0,566,0,0,0,245,1025,5, 0,0,605,0,0,0,230,1107,5, 0,0,572,0,0,0,309,1025,4, 0,0,599,0,0,0,244,1080,4, 0,0,602,0,0,0,198,1108,4, 0,0,557,0,0,0,292,944,3, 0,0,560,0,0,0,292,998,3, 0,0,569,0,0,0,277,1027,2, 0,0,596,0,0,0,184,1025,2, 0,0,608,0,0,0,228,891,1, 0,0,626,0,0,0,197,999,5, 0,0,620,0,0,0,245,971,4, 0,0,623,0,0,0,229,997,4, 0,0,614,0,0,0,322,998,2, 0,0,617,0,0,0,276,971,1, 0,0,629,0,0,0,214,1024,1, 0,0,632,0,0,0,273,1079,1, 0,0,641,0,0,0,213,1079,4, 0,0,638,0,0,0,322,1052,3, 0,0,644,0,0,0,198,1053,3, 0,0,635,0,0,0,261,944,2, 0,0,693,0,0,0,898,555,attack!, 0,0,650,0,0,0,868,104,TURN, 0,0,653,0,0,0,357,1038,to move, 0,0,1,8,A,0,situations/Marengo setup.html";
    //non rotated
setupGameData[1] = "";;
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

var swidth=2000*4; //width of biggest board
var sheight=2400*4; //height of biggest board
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
var Apanic=2000;
var Bpanic=2000;
const nameA="French";//player listed 1st in unitsA
const nameB = "Austrian";
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
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "2", "n", "inf", "5", "5", "X",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "5", "1", "n", "inf", "5", "4", "X",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "2", "n", "inf", "4", "5", "X",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "4", "5", "n", "inf", "4", "4", "X",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "3", "3", "n", "inf", "3", "4", "X",
"#0000ff/#ffffff/#ffff00/#000000", "Infantry", "2", "3", "n", "inf", "2", "4", "X",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "3", "c", "cav", "2", "7", "X",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "2", "3", "c", "cav", "2", "6", "X",
"#0000ff/#ffffff/#ffffff/#000000", "Cavalry", "1", "1", "c", "cav", "1", "7", "X",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "2", "1", "a", "art", "2", "6", "X",
"#0000ff/#ffffff/#ff0000/#000000", "Artillery", "2", "4", "a", "art", "2", "4", "X",


"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "7", "1", "n", "inf", "7", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "7", "1", "n", "guard", "7", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "6", "1", "n", "inf", "6", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "5", "3", "n", "inf", "5", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "4", "3", "n", "inf", "4", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "3", "1", "n", "inf", "3", "5", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "3", "1", "n", "inf", "3", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "2", "2", "n", "inf", "2", "3", "X",
"#8fbc8f/#000000/#ffff00/#000000" , "Infantry", "1", "1", "n", "inf", "1", "3", "X",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "5", "1", "c", "cav", "5", "5", "X",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "4", "1", "c", "huss", "4", "7", "X",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "4", "1", "c", "cav", "4", "5", "X",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "2", "1", "c", "cav", "2", "5", "X",
"#8fbc8f/#000000/#ffffff/#000000" , "Cavalry", "1", "3", "c", "cav", "1", "5", "X",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "4", "1", "a", "art", "4", "3", "X",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "3", "2", "a", "art", "3", "3", "X",
"#8fbc8f/#000000/#ff0000/#000000" , "Artillery", "2", "1", "a", "art", "2", "3", "X",


"#ff0000/#0000ff/#ffff00/#000000", "Counterattack!","0","1","x", "Counter-", "attack!", "", "",
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

var designateLA = ["Chambarlhac", "Boudet", "Chambarlhac",
  "Monnier", "Watrin",   "Gardanne", "Watrin",
  "Monnier", "Boudet", "Chambarlhac", "Watrin",
 "Consular", "Monnier", "Gardanne", "Boudet",
  "Watrin", "Kellerman", "Consular", "Murat", "Rivaud", "Champeux",
  "Du Vigneau", "Dumoulin",
 "Horse",  "Lannes", "Victor", "Artillery", "De Saix",

  "Morzin", "Morzin", "O'Reilly", "Haddick",
  "Kain", "Schellenburg",
  "Kain", "Schellenburg", "Schellenburg",
  "Advanced Gd", "Haddick", "Kain", "Schellenburg", "Morzin",

  "Elsnitz", "Haddick", "Elsnitz", "O'Reilly",
  "Advanced", "Schellenburg", "Schellenburg",

  "Left", "Main", "Rightn", "Advanced",
  "Counterattack",
  "Game", "Side"];

var designateRA = ["24th", "9th", "43rd",
  "19th", "69th", "44th",
  "40th",
  "72nd", "59th", "96th", "22nd",
 "Guard", "70th", "101st", "30th",
  "28th", "", "Guard", "", "",  "",
  "", "",
  "Artillery",
  "", "", "Reserve", "",


  "Latterman", "Weidenfeld", "Rousseau", "St.Julien",
  "Knesewich", "Ulm",
  "De Berey", "Sticker", "Retz",
  "Frimont", "Bellegarde", "La Marsaille",
  "Gottesheim", "Pioneer",

  "Nimpisch", "Pilati", "Nobli", "",
  "Guard", "Vogelsgang", "Schellenburg",

  "Column", "Body", "Column", "Guard",

    "",
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

var boardA = ["boards/Marengo board 8.png", "boards/Marengo board 4.png",
"boards/Marengo board 2.png", "boards/Marengo board 8.png" ]


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

var maxTurns = 14;
var startYear=14;
//var seasonA=new Array();
var seasonA=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
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
//if(turnPos==3){
//yearAdd++;
//yearNow=yearNow+1;
//turnPos=0;
//}
//if(turnPos>5&&turnPos<20){
 // weather = "RAIN";
 //}
//var step2=step3-step1*4;
//seasonNow=seasonA[step3];
seasonNow=seasonA[turnPos];
var dummyTurnNo = 1*turnNumber+1;
document.getElementById("turnBox").innerText = currentPlayer+"\nTurn "+seasonNow+"\n"+yearNow+"th June "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
document.getElementById("timebox").innerText = currentPlayer+"\nTurn "+seasonNow+"\n"+yearNow+"th June "+weather+" (#"+dummyTurnNo+")";//+"-"+Number(yearNow+1);
if(turnTock==2){alert("new turn: "+dummyTurnNo+" "+currentPlayer+" (of "+maxTurns+")");
turnTock=0;
saveWindow2();}
//statusNow();
}
