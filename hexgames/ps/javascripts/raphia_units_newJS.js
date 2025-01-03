var situationAddress="situations/raphia_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/arbela.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/spartanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/raphia_setup.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 0, 0, 0, 0, 446, 270, 0, 0, 0, 0, 0, 0, 0, 448, 272, 0, 0, 0, 0, 0, 0, 0, 451, 275, 0, 0, 0, 0, 0, 0, 0, 453, 277, 0, 0, 0, 0, 0, 0, 0, 456, 280, 0, 0, 0, 0, 0, 0, 0, 439, 291, 0, 0, 0, 0, 0, 0, 0, 442, 293, 0, 0, 0, 0, 0, 0, 0, 444, 296, 0, 0, 0, 0, 0, 0, 0, 447, 298, 0, 0, 0, 0, 0, 0, 0, 449, 301, 0, 0, 0, 0, 0, 0, 0, 503, 229, 0, 0, 0, 0, 0, 0, 0, 507, 234, 0, 0, 0, 0, 0, 0, 0, 510, 237, 0, 0, 0, 0, 0, 0, 0, 512, 239, 0, 0, 0, 0, 0, 0, 0, 476, 240, 0, 0, 0, 0, 0, 0, 0, 479, 243, 0, 0, 0, 0, 0, 0, 0, 481, 245, 0, 0, 0, 0, 0, 0, 0, 484, 248, 0, 0, 0, 0, 0, 0, 0, 486, 250, 0, 0, 0, 0, 0, 0, 0, 489, 253, 0, 0, 0, 0, 0, 0, 0, 432, 316, 0, 0, 0, 0, 0, 0, 0, 435, 319, 0, 0, 0, 0, 0, 0, 0, 437, 321, 0, 0, 0, 0, 0, 0, 0, 440, 324, 0, 0, 0, 0, 0, 0, 0, 442, 326, 0, 0, 0, 0, 0, 0, 0, 445, 329, 0, 0, 0, 0, 0, 0, 0, 428, 339, 0, 0, 0, 0, 0, 0, 0, 430, 342, 0, 0, 0, 0, 0, 0, 0, 433, 344, 0, 0, 0, 0, 0, 0, 0, 413, 349, 0, 0, 0, 0, 0, 0, 0, 416, 351, 0, 0, 0, 0, 0, 0, 0, 418, 354, 0, 0, 0, 0, 0, 0, 0, 421, 356, 0, 0, 0, 0, 0, 0, 0, 539, 483, 0, 0, 0, 0, 0, 0, 0, 542, 485, 0, 0, 0, 0, 0, 0, 0, 490, 478, 0, 0, 0, 0, 0, 0, 0, 492, 480, 0, 0, 0, 0, 0, 0, 0, 495, 483, 0, 0, 0, 0, 0, 0, 0, 497, 485, 0, 0, 0, 0, 0, 0, 0, 514, 483, 0, 0, 0, 0, 0, 0, 0, 517, 486, 0, 0, 0, 0, 0, 0, 0, 519, 488, 0, 0, 0, 0, 0, 0, 0, 522, 491, 0, 0, 0, 0, 0, 0, 0, 484, 455, 0, 0, 0, 0, 0, 0, 0, 486, 458, 0, 0, 0, 0, 0, 0, 0, 515, 463, 0, 0, 0, 0, 0, 0, 0, 517, 466, 0, 0, 0, 0, 0, 0, 0, 438, 367, 0, 0, 0, 0, 0, 0, 0, 428, 386, 0, 0, 0, 0, 0, 0, 0, 446, 389, 0, 0, 0, 0, 0, 0, 0, 325, 328, 0, 0, 0, 0, 0, 0, 0, 328, 337, 0, 0, 0, 0, 0, 0, 0, 331, 339, 0, 0, 0, 0, 0, 0, 0, 333, 342, 0, 0, 0, 0, 0, 0, 0, 336, 344, 0, 0, 0, 0, 0, 0, 0, 308, 346, 0, 0, 0, 0, 0, 0, 0, 311, 348, 0, 0, 0, 0, 0, 0, 0, 318, 357, 0, 0, 0, 0, 0, 0, 0, 320, 359, 0, 0, 0, 0, 0, 0, 0, 323, 362, 0, 0, 0, 0, 0, 0, 0, 226, 382, 0, 0, 0, 0, 0, 0, 0, 229, 385, 0, 0, 0, 0, 0, 0, 0, 231, 387, 0, 0, 0, 0, 0, 0, 0, 234, 390, 0, 0, 0, 0, 0, 0, 0, 236, 392, 0, 0, 0, 0, 0, 0, 0, 252, 377, 0, 0, 0, 0, 0, 0, 0, 255, 379, 0, 0, 0, 0, 0, 0, 0, 257, 382, 0, 0, 0, 0, 0, 0, 0, 260, 384, 0, 0, 0, 0, 0, 0, 0, 262, 387, 0, 0, 0, 0, 0, 0, 0, 261, 362, 0, 0, 0, 0, 0, 0, 0, 264, 364, 0, 0, 0, 0, 0, 0, 0, 266, 367, 0, 0, 0, 0, 0, 0, 0, 269, 369, 0, 0, 0, 0, 0, 0, 0, 271, 372, 0, 0, 0, 0, 0, 0, 0, 292, 357, 0, 0, 0, 0, 0, 0, 0, 295, 359, 0, 0, 0, 0, 0, 0, 0, 297, 362, 0, 0, 0, 0, 0, 0, 0, 300, 364, 0, 0, 0, 0, 0, 0, 0, 350, 367, 0, 0, 0, 0, 0, 0, 0, 352, 370, 0, 0, 0, 0, 0, 0, 0, 355, 372, 0, 0, 0, 0, 0, 0, 0, 357, 375, 0, 0, 0, 0, 0, 0, 0, 360, 377, 0, 0, 0, 0, 0, 0, 0, 362, 380, 0, 0, 0, 0, 0, 0, 0, 451, 526, 0, 0, 0, 0, 0, 0, 0, 453, 529, 0, 0, 0, 0, 0, 0, 0, 456, 531, 0, 0, 0, 0, 0, 0, 0, 458, 534, 0, 0, 0, 0, 0, 0, 0, 434, 507, 0, 0, 0, 0, 0, 0, 0, 432, 504, 0, 0, 0, 0, 0, 0, 0, 429, 502, 0, 0, 0, 0, 0, 0, 0, 455, 499, 0, 0, 0, 0, 0, 0, 0, 453, 496, 0, 0, 0, 0, 0, 0, 0, 422, 419, 0, 0, 0, 0, 0, 0, 0, 442, 426, 0, 0, 0, 0, 0, 0, 0, 447, 448, 0, 0, 0, 0, 0, 0, 0, 513, 201, 0, 0, 0, 1, 8,A,0,situations/Raphia.html";
    setupGameData[1] = "0, 0, 0, 0, 0, 0, 550, 331, 0, 0, 0, 0, 0, 0, 0, 547, 328, 0, 0, 0, 0, 0, 0, 0, 530, 341, 0, 0, 0, 0, 0, 0, 0, 533, 343, 0, 0, 0, 0, 0, 0, 0, 588, 397, 0, 0, 0, 0, 0, 0, 0, 565, 381, 0, 0, 0, 0, 0, 0, 0, 568, 384, 0, 0, 0, 0, 0, 0, 0, 586, 394, 0, 0, 0, 0, 0, 0, 0, 547, 375, 0, 0, 0, 0, 0, 0, 0, 550, 377, 0, 0, 0, 0, 0, 0, 0, 570, 363, 0, 0, 0, 0, 0, 0, 0, 570, 359, 0, 0, 0, 0, 0, 0, 0, 546, 349, 0, 0, 0, 0, 0, 0, 0, 549, 352, 0, 0, 0, 0, 0, 0, 0, 584, 350, 0, 0, 0, 0, 0, 0, 0, 587, 352, 0, 0, 0, 0, 0, 0, 0, 589, 375, 0, 0, 0, 0, 0, 0, 0, 587, 372, 0, 0, 0, 0, 0, 0, 0, 531, 296, 0, 0, 0, 0, 0, 0, 0, 529, 293, 0, 0, 0, 0, 0, 0, 0, 625, 419, 0, 0, 0, 0, 0, 0, 0, 509, 286, 0, 0, 0, 0, 0, 0, 0, 622, 416, 0, 0, 0, 0, 0, 0, 0, 620, 414, 0, 0, 0, 0, 0, 0, 0, 506, 284, 0, 0, 0, 0, 0, 0, 0, 504, 281, 0, 0, 0, 0, 0, 0, 0, 506, 351, 0, 0, 0, 0, 0, 0, 0, 506, 373, 0, 0, 0, 0, 0, 0, 0, 509, 398, 0, 0, 0, 0, 0, 0, 0, 507, 396, 0, 0, 0, 0, 0, 0, 0, 568, 409, 0, 0, 0, 0, 0, 0, 0, 545, 419, 0, 0, 0, 0, 0, 0, 0, 525, 411, 0, 0, 0, 0, 0, 0, 0, 550, 289, 0, 0, 0, 0, 0, 0, 0, 547, 287, 0, 0, 0, 0, 0, 0, 0, 648, 388, 0, 0, 0, 0, 0, 0, 0, 645, 385, 0, 0, 0, 0, 0, 0, 0, 645, 408, 0, 0, 0, 0, 0, 0, 0, 648, 410, 0, 0, 0, 0, 0, 0, 0, 670, 401, 0, 0, 0, 0, 0, 0, 0, 667, 399, 0, 0, 0, 0, 0, 0, 0, 546, 263, 0, 0, 0, 0, 0, 0, 0, 548, 266, 0, 0, 0, 0, 0, 0, 0, 531, 272, 0, 0, 0, 0, 0, 0, 0, 533, 275, 0, 0, 0, 0, 0, 0, 0, 528, 382, 0, 0, 0, 0, 0, 0, 0, 531, 384, 0, 0, 0, 0, 0, 0, 0, 545, 372, 0, 0, 0, 0, 0, 0, 0, 643, 405, 0, 0, 0, 0, 0, 0, 0, 528, 270, 0, 0, 0, 0, 0, 0, 0, 366, 496, 0, 0, 0, 0, 0, 0, 0, 347, 442, 0, 0, 0, 0, 0, 0, 0, 347, 466, 0, 0, 0, 0, 0, 0, 0, 350, 487, 0, 0, 0, 0, 0, 0, 0, 369, 499, 0, 0, 0, 0, 0, 0, 0, 348, 485, 0, 0, 0, 0, 0, 0, 0, 364, 494, 0, 0, 0, 0, 0, 0, 0, 387, 504, 0, 0, 0, 0, 0, 0, 0, 390, 507, 0, 0, 0, 0, 0, 0, 0, 392, 509, 0, 0, 0, 0, 0, 0, 0, 342, 437, 0, 0, 0, 0, 0, 0, 0, 345, 440, 0, 0, 0, 0, 0, 0, 0, 342, 461, 0, 0, 0, 0, 0, 0, 0, 344, 463, 0, 0, 0, 0, 0, 0, 0, 345, 482, 0, 0, 0, 0, 0, 0, 0, 348, 510, 0, 0, 0, 0, 0, 0, 0, 327, 477, 0, 0, 0, 0, 0, 0, 0, 330, 480, 0, 0, 0, 0, 0, 0, 0, 351, 512, 0, 0, 0, 0, 0, 0, 0, 327, 449, 0, 0, 0, 0, 0, 0, 0, 386, 528, 0, 0, 0, 0, 0, 0, 0, 389, 530, 0, 0, 0, 0, 0, 0, 0, 391, 533, 0, 0, 0, 0, 0, 0, 0, 325, 446, 0, 0, 0, 0, 0, 0, 0, 330, 451, 0, 0, 0, 0, 0, 0, 0, 365, 546, 0, 0, 0, 0, 0, 0, 0, 368, 549, 0, 0, 0, 0, 0, 0, 0, 330, 432, 0, 0, 0, 0, 0, 0, 0, 327, 430, 0, 0, 0, 0, 0, 0, 0, 388, 467, 0, 0, 0, 0, 0, 0, 0, 407, 500, 0, 0, 0, 0, 0, 0, 0, 409, 544, 0, 0, 0, 0, 0, 0, 0, 368, 435, 0, 0, 0, 0, 0, 0, 0, 329, 407, 0, 0, 0, 0, 0, 0, 0, 408, 454, 0, 0, 0, 0, 0, 0, 0, 389, 551, 0, 0, 0, 0, 0, 0, 0, 392, 554, 0, 0, 0, 0, 0, 0, 0, 394, 556, 0, 0, 0, 0, 0, 0, 0, 285, 424, 0, 0, 0, 0, 0, 0, 0, 287, 427, 0, 0, 0, 0, 0, 0, 0, 290, 429, 0, 0, 0, 0, 0, 0, 0, 367, 453, 0, 0, 0, 0, 0, 0, 0, 389, 487, 0, 0, 0, 0, 0, 0, 0, 370, 476, 0, 0, 0, 0, 0, 0, 0, 367, 473, 0, 0, 0, 0, 0, 0, 0, 325, 427, 0, 0, 0, 0, 0, 0, 0, 384, 525, 0, 0, 0, 0, 0, 0, 0, 513, 201, 0, 0, 0, 1, 8,A,0,situations/raphia_sit.html";
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

