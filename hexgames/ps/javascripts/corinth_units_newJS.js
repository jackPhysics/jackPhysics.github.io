var situationAddress="situations/corinth_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/corinth_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/d100.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/corinth setup.png";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,270,0,0,0,759,321,x, 0,0,267,0,0,0,764,324,x, 0,0,264,0,0,0,767,329,x, 0,0,261,0,0,0,771,332,x, 0,0,258,0,0,0,669,323,x, 0,0,255,0,0,0,673,329,x, 0,0,252,0,0,0,675,334,x, 0,0,249,0,0,0,679,336,x, 0,0,246,0,0,0,827,513,x, 0,0,243,0,0,0,820,508,x, 0,0,240,0,0,0,817,504,x, 0,0,237,0,0,0,812,500,x, 0,0,234,0,0,0,789,538,x, 0,0,231,0,0,0,784,534,x, 0,0,228,0,0,0,778,531,x, 0,0,225,0,0,0,775,526,x, 0,0,222,0,0,0,714,540,x, 0,0,219,0,0,0,709,534,x, 0,0,216,0,0,0,705,529,x, 0,0,213,0,0,0,702,525,x, 0,0,210,0,0,0,635,377,x, 0,0,207,0,0,0,631,372,x, 0,0,204,0,0,0,629,367,x, 0,0,201,0,0,0,624,363,x, 0,0,198,0,0,0,624,427,x, 0,0,195,0,0,0,619,420,x, 0,0,192,0,0,0,616,415,x, 0,0,189,0,0,0,631,492,x, 0,0,186,0,0,0,627,488,x, 0,0,183,0,0,0,623,483,x, 0,0,180,0,0,0,619,480,x, 0,0,177,0,0,0,593,456,x, 0,0,174,0,0,0,586,440,x, 0,0,168,0,0,0,456,485,x, 0,0,165,0,0,0,451,478,x, 0,0,162,0,0,0,445,472,x, 0,0,159,0,0,0,481,545,x, 0,0,156,0,0,0,475,540,x, 0,0,153,0,0,0,472,533,x, 0,0,150,0,0,0,469,635,x, 0,0,147,0,0,0,461,630,x, 0,0,144,0,0,0,457,627,x, 0,0,141,0,0,0,482,609,x, 0,0,138,0,0,0,477,604,x, 0,0,135,0,0,0,473,599,x, 0,0,132,0,0,0,276,443,x, 0,0,129,0,0,0,281,446,x, 0,0,126,0,0,0,286,451,x, 0,0,104,0,0,0,262,465,x, 0,0,101,0,0,0,264,468,x, 0,0,123,0,0,0,256,460,x, 0,0,117,0,0,0,314,440,x, 0,0,110,0,0,0,318,422,x, 0,0,107,0,0,0,337,432,x, 0,0,120,0,0,0,337,411,x, 0,0,171,0,0,0,210,550,x, 0,0,1,8,B,0,situations/corinth_sit.html";
    setupGameData[1] = "0,0,428,0,0,0,818,429,x, 0,0,431,0,0,0,815,426,x, 0,0,435,0,0,0,806,449,x, 0,0,438,0,0,0,803,447,x, 0,0,456,0,0,0,741,426,x, 0,0,459,0,0,0,738,423,x, 0,0,463,0,0,0,715,378,x, 0,0,470,0,0,0,713,375,x, 0,0,396,0,0,0,717,428,x, 0,0,399,0,0,0,715,425,x, 0,0,403,0,0,0,704,405,x, 0,0,406,0,0,0,702,403,x, 0,0,371,0,0,0,751,495,x, 0,0,375,0,0,0,740,474,x, 0,0,378,0,0,0,738,472,x, 0,0,389,0,0,0,780,495,x, 0,0,368,0,0,0,754,497,x, 0,0,382,0,0,0,727,448,x, 0,0,385,0,0,0,725,446,x, 0,0,392,0,0,0,778,493,x, 0,0,409,0,0,0,690,382,x, 0,0,412,0,0,0,688,379,x, 0,0,416,0,0,0,705,358,x, 0,0,467,0,0,0,703,355,x, 0,0,441,0,0,0,779,450,x, 0,0,444,0,0,0,775,445,x, 0,0,447,0,0,0,767,426,x, 0,0,422,0,0,0,765,470,x, 0,0,425,0,0,0,760,467,x, 0,0,450,0,0,0,754,450,x, 0,0,453,0,0,0,752,448,x, 0,0,477,0,0,0,777,449,x, 0,0,474,0,0,0,712,384,x, 0,0,282,0,0,0,429,519,x, 0,0,285,0,0,0,426,517,x, 0,0,288,0,0,0,424,514,x, 0,0,273,0,0,0,441,543,x, 0,0,276,0,0,0,439,540,x, 0,0,279,0,0,0,436,534,x, 0,0,313,0,0,0,445,586,x, 0,0,319,0,0,0,442,583,x, 0,0,322,0,0,0,440,581,x, 0,0,298,0,0,0,454,567,x, 0,0,301,0,0,0,452,564,x, 0,0,304,0,0,0,449,562,x, 0,0,328,0,0,0,413,493,x, 0,0,331,0,0,0,411,491,x, 0,0,325,0,0,0,416,496,x, 0,0,349,0,0,0,402,514,x, 0,0,346,0,0,0,405,516,x, 0,0,352,0,0,0,400,511,x, 0,0,361,0,0,0,414,538,x, 0,0,355,0,0,0,429,564,x, 0,0,358,0,0,0,424,556,x, 0,0,343,0,0,0,439,537,x, 0,0,364,0,0,0,348,560,x, 0,0,1,8,A,1,situations/corinth_sit.html";
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

