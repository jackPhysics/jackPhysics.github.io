var situationAddress="situations/heraclea.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/hastings.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/spartanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/heraclea_setup.jpg";
var presetupGameData = "";
var setupGameData = "0, 0, 0, 0, 0, 0, 129, 405, 0, 0, 0, 0, 0, 0, 0, 150, 389, 0, 0, 0, 0, 0, 0, 0, 152, 395, 0, 0, 0, 0, 0, 0, 0, 181, 382, 0, 0, 0, 0, 0, 0, 0, 184, 384, 0, 0, 0, 0, 0, 0, 0, 68, 435, 0, 0, 0, 0, 0, 0, 0, 179, 379, 0, 0, 0, 0, 0, 0, 0, 176, 377, 0, 0, 0, 0, 0, 0, 0, 102, 423, 0, 0, 0, 0, 0, 0, 0, 100, 421, 0, 0, 0, 0, 0, 0, 0, 73, 440, 0, 0, 0, 0, 0, 0, 0, 71, 437, 0, 0, 0, 0, 0, 0, 0, 124, 375, 0, 0, 0, 0, 0, 0, 0, 126, 377, 0, 0, 0, 0, 0, 0, 0, 129, 380, 0, 0, 0, 0, 0, 0, 0, 72, 403, 0, 0, 0, 0, 0, 0, 0, 69, 400, 0, 0, 0, 0, 0, 0, 0, 74, 405, 0, 0, 0, 0, 0, 0, 0, 77, 408, 0, 0, 0, 0, 0, 0, 0, 91, 384, 0, 0, 0, 0, 0, 0, 0, 94, 386, 0, 0, 0, 0, 0, 0, 0, 96, 389, 0, 0, 0, 0, 0, 0, 0, 99, 391, 0, 0, 0, 0, 0, 0, 0, 150, 361, 0, 0, 0, 0, 0, 0, 0, 153, 363, 0, 0, 0, 0, 0, 0, 0, 158, 368, 0, 0, 0, 0, 0, 0, 0, 155, 366, 0, 0, 0, 0, 0, 0, 0, 206, 424, 0, 0, 0, 0, 0, 0, 0, 208, 426, 0, 0, 0, 0, 0, 0, 0, 231, 400, 0, 0, 0, 0, 0, 0, 0, 228, 398, 0, 0, 0, 0, 0, 0, 0, 233, 403, 0, 0, 0, 0, 0, 0, 0, 236, 405, 0, 0, 0, 0, 0, 0, 0, 66, 432, 0, 0, 0, 0, 0, 0, 0, 202, 389, 0, 0, 0, 0, 0, 0, 0, 205, 391, 0, 0, 0, 0, 0, 0, 0, 207, 394, 0, 0, 0, 0, 0, 0, 0, 182, 444, 0, 0, 0, 0, 0, 0, 0, 179, 441, 0, 0, 0, 0, 0, 0, 0, 177, 439, 0, 0, 0, 0, 0, 0, 0, 174, 436, 0, 0, 0, 0, 0, 0, 0, 121, 372, 0, 0, 0, 0, 0, 0, 0, 89, 381, 0, 0, 0, 0, 0, 0, 0, 200, 386, 0, 0, 0, 0, 0, 0, 0, 176, 226, 0, 0, 0, 0, 0, 0, 0, 178, 229, 0, 0, 0, 0, 0, 0, 0, 177, 167, 0, 0, 0, 0, 0, 0, 0, 179, 170, 0, 0, 0, 0, 0, 0, 0, 149, 151, 0, 0, 0, 0, 0, 0, 0, 147, 236, 0, 0, 0, 0, 0, 0, 0, 150, 238, 0, 0, 0, 0, 0, 0, 0, 152, 241, 0, 0, 0, 0, 0, 0, 0, 126, 224, 0, 0, 0, 0, 0, 0, 0, 72, 286, 0, 0, 0, 0, 0, 0, 0, 75, 288, 0, 0, 0, 0, 0, 0, 0, 129, 227, 0, 0, 0, 0, 0, 0, 0, 127, 287, 0, 0, 0, 0, 0, 0, 0, 130, 290, 0, 0, 0, 0, 0, 0, 0, 72, 225, 0, 0, 0, 0, 0, 0, 0, 74, 227, 0, 0, 0, 0, 0, 0, 0, 152, 154, 0, 0, 0, 0, 0, 0, 0, 95, 236, 0, 0, 0, 0, 0, 0, 0, 98, 239, 0, 0, 0, 0, 0, 0, 0, 100, 241, 0, 0, 0, 0, 0, 0, 0, 126, 167, 0, 0, 0, 0, 0, 0, 0, 128, 170, 0, 0, 0, 0, 0, 0, 0, 152, 211, 0, 0, 0, 0, 0, 0, 0, 155, 213, 0, 0, 0, 0, 0, 0, 0, 124, 222, 0, 0, 0, 0, 0, 0, 0, 147, 149, 0, 0, 0, 0, 0, 0, 0, 70, 283, 0, 0, 0, 0, 0, 0, 0, 125, 285, 0, 0, 0, 0, 0, 0, 0, 173, 224, 0, 0, 0, 0, 0, 0, 0, 174, 165, 0, 0, 0, 0, 0, 0, 0, 150, 208, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 1, 8,B,0,situations/heraclea.html";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 129, 405, 0, 0, 0, 0, 0, 0, 0, 150, 389, 0, 0, 0, 0, 0, 0, 0, 152, 395, 0, 0, 0, 0, 0, 0, 0, 181, 382, 0, 0, 0, 0, 0, 0, 0, 184, 384, 0, 0, 0, 0, 0, 0, 0, 68, 435, 0, 0, 0, 0, 0, 0, 0, 179, 379, 0, 0, 0, 0, 0, 0, 0, 176, 377, 0, 0, 0, 0, 0, 0, 0, 102, 423, 0, 0, 0, 0, 0, 0, 0, 100, 421, 0, 0, 0, 0, 0, 0, 0, 73, 440, 0, 0, 0, 0, 0, 0, 0, 71, 437, 0, 0, 0, 0, 0, 0, 0, 124, 375, 0, 0, 0, 0, 0, 0, 0, 126, 377, 0, 0, 0, 0, 0, 0, 0, 129, 380, 0, 0, 0, 0, 0, 0, 0, 72, 403, 0, 0, 0, 0, 0, 0, 0, 69, 400, 0, 0, 0, 0, 0, 0, 0, 74, 405, 0, 0, 0, 0, 0, 0, 0, 77, 408, 0, 0, 0, 0, 0, 0, 0, 91, 384, 0, 0, 0, 0, 0, 0, 0, 94, 386, 0, 0, 0, 0, 0, 0, 0, 96, 389, 0, 0, 0, 0, 0, 0, 0, 99, 391, 0, 0, 0, 0, 0, 0, 0, 150, 361, 0, 0, 0, 0, 0, 0, 0, 153, 363, 0, 0, 0, 0, 0, 0, 0, 158, 368, 0, 0, 0, 0, 0, 0, 0, 155, 366, 0, 0, 0, 0, 0, 0, 0, 206, 424, 0, 0, 0, 0, 0, 0, 0, 208, 426, 0, 0, 0, 0, 0, 0, 0, 231, 400, 0, 0, 0, 0, 0, 0, 0, 228, 398, 0, 0, 0, 0, 0, 0, 0, 233, 403, 0, 0, 0, 0, 0, 0, 0, 236, 405, 0, 0, 0, 0, 0, 0, 0, 66, 432, 0, 0, 0, 0, 0, 0, 0, 202, 389, 0, 0, 0, 0, 0, 0, 0, 205, 391, 0, 0, 0, 0, 0, 0, 0, 207, 394, 0, 0, 0, 0, 0, 0, 0, 182, 444, 0, 0, 0, 0, 0, 0, 0, 179, 441, 0, 0, 0, 0, 0, 0, 0, 177, 439, 0, 0, 0, 0, 0, 0, 0, 174, 436, 0, 0, 0, 0, 0, 0, 0, 121, 372, 0, 0, 0, 0, 0, 0, 0, 89, 381, 0, 0, 0, 0, 0, 0, 0, 200, 386, 0, 0, 0, 0, 0, 0, 0, 176, 226, 0, 0, 0, 0, 0, 0, 0, 178, 229, 0, 0, 0, 0, 0, 0, 0, 177, 167, 0, 0, 0, 0, 0, 0, 0, 179, 170, 0, 0, 0, 0, 0, 0, 0, 149, 151, 0, 0, 0, 0, 0, 0, 0, 147, 236, 0, 0, 0, 0, 0, 0, 0, 150, 238, 0, 0, 0, 0, 0, 0, 0, 152, 241, 0, 0, 0, 0, 0, 0, 0, 126, 224, 0, 0, 0, 0, 0, 0, 0, 72, 286, 0, 0, 0, 0, 0, 0, 0, 75, 288, 0, 0, 0, 0, 0, 0, 0, 129, 227, 0, 0, 0, 0, 0, 0, 0, 127, 287, 0, 0, 0, 0, 0, 0, 0, 130, 290, 0, 0, 0, 0, 0, 0, 0, 72, 225, 0, 0, 0, 0, 0, 0, 0, 74, 227, 0, 0, 0, 0, 0, 0, 0, 152, 154, 0, 0, 0, 0, 0, 0, 0, 95, 236, 0, 0, 0, 0, 0, 0, 0, 98, 239, 0, 0, 0, 0, 0, 0, 0, 100, 241, 0, 0, 0, 0, 0, 0, 0, 126, 167, 0, 0, 0, 0, 0, 0, 0, 128, 170, 0, 0, 0, 0, 0, 0, 0, 152, 211, 0, 0, 0, 0, 0, 0, 0, 155, 213, 0, 0, 0, 0, 0, 0, 0, 124, 222, 0, 0, 0, 0, 0, 0, 0, 147, 149, 0, 0, 0, 0, 0, 0, 0, 70, 283, 0, 0, 0, 0, 0, 0, 0, 125, 285, 0, 0, 0, 0, 0, 0, 0, 173, 224, 0, 0, 0, 0, 0, 0, 0, 174, 165, 0, 0, 0, 0, 0, 0, 0, 150, 208, 0, 0, 0, 0, 0, 0, 0, 14, 12, 0, 0, 0, 1, 8,B,0,situations/heraclea.html";
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

