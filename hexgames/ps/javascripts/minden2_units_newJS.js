var situationAddress="situations/minden_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/minden_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/d100.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/legion_minden_setup.jpg";
var presetupGameData = "0, 0, 0, 0, 1, 0, 378, 399, 0, 0, 0, 0, 0, 1, 0, 404, 407, 0, 0, 0, 0, 0, 1, 0, 401, 404, 0, 0, 0, 0, 0, 1, 0, 396, 399, 0, 0, 0, 0, 0, 1, 0, 432, 399, 0, 0, 0, 0, 0, 1, 0, 411, 391, 0, 0, 0, 0, 0, 1, 0, 408, 389, 0, 0, 0, 0, 0, 1, 0, 406, 386, 0, 0, 0, 0, 0, 1, 0, 400, 363, 0, 0, 0, 0, 0, 1, 0, 397, 360, 0, 0, 0, 0, 0, 1, 0, 380, 402, 0, 0, 0, 0, 0, 1, 0, 355, 381, 0, 0, 0, 0, 0, 1, 0, 357, 383, 0, 0, 0, 0, 0, 1, 0, 399, 402, 0, 0, 0, 0, 0, 1, 0, 433, 404, 0, 0, 0, 0, 0, 1, 0, 429, 396, 0, 0, 0, 0, 0, 1, 0, 388, 386, 0, 0, 0, 0, 0, 1, 0, 385, 384, 0, 0, 0, 0, 0, 1, 0, 383, 381, 0, 0, 0, 0, 0, 1, 0, 395, 358, 0, 0, 0, 0, 0, 1, 0, 452, 385, 0, 0, 0, 0, 0, 1, 0, 450, 382, 0, 0, 0, 0, 0, 1, 0, 442, 375, 0, 0, 0, 0, 0, 1, 0, 440, 372, 0, 0, 0, 0, 0, 1, 0, 437, 370, 0, 0, 0, 0, 0, 1, 0, 438, 358, 0, 0, 0, 0, 0, 1, 0, 434, 351, 0, 0, 0, 0, 0, 1, 0, 431, 348, 0, 0, 0, 0, 0, 1, 0, 426, 367, 0, 0, 0, 0, 0, 1, 0, 424, 364, 0, 0, 0, 0, 0, 1, 0, 447, 380, 0, 0, 0, 0, 0, 1, 0, 445, 377, 0, 0, 0, 0, 0, 1, 0, 484, 452, 0, 0, 0, 0, 0, 1, 0, 480, 444, 0, 0, 0, 0, 0, 1, 0, 478, 441, 0, 0, 0, 0, 0, 1, 0, 477, 464, 0, 0, 0, 0, 0, 1, 0, 474, 461, 0, 0, 0, 0, 0, 1, 0, 472, 459, 0, 0, 0, 0, 0, 1, 0, 489, 458, 0, 0, 0, 0, 0, 1, 0, 492, 461, 0, 0, 0, 0, 0, 1, 0, 332, 353, 0, 0, 0, 0, 0, 1, 0, 363, 352, 0, 0, 0, 0, 0, 1, 0, 388, 345, 0, 0, 0, 0, 0, 1, 0, 484, 322, 0, 0, 0, 0, 0, 1, 0, 480, 315, 0, 0, 0, 0, 0, 1, 0, 478, 313, 0, 0, 0, 0, 0, 1, 0, 481, 332, 0, 0, 0, 0, 0, 1, 0, 479, 339, 0, 0, 0, 0, 0, 1, 0, 470, 337, 0, 0, 0, 0, 0, 1, 0, 467, 334, 0, 0, 0, 0, 0, 1, 0, 482, 343, 0, 0, 0, 0, 0, 1, 0, 473, 308, 0, 0, 0, 0, 0, 1, 0, 475, 310, 0, 0, 0, 0, 0, 1, 0, 522, 243, 0, 0, 0, 0, 0, 1, 0, 533, 399, 0, 0, 0, 0, 0, 1, 0, 520, 393, 0, 0, 0, 0, 0, 1, 0, 504, 377, 0, 0, 0, 0, 0, 1, 0, 502, 330, 0, 0, 0, 0, 0, 1, 0, 507, 335, 0, 0, 0, 0, 0, 1, 0, 520, 240, 0, 0, 0, 0, 0, 1, 0, 543, 425, 0, 0, 0, 0, 0, 1, 0, 524, 416, 0, 0, 0, 0, 0, 1, 0, 526, 418, 0, 0, 0, 0, 0, 1, 0, 536, 421, 0, 0, 0, 0, 0, 1, 0, 536, 408, 0, 0, 0, 0, 0, 1, 0, 519, 385, 0, 0, 0, 0, 0, 1, 0, 502, 348, 0, 0, 0, 0, 0, 1, 0, 505, 333, 0, 0, 0, 0, 0, 1, 0, 508, 259, 0, 0, 0, 0, 0, 1, 0, 517, 238, 0, 0, 0, 0, 0, 1, 0, 529, 414, 0, 0, 0, 0, 0, 1, 0, 546, 428, 0, 0, 0, 0, 0, 1, 0, 520, 411, 0, 0, 0, 0, 0, 1, 0, 538, 425, 0, 0, 0, 0, 0, 1, 0, 556, 410, 0, 0, 0, 0, 0, 1, 0, 528, 389, 0, 0, 0, 0, 0, 1, 0, 505, 351, 0, 0, 0, 0, 0, 1, 0, 510, 261, 0, 0, 0, 0, 0, 1, 0, 513, 264, 0, 0, 0, 0, 0, 1, 0, 515, 235, 0, 0, 0, 0, 0, 1, 0, 550, 406, 0, 0, 0, 0, 0, 1, 0, 553, 407, 0, 0, 0, 0, 0, 1, 0, 501, 374, 0, 0, 0, 0, 0, 1, 0, 490, 240, 0, 0, 0, 0, 0, 1, 0, 500, 289, 0, 0, 0, 0, 0, 1, 0, 508, 309, 0, 0, 0, 0, 0, 1, 0, 485, 226, 0, 0, 0, 0, 0, 1, 0, 433, 299, 0, 0, 0, 1, 8,A,0,situations/minden_sit.html";
var setupGameData = "0, 0, 0, 0, 0, 0, 449, 505, 0, 0, 0, 0, 0, 0, 0, 353, 452, 0, 0, 0, 0, 0, 0, 0, 368, 456, 0, 0, 0, 0, 0, 0, 0, 350, 449, 0, 0, 0, 0, 0, 0, 0, 396, 470, 0, 0, 0, 0, 0, 0, 0, 371, 458, 0, 0, 0, 0, 0, 0, 0, 373, 461, 0, 0, 0, 0, 0, 0, 0, 376, 463, 0, 0, 0, 0, 0, 0, 0, 348, 447, 0, 0, 0, 0, 0, 0, 0, 345, 444, 0, 0, 0, 0, 0, 0, 0, 432, 495, 0, 0, 0, 0, 0, 0, 0, 429, 492, 0, 0, 0, 0, 0, 0, 0, 424, 487, 0, 0, 0, 0, 0, 0, 0, 403, 477, 0, 0, 0, 0, 0, 0, 0, 427, 490, 0, 0, 0, 0, 0, 0, 0, 398, 472, 0, 0, 0, 0, 0, 0, 0, 451, 508, 0, 0, 0, 0, 0, 0, 0, 456, 513, 0, 0, 0, 0, 0, 0, 0, 454, 510, 0, 0, 0, 0, 0, 0, 0, 401, 475, 0, 0, 0, 0, 0, 0, 0, 453, 448, 0, 0, 0, 0, 0, 0, 0, 428, 428, 0, 0, 0, 0, 0, 0, 0, 374, 406, 0, 0, 0, 0, 0, 0, 0, 458, 478, 0, 0, 0, 0, 0, 0, 0, 404, 417, 0, 0, 0, 0, 0, 0, 0, 348, 417, 0, 0, 0, 0, 0, 0, 0, 351, 419, 0, 0, 0, 0, 0, 0, 0, 456, 475, 0, 0, 0, 0, 0, 0, 0, 431, 435, 0, 0, 0, 0, 0, 0, 0, 455, 451, 0, 0, 0, 0, 0, 0, 0, 401, 413, 0, 0, 0, 0, 0, 0, 0, 370, 406, 0, 0, 0, 0, 0, 0, 0, 327, 466, 0, 0, 0, 0, 0, 0, 0, 320, 459, 0, 0, 0, 0, 0, 0, 0, 324, 463, 0, 0, 0, 0, 0, 0, 0, 452, 534, 0, 0, 0, 0, 0, 0, 0, 454, 537, 0, 0, 0, 0, 0, 0, 0, 457, 539, 0, 0, 0, 0, 0, 0, 0, 449, 532, 0, 0, 0, 0, 0, 0, 0, 329, 468, 0, 0, 0, 0, 0, 0, 0, 454, 474, 0, 0, 0, 0, 0, 0, 0, 374, 432, 0, 0, 0, 0, 0, 0, 0, 393, 467, 0, 0, 0, 0, 0, 0, 0, 733, 428, 0, 0, 0, 0, 0, 0, 0, 739, 429, 0, 0, 0, 0, 0, 0, 0, 525, 286, 0, 0, 0, 0, 0, 0, 0, 532, 221, 0, 0, 0, 0, 0, 0, 0, 608, 417, 0, 0, 0, 0, 0, 0, 0, 529, 341, 0, 0, 0, 0, 0, 0, 0, 580, 395, 0, 0, 0, 0, 0, 0, 0, 554, 387, 0, 0, 0, 0, 0, 0, 0, 552, 353, 0, 0, 0, 0, 0, 0, 0, 528, 314, 0, 0, 0, 0, 0, 0, 0, 556, 239, 0, 0, 0, 0, 0, 0, 0, 785, 424, 0, 0, 0, 0, 0, 0, 0, 792, 428, 0, 0, 0, 0, 0, 0, 0, 584, 337, 0, 0, 0, 0, 0, 0, 0, 500, 182, 0, 0, 0, 0, 0, 0, 0, 525, 196, 0, 0, 0, 0, 0, 0, 0, 558, 242, 0, 0, 0, 0, 0, 0, 0, 585, 400, 0, 0, 0, 0, 0, 0, 0, 770, 474, 0, 0, 0, 0, 0, 0, 0, 762, 447, 0, 0, 0, 0, 0, 0, 0, 611, 419, 0, 0, 0, 0, 0, 0, 0, 610, 383, 0, 0, 0, 0, 0, 0, 0, 767, 472, 0, 0, 0, 0, 0, 0, 0, 552, 208, 0, 0, 0, 0, 0, 0, 0, 527, 199, 0, 0, 0, 0, 0, 0, 0, 504, 210, 0, 0, 0, 0, 0, 0, 0, 548, 180, 0, 0, 0, 0, 0, 0, 0, 551, 296, 0, 0, 0, 0, 0, 0, 0, 555, 356, 0, 0, 0, 0, 0, 0, 0, 760, 445, 0, 0, 0, 0, 0, 0, 0, 557, 390, 0, 0, 0, 0, 0, 0, 0, 528, 289, 0, 0, 0, 0, 0, 0, 0, 584, 370, 0, 0, 0, 0, 0, 0, 0, 550, 206, 0, 0, 0, 0, 0, 0, 0, 502, 208, 0, 0, 0, 0, 0, 0, 0, 503, 184, 0, 0, 0, 0, 0, 0, 0, 534, 223, 0, 0, 0, 0, 0, 0, 0, 531, 343, 0, 0, 0, 0, 0, 0, 0, 530, 314, 0, 0, 0, 0, 0, 0, 0, 555, 327, 0, 0, 0, 0, 0, 0, 0, 756, 440, 0, 0, 0, 0, 0, 0, 0, 522, 194, 0, 0, 0, 0, 0, 0, 0, 578, 392, 0, 0, 0, 0, 0, 0, 0, 526, 338, 0, 0, 0, 0, 0, 0, 0, 433, 299, 0, 0, 0, 1, 8,A,0,situations/minden_sit.html";
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
var noOfPieces=88 //no of pieces in game
var unitTotal=13; //number of types of pieces
var lastIndex=88; //index number of last piece - turn now
var gerNumber=44; //the index number of the first side B piece
var neutNumber=88; //index number of first neutral piece


