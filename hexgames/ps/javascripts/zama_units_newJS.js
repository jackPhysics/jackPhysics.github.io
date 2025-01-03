var situationAddress="situations/ZAMA.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html";
var reinfAddress="charts/d20.htm"; //reinforcments
var pbmAddress="charts/rallyCalculator.html"; //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt"; //seq of play
var victoryAddress="situations/ZAMA.html"; //victory, situation
var weatherAddress="charts/goa weather.htm"; //weather
var supplyAddress="charts/spartanWEC.html"; //supply
var rulesAddress="rules/prestags_rules.htm";
var errataAddress="rules/New prestag rules Jun09.txt"; //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm"; //battle manual
var SPAREAddress="charts/goa victory.htm"; //SPARE SLOT
var boardAddress = "boards/ZAMA_SETUP.jpg";
var presetupGameData = "0, 0, 0, 0, 0, 0, 140, 467, 0, 0, 0, 0, 0, 0, 0, 153, 468, 0, 0, 0, 0, 0, 0, 0, 140, 475, 0, 0, 0, 0, 0, 0, 0, 150, 477, 0, 0, 0, 0, 0, 0, 0, 129, 464, 0, 0, 0, 0, 0, 0, 0, 132, 473, 0, 0, 0, 0, 0, 0, 0, 122, 447, 0, 0, 0, 0, 0, 0, 0, 153, 456, 0, 0, 0, 0, 0, 0, 0, 162, 469, 0, 0, 0, 0, 0, 0, 0, 162, 475, 0, 0, 0, 0, 0, 0, 0, 137, 456, 0, 0, 0, 0, 0, 0, 0, 145, 454, 0, 0, 0, 0, 0, 0, 0, 136, 422, 0, 0, 0, 0, 0, 0, 0, 142, 420, 0, 0, 0, 0, 0, 0, 0, 141, 429, 0, 0, 0, 0, 0, 0, 0, 134, 432, 0, 0, 0, 0, 0, 0, 0, 148, 392, 0, 0, 0, 0, 0, 0, 0, 134, 395, 0, 0, 0, 0, 0, 0, 0, 142, 365, 0, 0, 0, 0, 0, 0, 0, 149, 362, 0, 0, 0, 0, 0, 0, 0, 142, 375, 0, 0, 0, 0, 0, 0, 0, 149, 369, 0, 0, 0, 0, 0, 0, 0, 171, 323, 0, 0, 0, 0, 0, 0, 0, 182, 322, 0, 0, 0, 0, 0, 0, 0, 180, 326, 0, 0, 0, 0, 0, 0, 0, 170, 332, 0, 0, 0, 0, 0, 0, 0, 181, 335, 0, 0, 0, 0, 0, 0, 0, 170, 338, 0, 0, 0, 0, 0, 0, 0, 225, 512, 0, 0, 0, 0, 0, 0, 0, 232, 507, 0, 0, 0, 0, 0, 0, 0, 218, 511, 0, 0, 0, 0, 0, 0, 0, 233, 519, 0, 0, 0, 0, 0, 0, 0, 224, 323, 0, 0, 0, 0, 0, 0, 0, 233, 327, 0, 0, 0, 0, 0, 0, 0, 223, 333, 0, 0, 0, 0, 0, 0, 0, 217, 328, 0, 0, 0, 0, 0, 0, 0, 282, 362, 0, 0, 0, 0, 0, 0, 0, 277, 357, 0, 0, 0, 0, 0, 0, 0, 484, 460, 0, 0, 0, 0, 0, 0, 0, 493, 455, 0, 0, 0, 0, 0, 0, 0, 476, 464, 0, 0, 0, 0, 0, 0, 0, 498, 463, 0, 0, 0, 0, 0, 0, 0, 539, 363, 0, 0, 0, 0, 0, 0, 0, 551, 363, 0, 0, 0, 0, 0, 0, 0, 541, 372, 0, 0, 0, 0, 0, 0, 0, 550, 375, 0, 0, 0, 0, 0, 0, 0, 540, 382, 0, 0, 0, 0, 0, 0, 0, 551, 386, 0, 0, 0, 0, 0, 0, 0, 541, 396, 0, 0, 0, 0, 0, 0, 0, 553, 394, 0, 0, 0, 0, 0, 0, 0, 539, 349, 0, 0, 0, 0, 0, 0, 0, 566, 385, 0, 0, 0, 0, 0, 0, 0, 564, 372, 0, 0, 0, 0, 0, 0, 0, 565, 360, 0, 0, 0, 0, 0, 0, 0, 563, 346, 0, 0, 0, 0, 0, 0, 0, 561, 391, 0, 0, 0, 0, 0, 0, 0, 558, 380, 0, 0, 0, 0, 0, 0, 0, 558, 370, 0, 0, 0, 0, 0, 0, 0, 559, 356, 0, 0, 0, 0, 0, 0, 0, 556, 342, 0, 0, 0, 0, 0, 0, 0, 542, 337, 0, 0, 0, 0, 0, 0, 0, 552, 351, 0, 0, 0, 0, 0, 0, 0, 408, 308, 0, 0, 0, 0, 0, 0, 0, 418, 312, 0, 0, 0, 0, 0, 0, 0, 428, 306, 0, 0, 0, 0, 0, 0, 0, 416, 305, 0, 0, 0, 0, 0, 0, 0, 459, 271, 0, 0, 0, 0, 0, 0, 0, 468, 274, 0, 0, 0, 0, 0, 0, 0, 461, 283, 0, 0, 0, 0, 0, 0, 0, 456, 280, 0, 0, 0, 0, 0, 0, 0, 526, 456, 0, 0, 0, 0, 0, 0, 0, 535, 454, 0, 0, 0, 0, 0, 0, 0, 535, 443, 0, 0, 0, 0, 0, 0, 0, 518, 443, 0, 0, 0, 0, 0, 0, 0, 524, 447, 0, 0, 0, 0, 0, 0, 0, 525, 439, 0, 0, 0, 0, 0, 0, 0, 501, 285, 0, 0, 0, 0, 0, 0, 0, 505, 290, 0, 0, 0, 0, 0, 0, 0, 507, 283, 0, 0, 0, 0, 0, 0, 0, 517, 293, 0, 0, 0, 0, 0, 0, 0, 388, 353, 0, 0, 0, 0, 0, 0, 0, 393, 381, 0, 0, 0, 0, 0, 0, 0, 10, 53, 0, 0, 0, 1, 8,A,0,situations/ZAMA.html";
var setupGameData= "";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 140, 467, 0, 0, 0, 0, 0, 0, 0, 153, 468, 0, 0, 0, 0, 0, 0, 0, 140, 475, 0, 0, 0, 0, 0, 0, 0, 150, 477, 0, 0, 0, 0, 0, 0, 0, 129, 464, 0, 0, 0, 0, 0, 0, 0, 132, 473, 0, 0, 0, 0, 0, 0, 0, 122, 447, 0, 0, 0, 0, 0, 0, 0, 153, 456, 0, 0, 0, 0, 0, 0, 0, 162, 469, 0, 0, 0, 0, 0, 0, 0, 162, 475, 0, 0, 0, 0, 0, 0, 0, 137, 456, 0, 0, 0, 0, 0, 0, 0, 145, 454, 0, 0, 0, 0, 0, 0, 0, 136, 422, 0, 0, 0, 0, 0, 0, 0, 142, 420, 0, 0, 0, 0, 0, 0, 0, 141, 429, 0, 0, 0, 0, 0, 0, 0, 134, 432, 0, 0, 0, 0, 0, 0, 0, 148, 392, 0, 0, 0, 0, 0, 0, 0, 134, 395, 0, 0, 0, 0, 0, 0, 0, 142, 365, 0, 0, 0, 0, 0, 0, 0, 149, 362, 0, 0, 0, 0, 0, 0, 0, 142, 375, 0, 0, 0, 0, 0, 0, 0, 149, 369, 0, 0, 0, 0, 0, 0, 0, 171, 323, 0, 0, 0, 0, 0, 0, 0, 182, 322, 0, 0, 0, 0, 0, 0, 0, 180, 326, 0, 0, 0, 0, 0, 0, 0, 170, 332, 0, 0, 0, 0, 0, 0, 0, 181, 335, 0, 0, 0, 0, 0, 0, 0, 170, 338, 0, 0, 0, 0, 0, 0, 0, 225, 512, 0, 0, 0, 0, 0, 0, 0, 232, 507, 0, 0, 0, 0, 0, 0, 0, 218, 511, 0, 0, 0, 0, 0, 0, 0, 233, 519, 0, 0, 0, 0, 0, 0, 0, 224, 323, 0, 0, 0, 0, 0, 0, 0, 233, 327, 0, 0, 0, 0, 0, 0, 0, 223, 333, 0, 0, 0, 0, 0, 0, 0, 217, 328, 0, 0, 0, 0, 0, 0, 0, 282, 362, 0, 0, 0, 0, 0, 0, 0, 277, 357, 0, 0, 0, 0, 0, 0, 0, 484, 460, 0, 0, 0, 0, 0, 0, 0, 493, 455, 0, 0, 0, 0, 0, 0, 0, 476, 464, 0, 0, 0, 0, 0, 0, 0, 498, 463, 0, 0, 0, 0, 0, 0, 0, 539, 363, 0, 0, 0, 0, 0, 0, 0, 551, 363, 0, 0, 0, 0, 0, 0, 0, 541, 372, 0, 0, 0, 0, 0, 0, 0, 550, 375, 0, 0, 0, 0, 0, 0, 0, 540, 382, 0, 0, 0, 0, 0, 0, 0, 551, 386, 0, 0, 0, 0, 0, 0, 0, 541, 396, 0, 0, 0, 0, 0, 0, 0, 553, 394, 0, 0, 0, 0, 0, 0, 0, 539, 349, 0, 0, 0, 0, 0, 0, 0, 566, 385, 0, 0, 0, 0, 0, 0, 0, 564, 372, 0, 0, 0, 0, 0, 0, 0, 565, 360, 0, 0, 0, 0, 0, 0, 0, 563, 346, 0, 0, 0, 0, 0, 0, 0, 561, 391, 0, 0, 0, 0, 0, 0, 0, 558, 380, 0, 0, 0, 0, 0, 0, 0, 558, 370, 0, 0, 0, 0, 0, 0, 0, 559, 356, 0, 0, 0, 0, 0, 0, 0, 556, 342, 0, 0, 0, 0, 0, 0, 0, 542, 337, 0, 0, 0, 0, 0, 0, 0, 552, 351, 0, 0, 0, 0, 0, 0, 0, 408, 308, 0, 0, 0, 0, 0, 0, 0, 418, 312, 0, 0, 0, 0, 0, 0, 0, 428, 306, 0, 0, 0, 0, 0, 0, 0, 416, 305, 0, 0, 0, 0, 0, 0, 0, 459, 271, 0, 0, 0, 0, 0, 0, 0, 468, 274, 0, 0, 0, 0, 0, 0, 0, 461, 283, 0, 0, 0, 0, 0, 0, 0, 456, 280, 0, 0, 0, 0, 0, 0, 0, 526, 456, 0, 0, 0, 0, 0, 0, 0, 535, 454, 0, 0, 0, 0, 0, 0, 0, 535, 443, 0, 0, 0, 0, 0, 0, 0, 518, 443, 0, 0, 0, 0, 0, 0, 0, 524, 447, 0, 0, 0, 0, 0, 0, 0, 525, 439, 0, 0, 0, 0, 0, 0, 0, 501, 285, 0, 0, 0, 0, 0, 0, 0, 505, 290, 0, 0, 0, 0, 0, 0, 0, 507, 283, 0, 0, 0, 0, 0, 0, 0, 517, 293, 0, 0, 0, 0, 0, 0, 0, 388, 353, 0, 0, 0, 0, 0, 0, 0, 393, 381, 0, 0, 0, 0, 0, 0, 0, 10, 53, 0, 0, 0, 1, 8,A,0,situations/ZAMA.html";
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

