var situationAddress="situations/hastings_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/hastings_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/vikingWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/hastings_setup2.JPG";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 373, 0, 0, 0, 205, 89, x, 0, 0, 376, 0, 0, 0, 202, 87, x, 0, 0, 380, 0, 0, 0, 203, 80, x, 0, 0, 425, 0, 0, 0, 428, 62, x, 0, 0, 422, 0, 0, 0, 431, 64, x, 0, 0, 419, 0, 0, 0, 433, 67, x, 0, 0, 415, 0, 0, 0, 419, 75, x, 0, 0, 412, 0, 0, 0, 421, 78, x, 0, 0, 409, 0, 0, 0, 424, 80, x, 0, 0, 406, 0, 0, 0, 426, 83, x, 0, 0, 363, 0, 0, 0, 215, 117, x, 0, 0, 367, 0, 0, 0, 210, 94, x, 0, 0, 370, 0, 0, 0, 207, 92, x, 0, 0, 383, 0, 0, 0, 201, 77, x, 0, 0, 386, 0, 0, 0, 198, 75, x, 0, 0, 390, 0, 0, 0, 419, 102, x, 0, 0, 402, 0, 0, 0, 409, 92, x, 0, 0, 399, 0, 0, 0, 412, 94, x, 0, 0, 396, 0, 0, 0, 414, 97, x, 0, 0, 393, 0, 0, 0, 417, 99, x, 0, 0, 360, 0, 0, 0, 218, 120, x, 0, 0, 357, 0, 0, 0, 220, 122, x, 0, 0, 354, 0, 0, 0, 223, 125, x, 0, 0, 351, 0, 0, 0, 225, 127, x, 0, 0, 347, 0, 0, 0, 447, 81, x, 0, 0, 344, 0, 0, 0, 449, 83, x, 0, 0, 341, 0, 0, 0, 452, 86, x, 0, 0, 338, 0, 0, 0, 454, 88, x, 0, 0, 335, 0, 0, 0, 457, 91, x, 0, 0, 332, 0, 0, 0, 459, 93, x, 0, 0, 328, 0, 0, 0, 436, 101, x, 0, 0, 325, 0, 0, 0, 439, 103, x, 0, 0, 322, 0, 0, 0, 441, 106, x, 0, 0, 319, 0, 0, 0, 444, 108, x, 0, 0, 316, 0, 0, 0, 446, 111, x, 0, 0, 312, 0, 0, 0, 423, 117, x, 0, 0, 309, 0, 0, 0, 425, 119, x, 0, 0, 306, 0, 0, 0, 428, 122, x, 0, 0, 303, 0, 0, 0, 430, 124, x, 0, 0, 274, 0, 0, 0, 405, 153, x, 0, 0, 284, 0, 0, 0, 209, 149, x, 0, 0, 287, 0, 0, 0, 207, 147, x, 0, 0, 290, 0, 0, 0, 204, 144, x, 0, 0, 299, 0, 0, 0, 202, 142, x, 0, 0, 296, 0, 0, 0, 397, 146, x, 0, 0, 293, 0, 0, 0, 400, 148, x, 0, 0, 281, 0, 0, 0, 212, 152, x, 0, 0, 277, 0, 0, 0, 402, 151, x, 0, 0, 271, 0, 0, 0, 407, 156, x, 0, 0, 267, 0, 0, 0, 181, 118, x, 0, 0, 263, 0, 0, 0, 422, 372, x, 0, 0, 260, 0, 0, 0, 424, 375, x, 0, 0, 257, 0, 0, 0, 427, 377, x, 0, 0, 253, 0, 0, 0, 201, 377, x, 0, 0, 250, 0, 0, 0, 204, 380, x, 0, 0, 246, 0, 0, 0, 206, 382, x, 0, 0, 243, 0, 0, 0, 208, 385, x, 0, 0, 240, 0, 0, 0, 211, 387, x, 0, 0, 237, 0, 0, 0, 213, 390, x, 0, 0, 233, 0, 0, 0, 395, 364, x, 0, 0, 212, 0, 0, 0, 230, 385, x, 0, 0, 215, 0, 0, 0, 227, 383, x, 0, 0, 218, 0, 0, 0, 225, 380, x, 0, 0, 221, 0, 0, 0, 222, 378, x, 0, 0, 224, 0, 0, 0, 220, 375, x, 0, 0, 227, 0, 0, 0, 217, 373, x, 0, 0, 230, 0, 0, 0, 398, 366, x, 0, 0, 205, 0, 0, 0, 400, 369, x, 0, 0, 202, 0, 0, 0, 403, 371, x, 0, 0, 199, 0, 0, 0, 405, 374, x, 0, 0, 195, 0, 0, 0, 182, 317, x, 0, 0, 192, 0, 0, 0, 185, 320, x, 0, 0, 189, 0, 0, 0, 187, 322, x, 0, 0, 186, 0, 0, 0, 190, 325, x, 0, 0, 183, 0, 0, 0, 192, 327, x, 0, 0, 179, 0, 0, 0, 417, 315, x, 0, 0, 176, 0, 0, 0, 419, 317, x, 0, 0, 173, 0, 0, 0, 422, 320, x, 0, 0, 167, 0, 0, 0, 427, 325, x, 0, 0, 170, 0, 0, 0, 424, 322, x, 0, 0, 159, 0, 0, 0, 332, 307, x, 0, 0, 156, 0, 0, 0, 261, 312, x, 0, 0, 153, 0, 0, 0, 263, 315, x, 0, 0, 150, 0, 0, 0, 266, 317, x, 0, 0, 147, 0, 0, 0, 268, 320, x, 0, 0, 144, 0, 0, 0, 271, 322, x, 0, 0, 140, 0, 0, 0, 334, 309, x, 0, 0, 137, 0, 0, 0, 337, 312, x, 0, 0, 134, 0, 0, 0, 339, 314, x, 0, 0, 131, 0, 0, 0, 342, 317, x, 0, 0, 102, 0, 0, 0, 200, 234, x, 0, 0, 105, 0, 0, 0, 197, 231, x, 0, 0, 108, 0, 0, 0, 195, 229, x, 0, 0, 208, 0, 0, 0, 190, 224, x, 0, 0, 123, 0, 0, 0, 192, 226, x, 0, 0, 120, 0, 0, 0, 302, 323, x, 0, 0, 116, 0, 0, 0, 285, 320, x, 0, 0, 127, 0, 0, 0, 174, 99, x, 0, 0, 1, 8,B,0,situations/hastings.html";
    setupGameData[1] = "0, 0, 748, 0, 0, 0, 245, 55, x, 0, 0, 744, 0, 0, 0, 217, 51, x, 0, 0, 741, 0, 0, 0, 219, 53, x, 0, 0, 784, 0, 0, 0, 387, 26, x, 0, 0, 788, 0, 0, 0, 354, 26, x, 0, 0, 804, 0, 0, 0, 234, 22, x, 0, 0, 780, 0, 0, 0, 368, 52, x, 0, 0, 792, 0, 0, 0, 322, 27, x, 0, 0, 796, 0, 0, 0, 291, 25, x, 0, 0, 800, 0, 0, 0, 262, 25, x, 0, 0, 720, 0, 0, 0, 290, 80, x, 0, 0, 755, 0, 0, 0, 272, 55, x, 0, 0, 751, 0, 0, 0, 242, 52, x, 0, 0, 737, 0, 0, 0, 230, 75, x, 0, 0, 734, 0, 0, 0, 233, 78, x, 0, 0, 777, 0, 0, 0, 371, 54, x, 0, 0, 763, 0, 0, 0, 310, 53, x, 0, 0, 766, 0, 0, 0, 308, 51, x, 0, 0, 770, 0, 0, 0, 341, 53, x, 0, 0, 773, 0, 0, 0, 338, 51, x, 0, 0, 723, 0, 0, 0, 288, 78, x, 0, 0, 727, 0, 0, 0, 260, 81, x, 0, 0, 730, 0, 0, 0, 258, 78, x, 0, 0, 759, 0, 0, 0, 276, 51, x, 0, 0, 702, 0, 0, 0, 308, 106, x, 0, 0, 705, 0, 0, 0, 306, 103, x, 0, 0, 709, 0, 0, 0, 278, 108, x, 0, 0, 712, 0, 0, 0, 275, 105, x, 0, 0, 716, 0, 0, 0, 322, 80, x, 0, 0, 698, 0, 0, 0, 353, 80, x, 0, 0, 673, 0, 0, 0, 385, 82, x, 0, 0, 676, 0, 0, 0, 382, 80, x, 0, 0, 684, 0, 0, 0, 399, 53, x, 0, 0, 687, 0, 0, 0, 396, 50, x, 0, 0, 695, 0, 0, 0, 355, 82, x, 0, 0, 656, 0, 0, 0, 371, 106, x, 0, 0, 659, 0, 0, 0, 368, 104, x, 0, 0, 663, 0, 0, 0, 340, 105, x, 0, 0, 666, 0, 0, 0, 338, 102, x, 0, 0, 631, 0, 0, 0, 323, 131, x, 0, 0, 649, 0, 0, 0, 249, 110, x, 0, 0, 645, 0, 0, 0, 259, 131, x, 0, 0, 642, 0, 0, 0, 262, 133, x, 0, 0, 638, 0, 0, 0, 291, 131, x, 0, 0, 621, 0, 0, 0, 356, 134, x, 0, 0, 624, 0, 0, 0, 354, 132, x, 0, 0, 652, 0, 0, 0, 246, 107, x, 0, 0, 628, 0, 0, 0, 325, 134, x, 0, 0, 635, 0, 0, 0, 293, 134, x, 0, 0, 691, 0, 0, 0, 335, 100, x, 0, 0, 568, 0, 0, 0, 335, 367, x, 0, 0, 572, 0, 0, 0, 325, 293, x, 0, 0, 575, 0, 0, 0, 323, 290, x, 0, 0, 600, 0, 0, 0, 259, 344, x, 0, 0, 603, 0, 0, 0, 256, 341, x, 0, 0, 607, 0, 0, 0, 276, 370, x, 0, 0, 610, 0, 0, 0, 274, 367, x, 0, 0, 614, 0, 0, 0, 308, 369, x, 0, 0, 617, 0, 0, 0, 305, 366, x, 0, 0, 551, 0, 0, 0, 363, 315, x, 0, 0, 596, 0, 0, 0, 248, 317, x, 0, 0, 593, 0, 0, 0, 250, 320, x, 0, 0, 589, 0, 0, 0, 227, 289, x, 0, 0, 586, 0, 0, 0, 230, 292, x, 0, 0, 582, 0, 0, 0, 262, 290, x, 0, 0, 579, 0, 0, 0, 264, 293, x, 0, 0, 554, 0, 0, 0, 360, 313, x, 0, 0, 558, 0, 0, 0, 355, 343, x, 0, 0, 561, 0, 0, 0, 353, 341, x, 0, 0, 565, 0, 0, 0, 337, 370, x, 0, 0, 483, 0, 0, 0, 257, 234, x, 0, 0, 486, 0, 0, 0, 230, 235, x, 0, 0, 489, 0, 0, 0, 215, 259, x, 0, 0, 511, 0, 0, 0, 241, 257, x, 0, 0, 523, 0, 0, 0, 275, 256, x, 0, 0, 468, 0, 0, 0, 345, 285, x, 0, 0, 471, 0, 0, 0, 362, 262, x, 0, 0, 474, 0, 0, 0, 350, 234, x, 0, 0, 480, 0, 0, 0, 291, 237, x, 0, 0, 477, 0, 0, 0, 322, 234, x, 0, 0, 431, 0, 0, 0, 352, 237, x, 0, 0, 457, 0, 0, 0, 232, 237, x, 0, 0, 461, 0, 0, 0, 217, 261, x, 0, 0, 465, 0, 0, 0, 348, 288, x, 0, 0, 534, 0, 0, 0, 305, 262, x, 0, 0, 541, 0, 0, 0, 289, 287, x, 0, 0, 453, 0, 0, 0, 260, 237, x, 0, 0, 438, 0, 0, 0, 324, 237, x, 0, 0, 449, 0, 0, 0, 364, 265, x, 0, 0, 445, 0, 0, 0, 293, 240, x, 0, 0, 508, 0, 0, 0, 334, 259, x, 0, 0, 515, 0, 0, 0, 243, 260, x, 0, 0, 526, 0, 0, 0, 273, 253, x, 0, 0, 493, 0, 0, 0, 337, 262, x, 0, 0, 537, 0, 0, 0, 302, 259, x, 0, 0, 544, 0, 0, 0, 288, 235, x, 0, 0, 547, 0, 0, 0, 347, 232, x, 0, 0, 808, 0, 0, 0, 214, 102, x, 0, 0, 1, 8,A,1,sixaxions/hastings_sit.html";
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

