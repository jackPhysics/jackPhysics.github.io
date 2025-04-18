var situationAddress="situations/sabine_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/sabine_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/spartanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Sabines_setup.jpg";
var presetupGameData = "0, 0, 0, 0, 0, 0, 233, 489, 0, 0, 0, 0, 0, 0, 0, 256, 488, 0, 0, 0, 0, 0, 0, 0, 283, 493, 0, 0, 0, 0, 0, 0, 0, 235, 492, 0, 0, 0, 0, 0, 0, 0, 215, 500, 0, 0, 0, 0, 0, 0, 0, 196, 508, 0, 0, 0, 0, 0, 0, 0, 199, 511, 0, 0, 0, 0, 0, 0, 0, 217, 502, 0, 0, 0, 0, 0, 0, 0, 253, 486, 0, 0, 0, 0, 0, 0, 0, 285, 496, 0, 0, 0, 0, 0, 0, 0, 306, 507, 0, 0, 0, 0, 0, 0, 0, 304, 505, 0, 0, 0, 0, 0, 0, 0, 327, 523, 0, 0, 0, 0, 0, 0, 0, 335, 544, 0, 0, 0, 0, 0, 0, 0, 337, 547, 0, 0, 0, 0, 0, 0, 0, 324, 520, 0, 0, 0, 0, 0, 0, 0, 214, 269, 0, 0, 0, 0, 0, 0, 0, 183, 256, 0, 0, 0, 0, 0, 0, 0, 235, 283, 0, 0, 0, 0, 0, 0, 0, 180, 253, 0, 0, 0, 0, 0, 0, 0, 205, 269, 0, 0, 0, 0, 0, 0, 0, 185, 258, 0, 0, 0, 0, 0, 0, 0, 266, 291, 0, 0, 0, 0, 0, 0, 0, 264, 289, 0, 0, 0, 0, 0, 0, 0, 261, 286, 0, 0, 0, 0, 0, 0, 0, 304, 270, 0, 0, 0, 0, 0, 0, 0, 306, 272, 0, 0, 0, 0, 0, 0, 0, 284, 280, 0, 0, 0, 0, 0, 0, 0, 286, 282, 0, 0, 0, 0, 0, 0, 0, 326, 259, 0, 0, 0, 0, 0, 0, 0, 324, 257, 0, 0, 0, 0, 0, 0, 0, 119, 447, 0, 0, 0, 1, 8,A,0,situations/sabine_sit.html";
var setupGameData = "0, 0, 0, 0, 0, 0, 268, 556, 0, 0, 0, 0, 0, 0, 0, 252, 565, 0, 0, 0, 0, 0, 0, 0, 251, 523, 0, 0, 0, 0, 0, 0, 0, 230, 558, 0, 0, 0, 0, 0, 0, 0, 270, 534, 0, 0, 0, 0, 0, 0, 0, 209, 544, 0, 0, 0, 0, 0, 0, 0, 228, 534, 0, 0, 0, 0, 0, 0, 0, 289, 544, 0, 0, 0, 0, 0, 0, 0, 251, 544, 0, 0, 0, 0, 0, 0, 0, 192, 533, 0, 0, 0, 0, 0, 0, 0, 271, 511, 0, 0, 0, 0, 0, 0, 0, 232, 510, 0, 0, 0, 0, 0, 0, 0, 291, 521, 0, 0, 0, 0, 0, 0, 0, 209, 524, 0, 0, 0, 0, 0, 0, 0, 189, 557, 0, 0, 0, 0, 0, 0, 0, 250, 501, 0, 0, 0, 0, 0, 0, 0, 230, 258, 0, 0, 0, 0, 0, 0, 0, 230, 238, 0, 0, 0, 0, 0, 0, 0, 270, 259, 0, 0, 0, 0, 0, 0, 0, 252, 249, 0, 0, 0, 0, 0, 0, 0, 249, 270, 0, 0, 0, 0, 0, 0, 0, 271, 238, 0, 0, 0, 0, 0, 0, 0, 292, 228, 0, 0, 0, 0, 0, 0, 0, 209, 251, 0, 0, 0, 0, 0, 0, 0, 292, 253, 0, 0, 0, 0, 0, 0, 0, 309, 216, 0, 0, 0, 0, 0, 0, 0, 250, 226, 0, 0, 0, 0, 0, 0, 0, 212, 226, 0, 0, 0, 0, 0, 0, 0, 192, 215, 0, 0, 0, 0, 0, 0, 0, 192, 237, 0, 0, 0, 0, 0, 0, 0, 310, 237, 0, 0, 0, 0, 0, 0, 0, 119, 447, 0, 0, 0, 1, 8,A,0,situations/sabine_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 233, 489, 0, 0, 0, 0, 0, 0, 0, 256, 488, 0, 0, 0, 0, 0, 0, 0, 283, 493, 0, 0, 0, 0, 0, 0, 0, 235, 492, 0, 0, 0, 0, 0, 0, 0, 215, 500, 0, 0, 0, 0, 0, 0, 0, 196, 508, 0, 0, 0, 0, 0, 0, 0, 199, 511, 0, 0, 0, 0, 0, 0, 0, 217, 502, 0, 0, 0, 0, 0, 0, 0, 253, 486, 0, 0, 0, 0, 0, 0, 0, 285, 496, 0, 0, 0, 0, 0, 0, 0, 306, 507, 0, 0, 0, 0, 0, 0, 0, 304, 505, 0, 0, 0, 0, 0, 0, 0, 327, 523, 0, 0, 0, 0, 0, 0, 0, 335, 544, 0, 0, 0, 0, 0, 0, 0, 337, 547, 0, 0, 0, 0, 0, 0, 0, 324, 520, 0, 0, 0, 0, 0, 0, 0, 214, 269, 0, 0, 0, 0, 0, 0, 0, 183, 256, 0, 0, 0, 0, 0, 0, 0, 235, 283, 0, 0, 0, 0, 0, 0, 0, 180, 253, 0, 0, 0, 0, 0, 0, 0, 205, 269, 0, 0, 0, 0, 0, 0, 0, 185, 258, 0, 0, 0, 0, 0, 0, 0, 266, 291, 0, 0, 0, 0, 0, 0, 0, 264, 289, 0, 0, 0, 0, 0, 0, 0, 261, 286, 0, 0, 0, 0, 0, 0, 0, 304, 270, 0, 0, 0, 0, 0, 0, 0, 306, 272, 0, 0, 0, 0, 0, 0, 0, 284, 280, 0, 0, 0, 0, 0, 0, 0, 286, 282, 0, 0, 0, 0, 0, 0, 0, 326, 259, 0, 0, 0, 0, 0, 0, 0, 324, 257, 0, 0, 0, 0, 0, 0, 0, 119, 447, 0, 0, 0, 1, 8,A,0,situations/sabine_sit.html";
    setupGameData[1] = "0, 0, 0, 0, 0, 0, 268, 556, 0, 0, 0, 0, 0, 0, 0, 252, 565, 0, 0, 0, 0, 0, 0, 0, 251, 523, 0, 0, 0, 0, 0, 0, 0, 230, 558, 0, 0, 0, 0, 0, 0, 0, 270, 534, 0, 0, 0, 0, 0, 0, 0, 209, 544, 0, 0, 0, 0, 0, 0, 0, 228, 534, 0, 0, 0, 0, 0, 0, 0, 289, 544, 0, 0, 0, 0, 0, 0, 0, 251, 544, 0, 0, 0, 0, 0, 0, 0, 192, 533, 0, 0, 0, 0, 0, 0, 0, 271, 511, 0, 0, 0, 0, 0, 0, 0, 232, 510, 0, 0, 0, 0, 0, 0, 0, 291, 521, 0, 0, 0, 0, 0, 0, 0, 209, 524, 0, 0, 0, 0, 0, 0, 0, 189, 557, 0, 0, 0, 0, 0, 0, 0, 250, 501, 0, 0, 0, 0, 0, 0, 0, 230, 258, 0, 0, 0, 0, 0, 0, 0, 230, 238, 0, 0, 0, 0, 0, 0, 0, 270, 259, 0, 0, 0, 0, 0, 0, 0, 252, 249, 0, 0, 0, 0, 0, 0, 0, 249, 270, 0, 0, 0, 0, 0, 0, 0, 271, 238, 0, 0, 0, 0, 0, 0, 0, 292, 228, 0, 0, 0, 0, 0, 0, 0, 209, 251, 0, 0, 0, 0, 0, 0, 0, 292, 253, 0, 0, 0, 0, 0, 0, 0, 309, 216, 0, 0, 0, 0, 0, 0, 0, 250, 226, 0, 0, 0, 0, 0, 0, 0, 212, 226, 0, 0, 0, 0, 0, 0, 0, 192, 215, 0, 0, 0, 0, 0, 0, 0, 192, 237, 0, 0, 0, 0, 0, 0, 0, 310, 237, 0, 0, 0, 0, 0, 0, 0, 119, 447, 0, 0, 0, 1, 8,A,0,situations/sabine_sit.html";
    setupGameData[2] = "";
    setupGameData[3] = "";
    var setUpGameNo = 0;
		var maxNoOfSetUps = 2;
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

var swidth=4920; //width of biggest board
var sheight=6560; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=32 //no of pieces in game
var unitTotal=8; //number of types of pieces
var lastIndex=32; //index number of last piece - turn now
var gerNumber=17; //the index number of the first side B piece
var neutNumber=32; //index number of first neutral piece


var Abase = "red/"
var Bbase = "olive/"
var Apanic=10000;
var Bpanic=10000;
var maxTurns = 10;
var nameA="Romans";
var nameB="Sabines";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "YellowGreen";
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

"red/mi.jpg", "MI af:2 mf:3 vp:", "1", "9", "n",
"red/ax.jpg", "AX af:3 mf:4 vp:", "2", "3", "n",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",

"olive/ms.jpg", "MS af:3 mf:3 vp:", "2", "6", "n",
"olive/ax.jpg", "AX af:3 mf:4 vp:", "2", "7", "n",
"olive/bw.jpg", "BW af:- mf:5 fire:2/2 vp:", "2",  "2", "f",

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


var board1 = "boards/Sabines.jpg";
var board_setup = "boards/Sabines_setup.jpg";
var board2 = "boards/spartan.jpg";
var board3 = "boards/arbela1.jpg";