var swidth=3106; //width of biggest board
var sheight=4304; //height of biggest board
var placePieceShift=300;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=76; //no of pieces in game
var unitTotal=18; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=76; //index number of last piece - turn now
var gerNumber=44; //the index number of the first side B piece
var neutNumber=76; //index number of first neutral piece

var Abase = "green/"
var Bbase = "red/"
var Apanic=67;
var Bpanic=51;
var maxTurns = 12;
var nameA="Pyrrhus";
var nameB="Romans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "LawnGreen";
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

var unitsA=[
"green/ms.jpg", "MS af:3 mf:3 vp:", "2",  "10", "n",
"green/ps.jpg", "PS af:4 mf:3 vp:", "2",  "5", "n",
"green/pp.jpg", "PP af:6 mf:4 vp:", "3",  "12", "n",
"green/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "5", "n",
"green/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "1", "n",
"green/bw.jpg", "BW mf:5 fire:2/2 vp:", "2", "4", "f",
"green/el.jpg", "EL af:[8] mf:6 vp:", "4",  "4", "n",
"green/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "1", "f",
"green/1l.jpg", "1L combat:+9 radius:2 mf:9  PYRRHUS vp", "4", "1", "l",
"green/2l.jpg", "2L combat:+6 radius:2 mf:9  2nd Commander vp", "3", "1", "l",


"red/ms.jpg", "MS af:3 mf:3 vp:", "2",  "4", "n",
"red/s2.jpg", "PL af:4 mf:4 fire:1/1 vp:", "2",  "10", "f",
"red/bi.jpg", "BI af:[6] mf:5 vp:", "3",  "6", "n",
"red/lc.jpg", "LC af:1 mf:9 vp:", "1",  "4", "n",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "6", "f",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 PARMENIO  vp", "3", "1", "l",


"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x"
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


var board1 = "boards/heraclea_normal.jpg";
var board_setup = "boards/heraclea_setup.jpg";
var board2 = "boards/spartan.jpg";
var board3 = "boards/arbela1.jpg";
