var situationAddress="situations/Crecy_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags McA edit.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/Crecy_sit.html"; //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/yeomanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Crecy_setup.jpg";
var presetupGameData = "";
var setupGameData = "0,0,397,0,0,0,64,379,x, 0,0,394,0,0,0,67,381,x, 0,0,401,0,0,0,116,408,x, 0,0,404,0,0,0,113,406,x, 0,0,390,0,0,0,88,392,x, 0,0,369,0,0,0,138,393,x, 0,0,359,0,0,0,116,386,x, 0,0,380,0,0,0,92,368,x, 0,0,383,0,0,0,90,365,x, 0,0,362,0,0,0,113,383,x, 0,0,366,0,0,0,140,395,x, 0,0,387,0,0,0,91,394,x, 0,0,458,0,0,0,281,393,x, 0,0,476,0,0,0,307,408,x, 0,0,419,0,0,0,258,407,x, 0,0,422,0,0,0,255,405,x, 0,0,455,0,0,0,284,396,x, 0,0,462,0,0,0,284,422,x, 0,0,465,0,0,0,282,419,x, 0,0,469,0,0,0,260,435,x, 0,0,472,0,0,0,257,432,x, 0,0,479,0,0,0,304,406,x, 0,0,426,0,0,0,282,366,x, 0,0,430,0,0,0,279,372,x, 0,0,412,0,0,0,259,382,x, 0,0,415,0,0,0,256,380,x, 0,0,487,0,0,0,331,396,x, 0,0,490,0,0,0,328,393,x, 0,0,448,0,0,0,331,369,x, 0,0,451,0,0,0,329,367,x, 0,0,434,0,0,0,306,354,x, 0,0,437,0,0,0,303,351,x, 0,0,441,0,0,0,307,380,x, 0,0,444,0,0,0,305,377,x, 0,0,502,0,0,0,253,402,x, 0,0,496,0,0,0,302,375,x, 0,0,296,0,0,0,286,123,x, 0,0,300,0,0,0,284,151,x, 0,0,292,0,0,0,283,95,x, 0,0,309,0,0,0,307,163,PS, 0,0,318,0,0,0,330,176,PS, 0,0,313,0,0,0,280,93,PS, 0,0,346,0,0,0,306,81,x, 0,0,342,0,0,0,306,107,x, 0,0,338,0,0,0,328,149,x, 0,0,330,0,0,0,283,121,x, 0,0,334,0,0,0,306,137,x, 0,0,321,0,0,0,327,173,x, 0,0,324,0,0,0,305,161,x, 0,0,327,0,0,0,282,148,x, 0,0,355,0,0,0,281,118,x, 0,0,352,0,0,0,302,158,x, 0,0,506,0,0,0,199,405,x, 0,0,1,8,A,1,situations/Crecy_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0,0,397,0,0,0,64,379,x, 0,0,394,0,0,0,67,381,x, 0,0,401,0,0,0,116,408,x, 0,0,404,0,0,0,113,406,x, 0,0,390,0,0,0,88,392,x, 0,0,369,0,0,0,138,393,x, 0,0,359,0,0,0,116,386,x, 0,0,380,0,0,0,92,368,x, 0,0,383,0,0,0,90,365,x, 0,0,362,0,0,0,113,383,x, 0,0,366,0,0,0,140,395,x, 0,0,387,0,0,0,91,394,x, 0,0,458,0,0,0,281,393,x, 0,0,476,0,0,0,307,408,x, 0,0,419,0,0,0,258,407,x, 0,0,422,0,0,0,255,405,x, 0,0,455,0,0,0,284,396,x, 0,0,462,0,0,0,284,422,x, 0,0,465,0,0,0,282,419,x, 0,0,469,0,0,0,260,435,x, 0,0,472,0,0,0,257,432,x, 0,0,479,0,0,0,304,406,x, 0,0,426,0,0,0,282,366,x, 0,0,430,0,0,0,279,372,x, 0,0,412,0,0,0,259,382,x, 0,0,415,0,0,0,256,380,x, 0,0,487,0,0,0,331,396,x, 0,0,490,0,0,0,328,393,x, 0,0,448,0,0,0,331,369,x, 0,0,451,0,0,0,329,367,x, 0,0,434,0,0,0,306,354,x, 0,0,437,0,0,0,303,351,x, 0,0,441,0,0,0,307,380,x, 0,0,444,0,0,0,305,377,x, 0,0,502,0,0,0,253,402,x, 0,0,496,0,0,0,302,375,x, 0,0,296,0,0,0,286,123,x, 0,0,300,0,0,0,284,151,x, 0,0,292,0,0,0,283,95,x, 0,0,309,0,0,0,307,163,PS, 0,0,318,0,0,0,330,176,PS, 0,0,313,0,0,0,280,93,PS, 0,0,346,0,0,0,306,81,x, 0,0,342,0,0,0,306,107,x, 0,0,338,0,0,0,328,149,x, 0,0,330,0,0,0,283,121,x, 0,0,334,0,0,0,306,137,x, 0,0,321,0,0,0,327,173,x, 0,0,324,0,0,0,305,161,x, 0,0,327,0,0,0,282,148,x, 0,0,355,0,0,0,281,118,x, 0,0,352,0,0,0,302,158,x, 0,0,506,0,0,0,199,405,x, 0,0,1,8,A,1,situations/Crecy_sit.html";
    setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
