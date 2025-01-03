var situationAddress="situations/stamford_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/stamford_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/vikingWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/stamford_setup.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 323, 0, 0, 0, 411, 290, x, 0, 0, 313, 0, 0, 0, 431, 285, x, 0, 0, 306, 0, 0, 0, 393, 283, x, 0, 0, 300, 0, 0, 0, 398, 288, x, 0, 0, 293, 0, 0, 0, 413, 265, x, 0, 0, 290, 0, 0, 0, 416, 267, x, 0, 0, 287, 0, 0, 0, 418, 270, x, 0, 0, 283, 0, 0, 0, 438, 256, x, 0, 0, 280, 0, 0, 0, 440, 259, x, 0, 0, 277, 0, 0, 0, 443, 261, x, 0, 0, 320, 0, 0, 0, 413, 293, x, 0, 0, 316, 0, 0, 0, 429, 282, x, 0, 0, 309, 0, 0, 0, 391, 281, x, 0, 0, 303, 0, 0, 0, 396, 286, x, 0, 0, 296, 0, 0, 0, 411, 262, x, 0, 0, 246, 0, 0, 0, 438, 170, x, 0, 0, 243, 0, 0, 0, 440, 172, x, 0, 0, 240, 0, 0, 0, 443, 175, x, 0, 0, 237, 0, 0, 0, 445, 177, x, 0, 0, 234, 0, 0, 0, 448, 180, x, 0, 0, 227, 0, 0, 0, 405, 170, x, 0, 0, 224, 0, 0, 0, 407, 172, x, 0, 0, 221, 0, 0, 0, 410, 175, x, 0, 0, 218, 0, 0, 0, 412, 177, x, 0, 0, 215, 0, 0, 0, 415, 180, x, 0, 0, 212, 0, 0, 0, 417, 182, x, 0, 0, 208, 0, 0, 0, 371, 176, x, 0, 0, 205, 0, 0, 0, 373, 179, x, 0, 0, 202, 0, 0, 0, 376, 181, x, 0, 0, 199, 0, 0, 0, 378, 184, x, 0, 0, 230, 0, 0, 0, 368, 174, x, 0, 0, 265, 0, 0, 0, 347, 204, x, 0, 0, 262, 0, 0, 0, 349, 207, x, 0, 0, 259, 0, 0, 0, 352, 209, x, 0, 0, 256, 0, 0, 0, 354, 212, x, 0, 0, 253, 0, 0, 0, 357, 214, x, 0, 0, 250, 0, 0, 0, 359, 217, x, 0, 0, 269, 0, 0, 0, 389, 212, x, 0, 0, 273, 0, 0, 0, 405, 207, x, 0, 0, 195, 0, 0, 0, 215, 151, x, 0, 0, 163, 0, 0, 0, 190, 124, x, 0, 0, 159, 0, 0, 0, 200, 134, x, 0, 0, 152, 0, 0, 0, 218, 153, x, 0, 0, 149, 0, 0, 0, 220, 156, x, 0, 0, 156, 0, 0, 0, 203, 137, x, 0, 0, 166, 0, 0, 0, 188, 121, x, 0, 0, 177, 0, 0, 0, 229, 187, x, 0, 0, 180, 0, 0, 0, 226, 184, x, 0, 0, 189, 0, 0, 0, 224, 182, x, 0, 0, 192, 0, 0, 0, 205, 165, x, 0, 0, 128, 0, 0, 0, 172, 128, x, 0, 0, 131, 0, 0, 0, 169, 126, x, 0, 0, 135, 0, 0, 0, 197, 148, x, 0, 0, 138, 0, 0, 0, 195, 146, x, 0, 0, 142, 0, 0, 0, 210, 170, x, 0, 0, 145, 0, 0, 0, 208, 167, x, 0, 0, 170, 0, 0, 0, 224, 204, x, 0, 0, 173, 0, 0, 0, 221, 201, x, 0, 0, 186, 0, 0, 0, 219, 199, x, 0, 0, 183, 0, 0, 0, 199, 245, x, 0, 0, 124, 0, 0, 0, 213, 222, x, 0, 0, 121, 0, 0, 0, 215, 225, x, 0, 0, 114, 0, 0, 0, 204, 250, x, 0, 0, 117, 0, 0, 0, 202, 247, x, 0, 0, 106, 0, 0, 0, 70, 181, x, 0, 0, 102, 0, 0, 0, 260, 155, x, 0, 0, 1, 8,B,0,situations/stamford_sit.html";
    setupGameData[1] = "0, 0, 451, 0, 0, 0, 310, 188, x, 0, 0, 462, 0, 0, 0, 327, 265, x, 0, 0, 441, 0, 0, 0, 312, 240, x, 0, 0, 448, 0, 0, 0, 312, 190, x, 0, 0, 472, 0, 0, 0, 344, 242, x, 0, 0, 483, 0, 0, 0, 341, 198, x, 0, 0, 486, 0, 0, 0, 338, 196, x, 0, 0, 469, 0, 0, 0, 347, 244, x, 0, 0, 476, 0, 0, 0, 341, 294, x, 0, 0, 479, 0, 0, 0, 339, 291, x, 0, 0, 455, 0, 0, 0, 325, 218, x, 0, 0, 458, 0, 0, 0, 323, 215, x, 0, 0, 437, 0, 0, 0, 328, 166, x, 0, 0, 444, 0, 0, 0, 309, 238, x, 0, 0, 465, 0, 0, 0, 325, 263, x, 0, 0, 327, 0, 0, 0, 259, 244, x, 0, 0, 330, 0, 0, 0, 257, 241, x, 0, 0, 334, 0, 0, 0, 274, 268, x, 0, 0, 337, 0, 0, 0, 271, 266, x, 0, 0, 382, 0, 0, 0, 283, 237, x, 0, 0, 386, 0, 0, 0, 284, 242, x, 0, 0, 390, 0, 0, 0, 300, 220, x, 0, 0, 393, 0, 0, 0, 298, 218, x, 0, 0, 401, 0, 0, 0, 298, 169, x, 0, 0, 412, 0, 0, 0, 287, 149, x, 0, 0, 415, 0, 0, 0, 285, 146, x, 0, 0, 422, 0, 0, 0, 284, 295, x, 0, 0, 426, 0, 0, 0, 298, 318, x, 0, 0, 429, 0, 0, 0, 296, 316, x, 0, 0, 433, 0, 0, 0, 338, 144, x, 0, 0, 419, 0, 0, 0, 286, 298, x, 0, 0, 345, 0, 0, 0, 273, 168, x, 0, 0, 348, 0, 0, 0, 270, 166, x, 0, 0, 352, 0, 0, 0, 285, 195, x, 0, 0, 355, 0, 0, 0, 283, 192, x, 0, 0, 408, 0, 0, 0, 310, 141, x, 0, 0, 405, 0, 0, 0, 312, 144, x, 0, 0, 496, 0, 0, 0, 282, 240, x, 0, 0, 493, 0, 0, 0, 281, 293, x, 0, 0, 581, 0, 0, 0, 158, 165, x, 0, 0, 574, 0, 0, 0, 145, 191, x, 0, 0, 578, 0, 0, 0, 161, 168, x, 0, 0, 585, 0, 0, 0, 173, 143, x, 0, 0, 588, 0, 0, 0, 171, 140, x, 0, 0, 592, 0, 0, 0, 120, 239, x, 0, 0, 571, 0, 0, 0, 148, 193, x, 0, 0, 602, 0, 0, 0, 144, 140, x, 0, 0, 599, 0, 0, 0, 146, 143, x, 0, 0, 610, 0, 0, 0, 118, 237, x, 0, 0, 532, 0, 0, 0, 177, 192, x, 0, 0, 567, 0, 0, 0, 133, 216, x, 0, 0, 563, 0, 0, 0, 162, 214, x, 0, 0, 560, 0, 0, 0, 164, 216, x, 0, 0, 556, 0, 0, 0, 175, 189, x, 0, 0, 550, 0, 0, 0, 186, 168, x, 0, 0, 539, 0, 0, 0, 150, 244, x, 0, 0, 507, 0, 0, 0, 189, 217, x, 0, 0, 522, 0, 0, 0, 200, 190, x, 0, 0, 500, 0, 0, 0, 175, 241, x, 0, 0, 528, 0, 0, 0, 172, 238, x, 0, 0, 525, 0, 0, 0, 198, 188, x, 0, 0, 535, 0, 0, 0, 186, 214, x, 0, 0, 553, 0, 0, 0, 183, 165, x, 0, 0, 542, 0, 0, 0, 148, 242, x, 0, 0, 617, 0, 0, 0, 172, 187, x, 0, 0, 370, 0, 0, 0, 373, 135, x, 0, 0, 1, 8,A,1,situations/stamford_sit.html";
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

