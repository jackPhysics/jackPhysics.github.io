var situationAddress="situations/liegnitz_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags McA edit.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/arbela.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/vikingWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/liegnitz_setup.jpg";
var presetupGameData = "";
var setupGameData = "0, 0, 199, 0, 0, 0, 462, 245, 0, 0, 0, 195, 0, 0, 0, 499, 294, 0, 0, 0, 192, 0, 0, 0, 501, 296, 0, 0, 0, 189, 0, 0, 0, 504, 299, 0, 0, 0, 185, 0, 0, 0, 469, 296, 0, 0, 0, 182, 0, 0, 0, 472, 299, 0, 0, 0, 179, 0, 0, 0, 474, 301, 0, 0, 0, 175, 0, 0, 0, 454, 272, 0, 0, 0, 172, 0, 0, 0, 457, 274, 0, 0, 0, 169, 0, 0, 0, 459, 277, 0, 0, 0, 203, 0, 0, 0, 473, 252, 0, 0, 0, 207, 0, 0, 0, 489, 223, 0, 0, 0, 240, 0, 0, 0, 529, 202, 0, 0, 0, 243, 0, 0, 0, 526, 200, 0, 0, 0, 246, 0, 0, 0, 524, 197, 0, 0, 0, 223, 0, 0, 0, 511, 221, 0, 0, 0, 220, 0, 0, 0, 514, 224, 0, 0, 0, 217, 0, 0, 0, 516, 226, 0, 0, 0, 213, 0, 0, 0, 484, 218, 0, 0, 0, 210, 0, 0, 0, 486, 221, 0, 0, 0, 165, 0, 0, 0, 454, 323, 0, 0, 0, 162, 0, 0, 0, 457, 325, 0, 0, 0, 158, 0, 0, 0, 438, 296, 0, 0, 0, 155, 0, 0, 0, 440, 299, 0, 0, 0, 152, 0, 0, 0, 443, 301, 0, 0, 0, 148, 0, 0, 0, 495, 200, 0, 0, 0, 145, 0, 0, 0, 498, 202, 0, 0, 0, 142, 0, 0, 0, 500, 205, 0, 0, 0, 138, 0, 0, 0, 427, 272, 0, 0, 0, 135, 0, 0, 0, 429, 274, 0, 0, 0, 132, 0, 0, 0, 432, 277, 0, 0, 0, 128, 0, 0, 0, 440, 249, 0, 0, 0, 125, 0, 0, 0, 442, 251, 0, 0, 0, 122, 0, 0, 0, 445, 254, 0, 0, 0, 118, 0, 0, 0, 455, 222, 0, 0, 0, 115, 0, 0, 0, 457, 225, 0, 0, 0, 112, 0, 0, 0, 460, 227, 0, 0, 0, 108, 0, 0, 0, 470, 198, 0, 0, 0, 105, 0, 0, 0, 473, 201, 0, 0, 0, 102, 0, 0, 0, 475, 203, 0, 0, 0, 249, 0, 0, 0, 452, 269, 0, 0, 0, 236, 0, 0, 0, 509, 219, 0, 0, 0, 253, 0, 0, 0, 444, 152, 0, 0, 0, 502, 0, 0, 0, 442, 150, 0, 0, 0, 498, 0, 0, 0, 426, 126, 0, 0, 0, 495, 0, 0, 0, 429, 129, 0, 0, 0, 491, 0, 0, 0, 385, 149, 0, 0, 0, 488, 0, 0, 0, 387, 151, 0, 0, 0, 535, 0, 0, 0, 319, 427, 0, 0, 0, 666, 0, 0, 0, 290, 425, 0, 0, 0, 361, 0, 0, 0, 414, 107, 0, 0, 0, 382, 0, 0, 0, 402, 128, 0, 0, 0, 385, 0, 0, 0, 399, 125, 0, 0, 0, 567, 0, 0, 0, 300, 446, 0, 0, 0, 589, 0, 0, 0, 360, 149, 0, 0, 0, 592, 0, 0, 0, 358, 147, 0, 0, 0, 406, 0, 0, 0, 386, 103, 0, 0, 0, 403, 0, 0, 0, 389, 106, 0, 0, 0, 291, 0, 0, 0, 329, 202, 0, 0, 0, 288, 0, 0, 0, 331, 204, 0, 0, 0, 564, 0, 0, 0, 302, 449, 0, 0, 0, 652, 0, 0, 0, 353, 447, 0, 0, 0, 655, 0, 0, 0, 351, 445, 0, 0, 0, 612, 0, 0, 0, 401, 175, 0, 0, 0, 609, 0, 0, 0, 403, 177, 0, 0, 0, 596, 0, 0, 0, 333, 152, 0, 0, 0, 599, 0, 0, 0, 330, 150, 0, 0, 0, 623, 0, 0, 0, 328, 447, 0, 0, 0, 620, 0, 0, 0, 330, 449, 0, 0, 0, 641, 0, 0, 0, 313, 472, 0, 0, 0, 578, 0, 0, 0, 304, 154, 0, 0, 0, 581, 0, 0, 0, 301, 151, 0, 0, 0, 679, 0, 0, 0, 343, 471, 0, 0, 0, 682, 0, 0, 0, 341, 468, 0, 0, 0, 346, 0, 0, 0, 369, 130, 0, 0, 0, 343, 0, 0, 0, 371, 132, 0, 0, 0, 627, 0, 0, 0, 315, 474, 0, 0, 0, 669, 0, 0, 0, 317, 425, 0, 0, 0, 368, 0, 0, 0, 417, 153, 0, 0, 0, 662, 0, 0, 0, 343, 422, 0, 0, 0, 672, 0, 0, 0, 287, 423, 0, 0, 0, 364, 0, 0, 0, 412, 105, 0, 0, 0, 371, 0, 0, 0, 414, 151, 0, 0, 0, 659, 0, 0, 0, 346, 425, 0, 0, 0, 585, 0, 0, 0, 357, 199, 0, 0, 0, 305, 0, 0, 0, 288, 177, 0, 0, 0, 302, 0, 0, 0, 291, 179, 0, 0, 0, 298, 0, 0, 0, 302, 201, 0, 0, 0, 295, 0, 0, 0, 305, 204, 0, 0, 0, 281, 0, 0, 0, 360, 202, 0, 0, 0, 277, 0, 0, 0, 370, 174, 0, 0, 0, 274, 0, 0, 0, 372, 177, 0, 0, 0, 675, 0, 0, 0, 325, 444, 0, 0, 0, 602, 0, 0, 0, 382, 146, 0, 0, 0, 616, 0, 0, 0, 346, 171, 0, 0, 0, 1, 8,A,1,situations/liegnitz_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0, 0, 199, 0, 0, 0, 462, 245, 0, 0, 0, 195, 0, 0, 0, 499, 294, 0, 0, 0, 192, 0, 0, 0, 501, 296, 0, 0, 0, 189, 0, 0, 0, 504, 299, 0, 0, 0, 185, 0, 0, 0, 469, 296, 0, 0, 0, 182, 0, 0, 0, 472, 299, 0, 0, 0, 179, 0, 0, 0, 474, 301, 0, 0, 0, 175, 0, 0, 0, 454, 272, 0, 0, 0, 172, 0, 0, 0, 457, 274, 0, 0, 0, 169, 0, 0, 0, 459, 277, 0, 0, 0, 203, 0, 0, 0, 473, 252, 0, 0, 0, 207, 0, 0, 0, 489, 223, 0, 0, 0, 240, 0, 0, 0, 529, 202, 0, 0, 0, 243, 0, 0, 0, 526, 200, 0, 0, 0, 246, 0, 0, 0, 524, 197, 0, 0, 0, 223, 0, 0, 0, 511, 221, 0, 0, 0, 220, 0, 0, 0, 514, 224, 0, 0, 0, 217, 0, 0, 0, 516, 226, 0, 0, 0, 213, 0, 0, 0, 484, 218, 0, 0, 0, 210, 0, 0, 0, 486, 221, 0, 0, 0, 165, 0, 0, 0, 454, 323, 0, 0, 0, 162, 0, 0, 0, 457, 325, 0, 0, 0, 158, 0, 0, 0, 438, 296, 0, 0, 0, 155, 0, 0, 0, 440, 299, 0, 0, 0, 152, 0, 0, 0, 443, 301, 0, 0, 0, 148, 0, 0, 0, 495, 200, 0, 0, 0, 145, 0, 0, 0, 498, 202, 0, 0, 0, 142, 0, 0, 0, 500, 205, 0, 0, 0, 138, 0, 0, 0, 427, 272, 0, 0, 0, 135, 0, 0, 0, 429, 274, 0, 0, 0, 132, 0, 0, 0, 432, 277, 0, 0, 0, 128, 0, 0, 0, 440, 249, 0, 0, 0, 125, 0, 0, 0, 442, 251, 0, 0, 0, 122, 0, 0, 0, 445, 254, 0, 0, 0, 118, 0, 0, 0, 455, 222, 0, 0, 0, 115, 0, 0, 0, 457, 225, 0, 0, 0, 112, 0, 0, 0, 460, 227, 0, 0, 0, 108, 0, 0, 0, 470, 198, 0, 0, 0, 105, 0, 0, 0, 473, 201, 0, 0, 0, 102, 0, 0, 0, 475, 203, 0, 0, 0, 249, 0, 0, 0, 452, 269, 0, 0, 0, 236, 0, 0, 0, 509, 219, 0, 0, 0, 253, 0, 0, 0, 444, 152, 0, 0, 0, 502, 0, 0, 0, 442, 150, 0, 0, 0, 498, 0, 0, 0, 426, 126, 0, 0, 0, 495, 0, 0, 0, 429, 129, 0, 0, 0, 491, 0, 0, 0, 385, 149, 0, 0, 0, 488, 0, 0, 0, 387, 151, 0, 0, 0, 535, 0, 0, 0, 319, 427, 0, 0, 0, 666, 0, 0, 0, 290, 425, 0, 0, 0, 361, 0, 0, 0, 414, 107, 0, 0, 0, 382, 0, 0, 0, 402, 128, 0, 0, 0, 385, 0, 0, 0, 399, 125, 0, 0, 0, 567, 0, 0, 0, 300, 446, 0, 0, 0, 589, 0, 0, 0, 360, 149, 0, 0, 0, 592, 0, 0, 0, 358, 147, 0, 0, 0, 406, 0, 0, 0, 386, 103, 0, 0, 0, 403, 0, 0, 0, 389, 106, 0, 0, 0, 291, 0, 0, 0, 329, 202, 0, 0, 0, 288, 0, 0, 0, 331, 204, 0, 0, 0, 564, 0, 0, 0, 302, 449, 0, 0, 0, 652, 0, 0, 0, 353, 447, 0, 0, 0, 655, 0, 0, 0, 351, 445, 0, 0, 0, 612, 0, 0, 0, 401, 175, 0, 0, 0, 609, 0, 0, 0, 403, 177, 0, 0, 0, 596, 0, 0, 0, 333, 152, 0, 0, 0, 599, 0, 0, 0, 330, 150, 0, 0, 0, 623, 0, 0, 0, 328, 447, 0, 0, 0, 620, 0, 0, 0, 330, 449, 0, 0, 0, 641, 0, 0, 0, 313, 472, 0, 0, 0, 578, 0, 0, 0, 304, 154, 0, 0, 0, 581, 0, 0, 0, 301, 151, 0, 0, 0, 679, 0, 0, 0, 343, 471, 0, 0, 0, 682, 0, 0, 0, 341, 468, 0, 0, 0, 346, 0, 0, 0, 369, 130, 0, 0, 0, 343, 0, 0, 0, 371, 132, 0, 0, 0, 627, 0, 0, 0, 315, 474, 0, 0, 0, 669, 0, 0, 0, 317, 425, 0, 0, 0, 368, 0, 0, 0, 417, 153, 0, 0, 0, 662, 0, 0, 0, 343, 422, 0, 0, 0, 672, 0, 0, 0, 287, 423, 0, 0, 0, 364, 0, 0, 0, 412, 105, 0, 0, 0, 371, 0, 0, 0, 414, 151, 0, 0, 0, 659, 0, 0, 0, 346, 425, 0, 0, 0, 585, 0, 0, 0, 357, 199, 0, 0, 0, 305, 0, 0, 0, 288, 177, 0, 0, 0, 302, 0, 0, 0, 291, 179, 0, 0, 0, 298, 0, 0, 0, 302, 201, 0, 0, 0, 295, 0, 0, 0, 305, 204, 0, 0, 0, 281, 0, 0, 0, 360, 202, 0, 0, 0, 277, 0, 0, 0, 370, 174, 0, 0, 0, 274, 0, 0, 0, 372, 177, 0, 0, 0, 675, 0, 0, 0, 325, 444, 0, 0, 0, 602, 0, 0, 0, 382, 146, 0, 0, 0, 616, 0, 0, 0, 346, 171, 0, 0, 0, 1, 8,A,1,situations/liegnitz_sit.html";
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