var swidth=4800; //width of biggest board
var sheight=3600; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=98; //no of pieces in game
var unitTotal=14; //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=98; //index number of last piece - turn now
var gerNumber=50; //the index number of the first side B piece
var neutNumber=97; //index number of first neutral piece

var Abase = "navy/"
var Bbase = "skyblue/"
var Apanic=26;
var Bpanic=23;
var maxTurns = 20;
var nameA="Normans";
var nameB="Saxons";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "hotpink";
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

var unitsA=["navy/mi.jpg", "MI af:2 mf:3 vp:", "1", "24", "n",
"navy/sd.jpg", "SD af:4 mf:4 vp:", "2",  "5", "n",
"navy/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "6", "c",
"navy/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "4", "c",
"navy/ib.jpg", "IB mf:5 fire:2/3 vp:", "2",  "10", "f",
"navy/2l.jpg", "2L combat:+6 radius:2 mf:9  WILLIAM vp", "0", "1", "l",

"skyblue/mi.jpg", "MI af:2 mf:3 vp:", "1", "20", "n",
"skyblue/ax.jpg", "AX af:3 mf:4 vp:", "2", "10", "n",
"skyblue/sd.jpg", "SD af:4 mf:4 vp:", "2", "10", "n",
"skyblue/ib.jpg", "IB mf:5 fire:2/3 vp:", "2", "5", "f",
"skyblue/2l.jpg", "2L combat:+6 radius:2 mf:9  HAROLD vp:", "0", "1", "l",
"skyblue/3l.jpg", "3L combat:+3 radius:1 mf:9 GURTH  vp:", "0", "1", "l",

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


var board1 = "boards/hastings_normal2.JPG";
var board_setup = "boards/boards/hastings_setup2.JPG";
var board2 = "boards/viking.jpg";
var board3 = "boards/arbela1.jpg";
