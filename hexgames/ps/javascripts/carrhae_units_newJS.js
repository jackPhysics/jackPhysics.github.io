var situationAddress="situations/carrhae_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags McA edit.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/arbela.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/legionWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/carrhae_setup.jpg";
var presetupGameData = "";
var setupGameData = "0, 0, 491, 0, 0, 0, 482, 808, 0, 0, 0, 478, 0, 0, 0, 509, 766, 0, 0, 0, 469, 0, 0, 0, 517, 773, 0, 0, 0, 504, 0, 0, 0, 508, 793, 0, 0, 0, 498, 0, 0, 0, 513, 798, 0, 0, 0, 475, 0, 0, 0, 512, 768, 0, 0, 0, 465, 0, 0, 0, 485, 779, 0, 0, 0, 472, 0, 0, 0, 514, 771, 0, 0, 0, 462, 0, 0, 0, 487, 781, 0, 0, 0, 459, 0, 0, 0, 490, 784, 0, 0, 0, 501, 0, 0, 0, 510, 796, 0, 0, 0, 443, 0, 0, 0, 468, 800, 0, 0, 0, 456, 0, 0, 0, 492, 786, 0, 0, 0, 452, 0, 0, 0, 460, 792, 0, 0, 0, 449, 0, 0, 0, 463, 795, 0, 0, 0, 482, 0, 0, 0, 490, 815, 0, 0, 0, 446, 0, 0, 0, 465, 797, 0, 0, 0, 495, 0, 0, 0, 515, 801, 0, 0, 0, 488, 0, 0, 0, 485, 810, 0, 0, 0, 485, 0, 0, 0, 487, 813, 0, 0, 0, 419, 0, 0, 0, 441, 782, 0, 0, 0, 401, 0, 0, 0, 515, 742, 0, 0, 0, 412, 0, 0, 0, 464, 766, 0, 0, 0, 408, 0, 0, 0, 485, 758, 0, 0, 0, 416, 0, 0, 0, 443, 785, 0, 0, 0, 404, 0, 0, 0, 513, 739, 0, 0, 0, 429, 0, 0, 0, 537, 753, 0, 0, 0, 439, 0, 0, 0, 436, 808, 0, 0, 0, 436, 0, 0, 0, 439, 811, 0, 0, 0, 433, 0, 0, 0, 441, 813, 0, 0, 0, 426, 0, 0, 0, 540, 756, 0, 0, 0, 423, 0, 0, 0, 542, 758, 0, 0, 0, 514, 0, 0, 0, 462, 763, 0, 0, 0, 517, 0, 0, 0, 535, 751, 0, 0, 0, 511, 0, 0, 0, 482, 776, 0, 0, 0, 263, 0, 0, 0, 321, 314, 0, 0, 0, 266, 0, 0, 0, 319, 312, 0, 0, 0, 379, 0, 0, 0, 290, 324, 0, 0, 0, 394, 0, 0, 0, 341, 299, 0, 0, 0, 373, 0, 0, 0, 295, 329, 0, 0, 0, 376, 0, 0, 0, 292, 327, 0, 0, 0, 397, 0, 0, 0, 338, 296, 0, 0, 0, 391, 0, 0, 0, 343, 301, 0, 0, 0, 295, 0, 0, 0, 320, 346, 0, 0, 0, 299, 0, 0, 0, 289, 385, 0, 0, 0, 303, 0, 0, 0, 343, 327, 0, 0, 0, 310, 0, 0, 0, 268, 373, 0, 0, 0, 312, 0, 0, 0, 265, 370, 0, 0, 0, 314, 0, 0, 0, 290, 355, 0, 0, 0, 321, 0, 0, 0, 392, 302, 0, 0, 0, 307, 0, 0, 0, 365, 314, 0, 0, 0, 359, 0, 0, 0, 339, 323, 0, 0, 0, 365, 0, 0, 0, 388, 298, 0, 0, 0, 362, 0, 0, 0, 361, 310, 0, 0, 0, 335, 0, 0, 0, 392, 329, 0, 0, 0, 332, 0, 0, 0, 287, 352, 0, 0, 0, 330, 0, 0, 0, 318, 344, 0, 0, 0, 328, 0, 0, 0, 341, 325, 0, 0, 0, 326, 0, 0, 0, 363, 312, 0, 0, 0, 324, 0, 0, 0, 390, 300, 0, 0, 0, 356, 0, 0, 0, 316, 342, 0, 0, 0, 279, 0, 0, 0, 292, 357, 0, 0, 0, 275, 0, 0, 0, 270, 375, 0, 0, 0, 521, 0, 0, 0, 567, 802, 0, 0, 0, 1, 8,A,1,situations/carrhae_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 491, 0, 0, 0, 482, 808, 0, 0, 0, 478, 0, 0, 0, 509, 766, 0, 0, 0, 469, 0, 0, 0, 517, 773, 0, 0, 0, 504, 0, 0, 0, 508, 793, 0, 0, 0, 498, 0, 0, 0, 513, 798, 0, 0, 0, 475, 0, 0, 0, 512, 768, 0, 0, 0, 465, 0, 0, 0, 485, 779, 0, 0, 0, 472, 0, 0, 0, 514, 771, 0, 0, 0, 462, 0, 0, 0, 487, 781, 0, 0, 0, 459, 0, 0, 0, 490, 784, 0, 0, 0, 501, 0, 0, 0, 510, 796, 0, 0, 0, 443, 0, 0, 0, 468, 800, 0, 0, 0, 456, 0, 0, 0, 492, 786, 0, 0, 0, 452, 0, 0, 0, 460, 792, 0, 0, 0, 449, 0, 0, 0, 463, 795, 0, 0, 0, 482, 0, 0, 0, 490, 815, 0, 0, 0, 446, 0, 0, 0, 465, 797, 0, 0, 0, 495, 0, 0, 0, 515, 801, 0, 0, 0, 488, 0, 0, 0, 485, 810, 0, 0, 0, 485, 0, 0, 0, 487, 813, 0, 0, 0, 419, 0, 0, 0, 441, 782, 0, 0, 0, 401, 0, 0, 0, 515, 742, 0, 0, 0, 412, 0, 0, 0, 464, 766, 0, 0, 0, 408, 0, 0, 0, 485, 758, 0, 0, 0, 416, 0, 0, 0, 443, 785, 0, 0, 0, 404, 0, 0, 0, 513, 739, 0, 0, 0, 429, 0, 0, 0, 537, 753, 0, 0, 0, 439, 0, 0, 0, 436, 808, 0, 0, 0, 436, 0, 0, 0, 439, 811, 0, 0, 0, 433, 0, 0, 0, 441, 813, 0, 0, 0, 426, 0, 0, 0, 540, 756, 0, 0, 0, 423, 0, 0, 0, 542, 758, 0, 0, 0, 514, 0, 0, 0, 462, 763, 0, 0, 0, 517, 0, 0, 0, 535, 751, 0, 0, 0, 511, 0, 0, 0, 482, 776, 0, 0, 0, 263, 0, 0, 0, 321, 314, 0, 0, 0, 266, 0, 0, 0, 319, 312, 0, 0, 0, 379, 0, 0, 0, 290, 324, 0, 0, 0, 394, 0, 0, 0, 341, 299, 0, 0, 0, 373, 0, 0, 0, 295, 329, 0, 0, 0, 376, 0, 0, 0, 292, 327, 0, 0, 0, 397, 0, 0, 0, 338, 296, 0, 0, 0, 391, 0, 0, 0, 343, 301, 0, 0, 0, 295, 0, 0, 0, 320, 346, 0, 0, 0, 299, 0, 0, 0, 289, 385, 0, 0, 0, 303, 0, 0, 0, 343, 327, 0, 0, 0, 310, 0, 0, 0, 268, 373, 0, 0, 0, 312, 0, 0, 0, 265, 370, 0, 0, 0, 314, 0, 0, 0, 290, 355, 0, 0, 0, 321, 0, 0, 0, 392, 302, 0, 0, 0, 307, 0, 0, 0, 365, 314, 0, 0, 0, 359, 0, 0, 0, 339, 323, 0, 0, 0, 365, 0, 0, 0, 388, 298, 0, 0, 0, 362, 0, 0, 0, 361, 310, 0, 0, 0, 335, 0, 0, 0, 392, 329, 0, 0, 0, 332, 0, 0, 0, 287, 352, 0, 0, 0, 330, 0, 0, 0, 318, 344, 0, 0, 0, 328, 0, 0, 0, 341, 325, 0, 0, 0, 326, 0, 0, 0, 363, 312, 0, 0, 0, 324, 0, 0, 0, 390, 300, 0, 0, 0, 356, 0, 0, 0, 316, 342, 0, 0, 0, 279, 0, 0, 0, 292, 357, 0, 0, 0, 275, 0, 0, 0, 270, 375, 0, 0, 0, 521, 0, 0, 0, 567, 802, 0, 0, 0, 1, 8,A,1,situations/carrhae_sit.html";
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

var multiThisNow = 1.25;
var swidth=6150; //width of biggest board
var sheight=8200; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=64 //no of pieces in game
var unitTotal=9; //number of types of pieces
var lastIndex=64; //index number of last piece - turn now
var gerNumber=36; //the index number of the first side B piece
var neutNumber=64; //index number of first neutral piece


var Abase = "red/"
var Bbase = "black/"
var Apanic=27;
var Bpanic=17;
var maxTurns = 20;
var nameA="Romans";
var nameB="Parthians";
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

"red/s2.jpg", "PL af:4 mf:4 fire:1/1 vp:", "2",  "20", "f",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "6", "f",
"red/lc.jpg", "LC af:1 mf:9 vp:", "1",  "6", "c",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "2", "l",
"red/1l.jpg", "1L combat:+9 radius:2 mf:9 vp", "4", "1", "l",


"black/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "8", "c",
"black/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2",  "20", "f",

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


var board1 = "boards/carrhae_normal.jpg";
var board_setup = "boards/carrhae_setup.jpg";
var board2 = "boards/legion.jpg";
var board3 = "boards/viking.jpg";