var Abase = "red/"
var Bbase = "green/"
var Apanic=52;
var Bpanic=37;
var nameA="Romans";
var nameB="Germans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "red";
var Bcolor = "LawnGreen";
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

"red/sd.jpg", "SD af:4 mf:4 vp:", "2", "8", "n",
"red/sd.jpg", "SD af:4 mf:4 vp:", "2", "4", "n",
"red/sd.jpg", "SD af:4 mf:4 vp:", "2", "8", "n",
"red/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "12", "f",
"red/lc.jpg", "LC af:1 mf:9 vp:", "1",  "8", "c",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 Germanicus vp", "3", "1", "l",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "2", "l",

"green/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "10", "f",
"green/bi.jpg", "BI af:[6]] mf:5 vp:", "3",  "30", "n",
"green/1l.jpg", "3L combat:+3 radius:1 mf:9 Hermann (the German) vp", "2", "1", "l",
"green/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "3", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x",
];

var unitNamesA=[];


function normBoard()
{
	 document.getElementById("board").setAttribute("src", "boards/legion_minden_size8.jpg");
}

function setupBoard()
{
	document.getElementById("board").setAttribute("src", "boards/legion_minden_setup.jpg");
}

function noHexBoard()
{
	document.getElementById("board").setAttribute("src", "boards/raphia_size8.jpg");
}