var maxNoOfSetUps = 1;
var unitLocation = "units/";//"units/"; "units3/";
var unitExtension = ".jpg";//".jpg"; ".png";
//var boardSize = 2;//start size of board 1=smallest; 8=largest

var deadPosA_X0 = 4000;
var deadPosA_delX = 400;
var deadPosA_Y0 = 1500;
var deadPosA_delY = 500;
var deadPosB_X0 = 100;
var deadPosB_delX = 400;
var deadPosB_Y0 = 1500;
var deadPosB_delY = 500;

var multiThisNow = 0.75;
var swidth=3294; //width of biggest board
var sheight=3984; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=53; //no of pieces in game
var unitTotal=11; //number of types of pieces
var lastIndex=53; //index number of last piece - turn now
var gerNumber=36; //the index number of the last side A piece
var neutNumber=53; //index number of first neutral piece


var Abase = "blue/"
var Bbase = "cream/"
var Apanic=38;
var Bpanic=24;
var maxTurns = 15;
var nameA="French";
var nameB="English";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "LawnGreen";
var Bcolor = "Violet";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=100; //unit width/height
var sunit2=100;
var sunitB=71; //unit width/height
var sunitB2=71;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=[

"blue/mi.jpg", "MI af:2 mf:3 vp:", "1",  "12", "n",
"blue/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "16", "c",
"blue/cb.jpg", "CB mf:5 fire:2/3 vp:", "2",  "6", "f",
"blue/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

"cream/pp.jpg", "PP af:6 mf:4 vp:", "3",  "3", "n",
"cream/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "3", "c",
"cream/lb.jpg", "LB mf:5 fire:3/3 vp:", "3",  "8", "f",
"cream/2l.jpg", "2L combat:+6 radius:2 mf:9 HENRY V  vp", "3", "1", "l",
"cream/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x",
];

var unitNamesA=[];
//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces = 82;
var rusPieces = 31;
var gerPieces = 40;
var neutPieces = 10;
//...calculated here...
var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var baseA1 = Abase.slice(0,-1);
var baseB1 = Bbase.slice(0,-1);
var loopLen = unitsA.length/noOfItems;

for(i=0;i<loopLen;i++){
  //alert("i="+i+" noOfItems="+noOfItems+" i*noOfItems="+(i*noOfItems)+" unitsA[i*noOfItems]="+unitsA[i*noOfItems])
  var dumBaseA = unitsA[i*noOfItems].split("/");
  var dumBase0 = dumBaseA[0];
  if(dumBase0==baseA1){
    rusUnits = 1*rusUnits + 1*unitsA[(i*noOfItems)+3];
  }
  else if(dumBase0==baseB1){
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
neutNumber= rusUnits+gerUnits;//rusUnits+gerUnits+1; //index number of first neutral piece



var board1 = "boards/Crecy.jpg";
var board_setup = "boards/Crecy_setup.jpg";
var board2 = "boards/Yeomen all bnw.jpg";
var board3 = "boards/viking.jpg";