var swidth=5135; //width of biggest board
var sheight=5055; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=95 //no of pieces in game
var unitTotal=11; //number of types of pieces
var lastIndex=95; //index number of last piece - turn now
var gerNumber=43; //the index number of the first side B piece
var neutNumber=95; //index number of first neutral piece


var Abase = "mint/"
var Bbase = "black/"
var Apanic=33;
var Bpanic=37;
var maxTurns = 20;
var nameA="Mongols";
var nameB="Germans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "LawnGreen";
var Bcolor = "Violet";
var DcolorFlag = false;
//var DcolorFlag = false;

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

"mint/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "10", "c",
"mint/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "10", "c",
"mint/hb.jpg", "HB af:[.] mf:9 fire:1/2 vp:", "2",  "20", "f",
"mint/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "1", "l",
"mint/1l.jpg", "1L combat:+9 radius:2 mf:9 vp", "4", "1", "l",

"black/mi.jpg", "MI af:2 mf:3 vp:", "1",  "25", "n",
"black/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "10", "c",
"black/cb.jpg", "CB af::[.] mf:5 fire:2/3 vp:", "3",  "15", "f",
"black/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

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


var board1 = "boards/liegnitz_normal.jpg";
var board_setup = "boards/liegnitz_setup.jpg";
var board2 = "boards/viking.jpg";
var board3 = "boards/arbela1.jpg";
