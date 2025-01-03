var situationAddress="situations/boudica_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/boudica_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/legionWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Boudica_setup.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 827, 356, 0, 0, 0, 0, 0, 0, 0, 824, 354, 0, 0, 0, 0, 0, 0, 0, 796, 334, 0, 0, 0, 0, 0, 0, 0, 804, 342, 0, 0, 0, 0, 0, 0, 0, 801, 339, 0, 0, 0, 0, 0, 0, 0, 799, 337, 0, 0, 0, 0, 0, 0, 0, 795, 363, 0, 0, 0, 0, 0, 0, 0, 797, 365, 0, 0, 0, 0, 0, 0, 0, 800, 368, 0, 0, 0, 0, 0, 0, 0, 802, 370, 0, 0, 0, 0, 0, 0, 0, 772, 318, 0, 0, 0, 0, 0, 0, 0, 775, 321, 0, 0, 0, 0, 0, 0, 0, 780, 326, 0, 0, 0, 0, 0, 0, 0, 777, 323, 0, 0, 0, 0, 0, 0, 0, 779, 356, 0, 0, 0, 0, 0, 0, 0, 777, 354, 0, 0, 0, 0, 0, 0, 0, 774, 351, 0, 0, 0, 0, 0, 0, 0, 772, 349, 0, 0, 0, 0, 0, 0, 0, 769, 346, 0, 0, 0, 0, 0, 0, 0, 552, 431, 0, 0, 0, 0, 0, 0, 0, 531, 412, 0, 0, 0, 0, 0, 0, 0, 552, 397, 0, 0, 0, 0, 0, 0, 0, 476, 329, 0, 0, 0, 0, 0, 0, 0, 444, 316, 0, 0, 0, 0, 0, 0, 0, 474, 300, 0, 0, 0, 0, 0, 0, 0, 598, 368, 0, 0, 0, 0, 0, 0, 0, 553, 373, 0, 0, 0, 0, 0, 0, 0, 501, 397, 0, 0, 0, 0, 0, 0, 0, 575, 389, 0, 0, 0, 0, 0, 0, 0, 578, 412, 0, 0, 0, 0, 0, 0, 0, 555, 400, 0, 0, 0, 0, 0, 0, 0, 602, 397, 0, 0, 0, 0, 0, 0, 0, 503, 339, 0, 0, 0, 0, 0, 0, 0, 455, 257, 0, 0, 0, 0, 0, 0, 0, 477, 302, 0, 0, 0, 0, 0, 0, 0, 596, 365, 0, 0, 0, 0, 0, 0, 0, 572, 386, 0, 0, 0, 0, 0, 0, 0, 503, 400, 0, 0, 0, 0, 0, 0, 0, 527, 355, 0, 0, 0, 0, 0, 0, 0, 576, 409, 0, 0, 0, 0, 0, 0, 0, 599, 394, 0, 0, 0, 0, 0, 0, 0, 528, 385, 0, 0, 0, 0, 0, 0, 0, 505, 342, 0, 0, 0, 0, 0, 0, 0, 452, 254, 0, 0, 0, 0, 0, 0, 0, 474, 326, 0, 0, 0, 0, 0, 0, 0, 446, 319, 0, 0, 0, 0, 0, 0, 0, 551, 370, 0, 0, 0, 0, 0, 0, 0, 529, 357, 0, 0, 0, 0, 0, 0, 0, 528, 410, 0, 0, 0, 0, 0, 0, 0, 550, 428, 0, 0, 0, 0, 0, 0, 0, 526, 383, 0, 0, 0, 0, 0, 0, 0, 502, 369, 0, 0, 0, 0, 0, 0, 0, 499, 367, 0, 0, 0, 0, 0, 0, 0, 452, 287, 0, 0, 0, 0, 0, 0, 0, 548, 368, 0, 0, 0, 0, 0, 0, 0, 509, 31, 0, 0, 0, 1, 8,A,0,situations/boudica_sit.html";
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

var multiThisNow = 0.84;
var swidth=7400; //width of biggest board
var sheight=6560; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=56 //no of pieces in game
var unitTotal=8; //number of types of pieces
var lastIndex=56; //index number of last piece - turn now
var gerNumber=20; //the index number of the first side B piece
var neutNumber=56; //index number of first neutral piece


var Abase = "red/"
var Bbase = "cream/"
var Apanic=19;
var Bpanic=27;
var maxTurns = 15;
var nameA="Romans";
var nameB="Britons";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "Khaki";
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

"red/s2.jpg", "PL af:4 mf:4 fire:1/1 vp:", "2", "10", "f",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",
"red/lc.jpg", "LC af:1 mf:9 vp:", "1",  "4", "c",
"red/1l.jpg", "1L combat:+9 radius:2 mf:9 vp", "4", "1", "l",

"cream/bi.jpg", "BI Briton af:[6] mf:5 vp:", "3",  "35", "n",
"cream/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",

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


var board1 = "boards/Boudica_size8.jpg";
var board_setup = "boards/Boudica_setup.jpg";
var board2 = "boards/legion.jpg";
var board3 = "boards/viking.jpg";