var swidth=4*1850; //width of biggest board
var sheight=4*1640; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=83;//no of pieces in game
var unitTotal=18; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=82; //index number of last piece - turn now
var gerNumber=38; //the index number of the first side B piece
var neutNumber=82; //index number of first neutral piece

var Abase = "cream/";
var Bbase = "rose/";
var Apanic=26;
var Bpanic=48;
var maxTurns = 15;
var nameA="Carthaginians";
var nameB="Romans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "MediumSpringGreen";
var Bcolor = "red";
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

var unitsA=[Abase+"/ms.jpg", "MS af:3 mf:3 vp:", "2", "12", "n",
Abase+"/ps.jpg", "PS af:4 mf:3 vp:", "2",  "4", "n",
Abase+"/lc.jpg", "LC af:1 mf:9 vp:", "1", "2", "c",
Abase+"/mc.jpg", "MC af:[3] mf:9 vp:", "2", "4", "c",
Abase+"/el.jpg", "EL af:[8] mf:6 vp:", "4",  "6", "e",
Abase+"/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "4", "f",
Abase+"/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "4", "f",
Abase+"/1l.jpg", "1L combat:+9 radius:2 mf:9  HANNIBAL vp", "4", "1", "l",
Abase+"/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "3", "1", "l",

Bbase+"/ms.jpg", "MS af:3 mf:3 vp:", "2", "4", "n",
Bbase+"/s2.jpg", "PL af:4 mf:4 fire:1/1 vp:", "2", "20", "f",
Bbase+"/lc.jpg", "LC af:1 mf:9 vp:", "1", "4", "c",
Bbase+"/mc.jpg", "MC af:[3] mf:9 vp:", "2", "4", "c",
Bbase+"/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3", "6", "f",
Bbase+"/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "4", "f",
Bbase+"/2l.jpg", "2L combat:+6 radius:2 mf:9  vp", "3", "1", "l",
Bbase+"/3l.jpg", "3L combat:+3 radius:1 mf:9  vp", "2", "1", "l",


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


var board1 = "boards/ZAMA.jpg";
var board_setup = "boards/ZAMA_SETUP.jpg";
var board2 = "boards/spartan.jpg";
var board3 = "boards/arbela1.jpg";