var swidth=5160; //width of biggest board
var sheight=3420; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=66; //no of pieces in game
var unitTotal=13; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=66; //index number of last piece - turn now
var gerNumber=39; //the index number of the first side B piece
var neutNumber=66; //index number of first neutral piece

var Abase = "skyblue/"
var Bbase = "purple/"
var Apanic=20;
var Bpanic=23;
var maxTurns = 15;
var nameA="Saxons";
var nameB="Vikings";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "hotpink";
var DcolorFlag = true;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=100; //unit width/height
var sunit2=100;
var sunitB=71; //unit width/height
var sunitB2=71;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=["skyblue/mi.jpg", "MI af:2 mf:3 vp:", "1", "15", "n",
"skyblue/sd.jpg", "SD af:4 mf:4 vp:", "2",  "5", "n",
"skyblue/ax.jpg", "AX af:3 mf:4 vp:", "2", "6", "n",
"skyblue/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "5", "c",
"skyblue/ib.jpg", "IB mf:5 fire:2/3 vp:", "2",  "6", "f",
"skyblue/2l.jpg", "2L combat:+6 radius:2 mf:9  Harold vp", "0", "1", "l",
"skyblue/3l.jpg", "3L combat:+3 radius:1 mf:9 Gurth  vp:", "0", "1", "l",

"purple/ax.jpg", "AX af:3 mf:4 vp:", "2", "10", "n",
"purple/sd.jpg", "SD af:4 mf:4 vp:", "2", "10", "n",
"purple/ib.jpg", "IB mf:5 fire:2/3 vp:", "2", "5", "f",
"purple/3l.jpg", "3L combat:+3 radius:1 mf:9 GURTH  vp:", "0", "2", "l",

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


var board1 = "boards/stamford_normal.jpg";
var board_setup = "boards/stamford_setup.jpg";
var board2 = "boards/viking.jpg";
var board3 = "boards/arbela1.jpg";
