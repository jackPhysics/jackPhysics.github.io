var situationAddress="situations/qadisiya.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/qadisiya.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/vikingWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.doc" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/qadisiya_setup.JPG";
var presetupGameData = "";
var setupGameData = "0, 0, 0, 0, 0, 0, 391, 582, 0, 0, 0, 0, 0, 0, 0, 390, 556, 0, 0, 0, 0, 0, 0, 0, 370, 589, 0, 0, 0, 0, 0, 0, 0, 412, 594, 0, 0, 0, 0, 0, 0, 0, 369, 568, 0, 0, 0, 0, 0, 0, 0, 409, 571, 0, 0, 0, 0, 0, 0, 0, 388, 604, 0, 0, 0, 0, 0, 0, 0, 371, 546, 0, 0, 0, 0, 0, 0, 0, 350, 579, 0, 0, 0, 0, 0, 0, 0, 429, 579, 0, 0, 0, 0, 0, 0, 0, 293, 589, 0, 0, 0, 0, 0, 0, 0, 298, 571, 0, 0, 0, 0, 0, 0, 0, 294, 543, 0, 0, 0, 0, 0, 0, 0, 289, 549, 0, 0, 0, 0, 0, 0, 0, 290, 596, 0, 0, 0, 0, 0, 0, 0, 290, 567, 0, 0, 0, 0, 0, 0, 0, 397, 469, 0, 0, 0, 0, 0, 0, 0, 390, 466, 0, 0, 0, 0, 0, 0, 0, 350, 487, 0, 0, 0, 0, 0, 0, 0, 327, 499, 0, 0, 0, 0, 0, 0, 0, 310, 509, 0, 0, 0, 0, 0, 0, 0, 293, 521, 0, 0, 0, 0, 0, 0, 0, 287, 524, 0, 0, 0, 0, 0, 0, 0, 311, 516, 0, 0, 0, 0, 0, 0, 0, 333, 498, 0, 0, 0, 0, 0, 0, 0, 353, 489, 0, 0, 0, 0, 0, 0, 0, 362, 476, 0, 0, 0, 0, 0, 0, 0, 375, 479, 0, 0, 0, 0, 0, 0, 0, 348, 490, 0, 0, 0, 0, 0, 0, 0, 293, 563, 0, 0, 0, 0, 0, 0, 0, 232, 284, 0, 0, 0, 0, 0, 0, 0, 237, 282, 0, 0, 0, 0, 0, 0, 0, 210, 268, 0, 0, 0, 0, 0, 0, 0, 328, 244, 0, 0, 0, 0, 0, 0, 0, 331, 255, 0, 0, 0, 0, 0, 0, 0, 314, 268, 0, 0, 0, 0, 0, 0, 0, 311, 257, 0, 0, 0, 0, 0, 0, 0, 296, 271, 0, 0, 0, 0, 0, 0, 0, 291, 273, 0, 0, 0, 0, 0, 0, 0, 273, 284, 0, 0, 0, 0, 0, 0, 0, 267, 287, 0, 0, 0, 0, 0, 0, 0, 250, 299, 0, 0, 0, 0, 0, 0, 0, 252, 293, 0, 0, 0, 0, 0, 0, 0, 268, 305, 0, 0, 0, 0, 0, 0, 0, 287, 293, 0, 0, 0, 0, 0, 0, 0, 313, 280, 0, 0, 0, 0, 0, 0, 0, 331, 275, 0, 0, 0, 0, 0, 0, 0, 348, 267, 0, 0, 0, 0, 0, 0, 0, 368, 256, 0, 0, 0, 0, 0, 0, 0, 370, 246, 0, 0, 0, 0, 0, 0, 0, 274, 303, 0, 0, 0, 0, 0, 0, 0, 297, 291, 0, 0, 0, 0, 0, 0, 0, 310, 285, 0, 0, 0, 0, 0, 0, 0, 335, 271, 0, 0, 0, 0, 0, 0, 0, 347, 260, 0, 0, 0, 0, 0, 0, 0, 245, 297, 0, 0, 0, 0, 0, 0, 0, 329, 271, 0, 0, 0, 0, 0, 0, 0, 25, 189, 0, 0, 0, 1, 8,B,0,situations/qadisiya.html";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 391, 582, 0, 0, 0, 0, 0, 0, 0, 390, 556, 0, 0, 0, 0, 0, 0, 0, 370, 589, 0, 0, 0, 0, 0, 0, 0, 412, 594, 0, 0, 0, 0, 0, 0, 0, 369, 568, 0, 0, 0, 0, 0, 0, 0, 409, 571, 0, 0, 0, 0, 0, 0, 0, 388, 604, 0, 0, 0, 0, 0, 0, 0, 371, 546, 0, 0, 0, 0, 0, 0, 0, 350, 579, 0, 0, 0, 0, 0, 0, 0, 429, 579, 0, 0, 0, 0, 0, 0, 0, 293, 589, 0, 0, 0, 0, 0, 0, 0, 298, 571, 0, 0, 0, 0, 0, 0, 0, 294, 543, 0, 0, 0, 0, 0, 0, 0, 289, 549, 0, 0, 0, 0, 0, 0, 0, 290, 596, 0, 0, 0, 0, 0, 0, 0, 290, 567, 0, 0, 0, 0, 0, 0, 0, 397, 469, 0, 0, 0, 0, 0, 0, 0, 390, 466, 0, 0, 0, 0, 0, 0, 0, 350, 487, 0, 0, 0, 0, 0, 0, 0, 327, 499, 0, 0, 0, 0, 0, 0, 0, 310, 509, 0, 0, 0, 0, 0, 0, 0, 293, 521, 0, 0, 0, 0, 0, 0, 0, 287, 524, 0, 0, 0, 0, 0, 0, 0, 311, 516, 0, 0, 0, 0, 0, 0, 0, 333, 498, 0, 0, 0, 0, 0, 0, 0, 353, 489, 0, 0, 0, 0, 0, 0, 0, 362, 476, 0, 0, 0, 0, 0, 0, 0, 375, 479, 0, 0, 0, 0, 0, 0, 0, 348, 490, 0, 0, 0, 0, 0, 0, 0, 293, 563, 0, 0, 0, 0, 0, 0, 0, 232, 284, 0, 0, 0, 0, 0, 0, 0, 237, 282, 0, 0, 0, 0, 0, 0, 0, 210, 268, 0, 0, 0, 0, 0, 0, 0, 328, 244, 0, 0, 0, 0, 0, 0, 0, 331, 255, 0, 0, 0, 0, 0, 0, 0, 314, 268, 0, 0, 0, 0, 0, 0, 0, 311, 257, 0, 0, 0, 0, 0, 0, 0, 296, 271, 0, 0, 0, 0, 0, 0, 0, 291, 273, 0, 0, 0, 0, 0, 0, 0, 273, 284, 0, 0, 0, 0, 0, 0, 0, 267, 287, 0, 0, 0, 0, 0, 0, 0, 250, 299, 0, 0, 0, 0, 0, 0, 0, 252, 293, 0, 0, 0, 0, 0, 0, 0, 268, 305, 0, 0, 0, 0, 0, 0, 0, 287, 293, 0, 0, 0, 0, 0, 0, 0, 313, 280, 0, 0, 0, 0, 0, 0, 0, 331, 275, 0, 0, 0, 0, 0, 0, 0, 348, 267, 0, 0, 0, 0, 0, 0, 0, 368, 256, 0, 0, 0, 0, 0, 0, 0, 370, 246, 0, 0, 0, 0, 0, 0, 0, 274, 303, 0, 0, 0, 0, 0, 0, 0, 297, 291, 0, 0, 0, 0, 0, 0, 0, 310, 285, 0, 0, 0, 0, 0, 0, 0, 335, 271, 0, 0, 0, 0, 0, 0, 0, 347, 260, 0, 0, 0, 0, 0, 0, 0, 245, 297, 0, 0, 0, 0, 0, 0, 0, 329, 271, 0, 0, 0, 0, 0, 0, 0, 25, 189, 0, 0, 0, 1, 8,B,0,situations/qadisiya.html";
    setupGameData[1] = "0, 0, 0, 0, 0, 0, 391, 582, 0, 0, 0, 0, 0, 0, 0, 390, 556, 0, 0, 0, 0, 0, 0, 0, 370, 589, 0, 0, 0, 0, 0, 0, 0, 412, 594, 0, 0, 0, 0, 0, 0, 0, 369, 568, 0, 0, 0, 0, 0, 0, 0, 409, 571, 0, 0, 0, 0, 0, 0, 0, 388, 604, 0, 0, 0, 0, 0, 0, 0, 371, 546, 0, 0, 0, 0, 0, 0, 0, 350, 579, 0, 0, 0, 0, 0, 0, 0, 429, 579, 0, 0, 0, 0, 0, 0, 0, 293, 589, 0, 0, 0, 0, 0, 0, 0, 298, 571, 0, 0, 0, 0, 0, 0, 0, 294, 543, 0, 0, 0, 0, 0, 0, 0, 289, 549, 0, 0, 0, 0, 0, 0, 0, 290, 596, 0, 0, 0, 0, 0, 0, 0, 290, 567, 0, 0, 0, 0, 0, 0, 0, 397, 469, 0, 0, 0, 0, 0, 0, 0, 390, 466, 0, 0, 0, 0, 0, 0, 0, 350, 487, 0, 0, 0, 0, 0, 0, 0, 327, 499, 0, 0, 0, 0, 0, 0, 0, 310, 509, 0, 0, 0, 0, 0, 0, 0, 293, 521, 0, 0, 0, 0, 0, 0, 0, 287, 524, 0, 0, 0, 0, 0, 0, 0, 311, 516, 0, 0, 0, 0, 0, 0, 0, 333, 498, 0, 0, 0, 0, 0, 0, 0, 353, 489, 0, 0, 0, 0, 0, 0, 0, 362, 476, 0, 0, 0, 0, 0, 0, 0, 375, 479, 0, 0, 0, 0, 0, 0, 0, 348, 490, 0, 0, 0, 0, 0, 0, 0, 293, 563, 0, 0, 0, 0, 0, 0, 0, 232, 284, 0, 0, 0, 0, 0, 0, 0, 237, 282, 0, 0, 0, 0, 0, 0, 0, 210, 268, 0, 0, 0, 0, 0, 0, 0, 328, 244, 0, 0, 0, 0, 0, 0, 0, 331, 255, 0, 0, 0, 0, 0, 0, 0, 314, 268, 0, 0, 0, 0, 0, 0, 0, 311, 257, 0, 0, 0, 0, 0, 0, 0, 296, 271, 0, 0, 0, 0, 0, 0, 0, 291, 273, 0, 0, 0, 0, 0, 0, 0, 273, 284, 0, 0, 0, 0, 0, 0, 0, 267, 287, 0, 0, 0, 0, 0, 0, 0, 250, 299, 0, 0, 0, 0, 0, 0, 0, 252, 293, 0, 0, 0, 0, 0, 0, 0, 268, 305, 0, 0, 0, 0, 0, 0, 0, 287, 293, 0, 0, 0, 0, 0, 0, 0, 313, 280, 0, 0, 0, 0, 0, 0, 0, 331, 275, 0, 0, 0, 0, 0, 0, 0, 348, 267, 0, 0, 0, 0, 0, 0, 0, 368, 256, 0, 0, 0, 0, 0, 0, 0, 370, 246, 0, 0, 0, 0, 0, 0, 0, 274, 303, 0, 0, 0, 0, 0, 0, 0, 297, 291, 0, 0, 0, 0, 0, 0, 0, 310, 285, 0, 0, 0, 0, 0, 0, 0, 335, 271, 0, 0, 0, 0, 0, 0, 0, 347, 260, 0, 0, 0, 0, 0, 0, 0, 245, 297, 0, 0, 0, 0, 0, 0, 0, 329, 271, 0, 0, 0, 0, 0, 0, 0, 25, 189, 0, 0, 0, 1, 8,B,0,situations/qadisiya.html";
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