var swidth=7400; //width of biggest board
var sheight=6560; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=98 //no of pieces in game
var unitTotal=23; //number of types of pieces
var lastIndex=98; //index number of last piece - turn now
var gerNumber=51; //the index number of the first side B piece
var neutNumber=98; //index number of first neutral piece


var Abase = "mint/"
var Bbase = "purple/"
var Apanic=65;
var Bpanic=59;
var maxTurns = 20;
var nameA="Seleucids";
var nameB="Ptolemaics";
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

"mint/pp.jpg", "PP Macedonian Phalanx af:6 mf:4 vp:", "3",  "10", "n",
"mint/ps.jpg", "PS af:4 mf:3 vp:", "2",  "4", "n",
"mint/lt.jpg", "LT af:[4] mf:5 vp:", "2", "6", "n",
"mint/bw.jpg", "BW Persian archers mf:5 fire:2/2 vp:", "2", "6", "f",
"mint/sk.jpg", "SK Agriania slingers af:[2] mf:5 fire:2/1 vp:", "3",  "7", "f",
"mint/lc.jpg", "LC af:1 mf:9 vp:", "1",  "2", "c",
"mint/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "4", "c",
"mint/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2",  "4", "f",
"mint/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "2", "c",
"mint/el.jpg", "EL Indian war elephants af:[8] mf:6 vp:", "4",  "2", "e",
"mint/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",
"mint/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

"purple/pp.jpg", "PP af:6 mf:4 vp:", "3",  "15", "n",
"purple/ps.jpg", "PS af:4 mf:3 vp:", "2",  "10", "n",
"purple/bi.jpg", "BI af:[6] mf:5 vp:", "3",  "4", "n",
"purple/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "6", "f",
"purple/lc.jpg", "LC af:1 mf:9 vp:", "1",  "4", "c",
"purple/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "2", "c",
"purple/el.jpg", "EL af:[8] mf:6 vp:", "4",  "3", "e",
"purple/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",
"purple/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

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


var board1 = "boards/raphia_size8.jpg";
var board_setup = "boards/raphia_setup.jpg";
var board2 = "boards/viking.jpg";
var board3 = "boards/arbela1.jpg";
