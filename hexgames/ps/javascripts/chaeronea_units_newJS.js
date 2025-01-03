var situationAddress="situations/chaeronea_sit.html";
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
var boardAddress = "boards/chaeronea setup.png";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,231,0,0,0,354,568,x, 0,0,234,0,0,0,351,566,x, 0,0,237,0,0,0,349,563,x, 0,0,240,0,0,0,346,561,x, 0,0,264,0,0,0,525,655,x, 0,0,267,0,0,0,522,652,x, 0,0,270,0,0,0,520,650,x, 0,0,273,0,0,0,517,647,x, 0,0,277,0,0,0,552,662,x, 0,0,280,0,0,0,549,659,x, 0,0,283,0,0,0,547,657,x, 0,0,286,0,0,0,544,654,x, 0,0,290,0,0,0,532,690,x, 0,0,293,0,0,0,530,688,x, 0,0,296,0,0,0,527,685,x, 0,0,299,0,0,0,525,683,x, 0,0,303,0,0,0,505,633,x, 0,0,306,0,0,0,503,631,x, 0,0,309,0,0,0,500,628,x, 0,0,312,0,0,0,498,626,x, 0,0,244,0,0,0,382,568,x, 0,0,247,0,0,0,379,566,x, 0,0,250,0,0,0,377,563,x, 0,0,253,0,0,0,374,561,x, 0,0,257,0,0,0,405,571,x, 0,0,260,0,0,0,402,569,x, 0,0,316,0,0,0,310,589,x, 0,0,319,0,0,0,307,587,x, 0,0,323,0,0,0,334,576,x, 0,0,326,0,0,0,331,573,x, 0,0,340,0,0,0,442,582,x, 0,0,337,0,0,0,445,585,x, 0,0,333,0,0,0,468,601,x, 0,0,330,0,0,0,471,604,x, 0,0,344,0,0,0,294,576,x, 0,0,348,0,0,0,274,593,x, 0,0,101,0,0,0,516,454,x, 0,0,104,0,0,0,513,452,x, 0,0,107,0,0,0,510,450,x, 0,0,110,0,0,0,508,447,x, 0,0,114,0,0,0,545,443,x, 0,0,117,0,0,0,543,441,x, 0,0,120,0,0,0,540,438,x, 0,0,124,0,0,0,569,467,x, 0,0,127,0,0,0,566,465,x, 0,0,130,0,0,0,564,462,x, 0,0,134,0,0,0,581,450,x, 0,0,137,0,0,0,579,447,x, 0,0,140,0,0,0,576,445,x, 0,0,144,0,0,0,559,427,x, 0,0,147,0,0,0,557,424,x, 0,0,150,0,0,0,554,422,x, 0,0,154,0,0,0,590,435,x, 0,0,157,0,0,0,587,433,x, 0,0,160,0,0,0,585,430,x, 0,0,164,0,0,0,612,509,x, 0,0,168,0,0,0,618,510,x, 0,0,171,0,0,0,610,506,x, 0,0,175,0,0,0,634,493,x, 0,0,178,0,0,0,632,491,x, 0,0,181,0,0,0,629,488,x, 0,0,185,0,0,0,627,546,x, 0,0,188,0,0,0,624,544,x, 0,0,191,0,0,0,622,541,x, 0,0,195,0,0,0,645,543,x, 0,0,198,0,0,0,642,540,x, 0,0,201,0,0,0,640,538,x, 0,0,205,0,0,0,609,571,x, 0,0,208,0,0,0,606,568,x, 0,0,212,0,0,0,634,574,x, 0,0,215,0,0,0,631,572,x, 0,0,219,0,0,0,497,487,x, 0,0,223,0,0,0,481,505,x, 0,0,227,0,0,0,270,610,x, 0,0,1,8,A,1,situations/chaeronea_sit.html";
    setupGameData[1] = "0,0,454,0,0,0,428,598,x, 0,0,451,0,0,0,431,601,x, 0,0,444,0,0,0,500,692,x, 0,0,441,0,0,0,503,694,x, 0,0,405,0,0,0,475,647,x, 0,0,402,0,0,0,477,649,x, 0,0,399,0,0,0,481,651,x, 0,0,396,0,0,0,483,653,x, 0,0,417,0,0,0,449,602,x, 0,0,414,0,0,0,451,604,x, 0,0,411,0,0,0,454,607,x, 0,0,408,0,0,0,456,610,x, 0,0,434,0,0,0,490,668,x, 0,0,431,0,0,0,493,670,x, 0,0,424,0,0,0,495,673,x, 0,0,421,0,0,0,498,675,x, 0,0,393,0,0,0,463,623,x, 0,0,390,0,0,0,467,626,x, 0,0,387,0,0,0,469,628,x, 0,0,384,0,0,0,471,630,x, 0,0,457,0,0,0,426,596,x, 0,0,438,0,0,0,505,697,x, 0,0,360,0,0,0,493,716,x, 0,0,357,0,0,0,498,718,x, 0,0,354,0,0,0,517,716,x, 0,0,351,0,0,0,519,721,x, 0,0,372,0,0,0,503,736,x, 0,0,369,0,0,0,505,738,x, 0,0,366,0,0,0,507,741,x, 0,0,363,0,0,0,509,743,x, 0,0,447,0,0,0,498,689,x, 0,0,460,0,0,0,423,593,x, 0,0,378,0,0,0,515,714,x, 0,0,381,0,0,0,490,713,x, 0,0,375,0,0,0,500,733,x, 0,0,463,0,0,0,460,621,x, 0,0,551,0,0,0,517,536,x, 0,0,548,0,0,0,522,539,x, 0,0,545,0,0,0,530,558,x, 0,0,542,0,0,0,533,561,x, 0,0,587,0,0,0,506,515,x, 0,0,584,0,0,0,511,518,x, 0,0,581,0,0,0,533,512,x, 0,0,560,0,0,0,561,561,x, 0,0,557,0,0,0,568,580,x, 0,0,554,0,0,0,573,582,x, 0,0,569,0,0,0,544,538,x, 0,0,566,0,0,0,548,539,x, 0,0,563,0,0,0,556,559,x, 0,0,596,0,0,0,522,493,x, 0,0,593,0,0,0,544,490,x, 0,0,590,0,0,0,546,493,x, 0,0,578,0,0,0,535,514,x, 0,0,575,0,0,0,556,514,x, 0,0,572,0,0,0,562,516,x, 0,0,530,0,0,0,586,516,x, 0,0,509,0,0,0,572,491,x, 0,0,506,0,0,0,575,493,x, 0,0,539,0,0,0,599,536,x, 0,0,536,0,0,0,601,539,x, 0,0,533,0,0,0,584,514,x, 0,0,492,0,0,0,523,580,x, 0,0,488,0,0,0,547,584,x, 0,0,485,0,0,0,549,586,x, 0,0,502,0,0,0,506,558,x, 0,0,499,0,0,0,509,560,x, 0,0,495,0,0,0,521,577,x, 0,0,517,0,0,0,577,538,x, 0,0,520,0,0,0,575,536,x, 0,0,524,0,0,0,583,558,x, 0,0,527,0,0,0,585,564,x, 0,0,599,0,0,0,528,556,x, 0,0,602,0,0,0,581,511,x, 0,0,467,0,0,0,392,716,x, 0,0,1,8,B,1,situations/chaeronea_sit.html";
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
var noOfPieces=74; //no of pieces in game
var unitTotal=20; //number of types of pieces
var lastIndex=74; //index number of last piece - turn now
var gerNumber=37; //the index number of the first side B piece
var neutNumber=74; //index number of first neutral piece