var swidth=4920; //width of biggest board
var sheight=6560; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=58 //no of pieces in game
var unitTotal=9; //number of types of pieces
var lastIndex=58; //index number of last piece - turn now
var gerNumber=30; //the index number of the first side B piece
var neutNumber=58; //index number of first neutral piece

var Abase = "purple/"
var Bbase = "arab/"
var Apanic=19;
var Bpanic=41;
var maxTurns = 20;
var nameA="Persians";
var nameB="Arabs";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "violet";
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
"purple/mi.jpg", "MI af:2 mf:3 vp:", "1", "10", "n",
"purple/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "6", "c",
"purple/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "12", "c",
"purple/3l.jpg", "3L combat:+3 radius:1 mf:9  RUSTAM vp", "1", "1", "l",
"purple/3l.jpg", "3L combat:+3 radius:1 mf:9  vp", "1", "1", "l",

"arab/hb.jpg", "HB af:0 mf:9 fire:1/2 vp:", "2",  "25", "f",

"arab/2l.jpg", "2L combat:+6 radius:2 mf:9 S'AD-IBN-ABI-WAQQAS  vp:", "1", "1", "l",
"arab/2l.jpg", "2L combat:+6 radius:2 mf:9 vp:", "1", "1", "l",



"neut/battle.gif", "CONTACT!", "","0", "x",
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


var board1 = "boards/qadisiya_normal.JPG";
var board_setup = "boards/qadisiya_setup.JPG";
var board2 = "boards/viking.jpg";
var board3 = "boards/arbela1.jpg";