var multiThisNow = 0.75;
var swidth=3036*3;//6780; //width of biggest board
var sheight=2400*3;//3605; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=56 //no of pieces in game
var unitTotal=13; //number of types of pieces
var lastIndex=34; //index number of last piece - turn now
var gerNumber=37; //the index number of the first side B piece
var neutNumber=56; //index number of first neutral piece


var Abase = "pink/"
var Bbase = "yellow/"
var Apanic=26;
var Bpanic=30;
var maxTurns = 20;
var nameA="Confederacy";
var nameB="Spartans";
var D1color = "red";
var D2color = "hotpink";
var Acolor = "LawnGreen";
var Bcolor = "Violet";
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

var unitsA=[

"pink/ms.jpg", "MS af:3 mf:3 vp:", "2",  "24", "n",
"pink/lc.jpg", "LC af:1 mf:9 vp:", "1",  "3", "c",
"pink/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",
"pink/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",
"pink/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "1", "l",

"yellow/pp.jpg", "PP af:6 mf:4 vp:", "3", "6", "n",
"yellow/ms.jpg", "MS af:3 mf:3 vp:", "2",  "12", "n",
"yellow/lc.jpg", "LC af:1 mf:9 vp:", "1",  "1", "c",
"yellow/bw.jpg", "BW df:(1) mf:5 fire:2/2 vp:", "3",  "1", "f",
"yellow/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "1", "f",
"yellow/1l.jpg", "1L combat:+9 radius:2 mf:9 vp", "4", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x",
];

var unitNamesA=[];


var board1 = "boards/corinth.png";
var board_setup = "boards/corinth setup.png";
var board2 = "boards/Spartan board All.png";
var board3 = "boards/spartan.jpg";

function normBoard()
{
	 document.getElementById("board").setAttribute("src", "boards/corinth.png");
}

function setupBoard()
{
	document.getElementById("board").setAttribute("src", "boards/corinth setup.png");
}

function noHexBoard()
{
	document.getElementById("board").setAttribute("src", "boards/Spartan board All.png");
}