var Abase = "mint/"
var Bbase = "grey/"
var Apanic=37;
var Bpanic=23;
var maxTurns = 12;
var nameA="Macedonians";
var nameB="Greeks";
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

"mint/ms.jpg", "MS af:3 mf:3 vp:", "2",  "4", "n",
"mint/pp.jpg", "PP af:6 mf:4 vp:", "3", "16", "n",
"mint/lt.jpg", "LT af:[4] mf:5 vp:", "2",  "4", "n",
"mint/bi.jpg", "BI af:[6] mf:5 vp:", "3", "2", "n",
"mint/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "2", "c",
"mint/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "2", "c",
"mint/bw.jpg", "BW df:(1) mf:5 fire:2/2 vp:", "3",  "2", "f",
"mint/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "2", "f",
"mint/2l.jpg", "Alexander 2L combat:+6 radius:2 mf:9 vp:", "3", "1", "l",
"mint/1l.jpg", "Philip 1L combat:+9 radius:2 mf:9 vp:", "4", "1", "l",

"grey/ps.jpg", "PS af:4 mf:3 vp:", "2", "4", "n",
"grey/ms.jpg", "MS af:3 mf:3 vp:", "2",  "15", "n",
"grey/lt.jpg", "LT af:[4] mf:5 vp:", "2",  "6", "n",
"grey/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "6", "f",
"grey/lc.jpg", "LC af:1 mf:9 vp:", "1",  "2", "c",
"grey/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "2", "c",
"grey/2l.jpg", "2L combat:+6 radius:2 mf:9 vp:", "3", "1", "l",
"grey/3l.jpg", "3L combat:+3 radius:1 mf:9 vp:", "2", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x",
];

var unitNamesA=[];


var board1 = "boards/chaeronea.png";
var board_setup = "boards/chaeronea setup.png";
var board2 = "boards/Spartan board All.png";
var board3 = "boards/spartan.jpg";

function normBoard()
{
	 document.getElementById("board").setAttribute("src", "boards/chaeronea.png");
}

function setupBoard()
{
	document.getElementById("board").setAttribute("src", "boards/chaeronea setup.png");
}

function noHexBoard()
{
	document.getElementById("board").setAttribute("src", "boards/Spartan board All.png");
}
