var situationAddress="situations/granicus_sit.html";
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
var boardAddress = "boards/granicus setup.png";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,244,0,0,0,485,331,x, 0,0,241,0,0,0,488,334,x, 0,0,238,0,0,0,490,336,x, 0,0,235,0,0,0,493,339,x, 0,0,228,0,0,0,493,307,x, 0,0,225,0,0,0,495,310,x, 0,0,222,0,0,0,498,312,x, 0,0,219,0,0,0,500,315,x, 0,0,216,0,0,0,506,273,x, 0,0,213,0,0,0,508,275,x, 0,0,209,0,0,0,510,281,x, 0,0,206,0,0,0,513,283,x, 0,0,203,0,0,0,561,232,x, 0,0,200,0,0,0,563,235,x, 0,0,197,0,0,0,566,237,x, 0,0,194,0,0,0,568,240,x, 0,0,191,0,0,0,589,216,x, 0,0,188,0,0,0,591,219,x, 0,0,185,0,0,0,594,221,x, 0,0,182,0,0,0,596,224,x, 0,0,179,0,0,0,621,211,x, 0,0,176,0,0,0,623,213,x, 0,0,173,0,0,0,626,216,x, 0,0,170,0,0,0,628,218,x, 0,0,167,0,0,0,651,203,x, 0,0,164,0,0,0,654,206,x, 0,0,161,0,0,0,656,208,x, 0,0,158,0,0,0,659,211,x, 0,0,155,0,0,0,699,202,x, 0,0,152,0,0,0,702,205,x, 0,0,149,0,0,0,704,207,x, 0,0,146,0,0,0,708,210,x, 0,0,139,0,0,0,446,473,x, 0,0,136,0,0,0,449,476,x, 0,0,133,0,0,0,468,471,x, 0,0,130,0,0,0,472,477,x, 0,0,118,0,0,0,494,468,x, 0,0,121,0,0,0,489,465,x, 0,0,124,0,0,0,487,461,x, 0,0,127,0,0,0,484,457,x, 0,0,247,0,0,0,486,364,x, 0,0,250,0,0,0,484,362,x, 0,0,262,0,0,0,478,384,x, 0,0,259,0,0,0,480,387,x, 0,0,256,0,0,0,483,389,x, 0,0,253,0,0,0,485,392,x, 0,0,271,0,0,0,467,431,x, 0,0,268,0,0,0,481,411,x, 0,0,265,0,0,0,487,432,x, 0,0,353,0,0,0,342,200,x, 0,0,347,0,0,0,334,209,x, 0,0,350,0,0,0,338,203,x, 0,0,356,0,0,0,344,195,x, 0,0,359,0,0,0,332,232,x, 0,0,362,0,0,0,337,229,x, 0,0,365,0,0,0,340,225,x, 0,0,368,0,0,0,344,222,x, 0,0,371,0,0,0,323,259,x, 0,0,374,0,0,0,328,256,x, 0,0,377,0,0,0,334,253,x, 0,0,380,0,0,0,341,251,x, 0,0,383,0,0,0,321,278,x, 0,0,386,0,0,0,326,277,x, 0,0,389,0,0,0,331,274,x, 0,0,392,0,0,0,336,270,x, 0,0,398,0,0,0,354,42,x, 0,0,401,0,0,0,349,37,x, 0,0,404,0,0,0,345,32,x, 0,0,407,0,0,0,339,28,x, 0,0,419,0,0,0,136,309,x, 0,0,416,0,0,0,142,315,x, 0,0,413,0,0,0,146,317,x, 0,0,410,0,0,0,150,322,x, 0,0,340,0,0,0,161,365,x, 0,0,337,0,0,0,165,366,x, 0,0,334,0,0,0,330,42,x, 0,0,331,0,0,0,334,48,x, 0,0,328,0,0,0,335,52,x, 0,0,325,0,0,0,339,55,x, 0,0,99,0,0,0,335,155,x, 0,0,458,0,0,0,325,152,x, 0,0,455,0,0,0,330,152,x, 0,0,446,0,0,0,335,171,x, 0,0,452,0,0,0,325,167,x, 0,0,449,0,0,0,331,169,x, 0,0,443,0,0,0,325,119,x, 0,0,440,0,0,0,328,123,x, 0,0,437,0,0,0,335,125,x, 0,0,434,0,0,0,337,129,x, 0,0,431,0,0,0,303,283,x, 0,0,428,0,0,0,305,289,x, 0,0,425,0,0,0,309,294,x, 0,0,422,0,0,0,313,302,x, 0,0,322,0,0,0,303,45,x, 0,0,319,0,0,0,309,49,x, 0,0,316,0,0,0,312,53,x, 0,0,313,0,0,0,315,54,x, 0,0,310,0,0,0,318,58,x, 0,0,307,0,0,0,323,65,x, 0,0,304,0,0,0,160,340,x, 0,0,301,0,0,0,166,342,x, 0,0,298,0,0,0,171,344,x, 0,0,295,0,0,0,176,347,x, 0,0,292,0,0,0,180,352,x, 0,0,344,0,0,0,178,326,x, 0,0,286,0,0,0,181,330,x, 0,0,283,0,0,0,187,334,x, 0,0,277,0,0,0,154,188,x, 0,0,280,0,0,0,148,223,x, 0,0,274,0,0,0,660,394,x, 0,0,1,8,A,1,situations/granicus_sit.html";
    setupGameData[1] = "0,0,754,0,0,0,509,393,x, 0,0,757,0,0,0,507,390,x, 0,0,760,0,0,0,504,388,x, 0,0,763,0,0,0,502,385,x, 0,0,742,0,0,0,522,371,x, 0,0,745,0,0,0,520,369,x, 0,0,748,0,0,0,517,366,x, 0,0,751,0,0,0,515,364,x, 0,0,730,0,0,0,533,349,x, 0,0,733,0,0,0,531,347,x, 0,0,736,0,0,0,528,344,x, 0,0,739,0,0,0,526,342,x, 0,0,668,0,0,0,585,256,x, 0,0,671,0,0,0,582,254,x, 0,0,674,0,0,0,580,251,x, 0,0,687,0,0,0,605,250,x, 0,0,665,0,0,0,587,259,x, 0,0,678,0,0,0,612,257,x, 0,0,681,0,0,0,610,255,x, 0,0,684,0,0,0,607,252,x, 0,0,694,0,0,0,637,259,x, 0,0,697,0,0,0,634,257,x, 0,0,700,0,0,0,632,254,x, 0,0,703,0,0,0,629,252,x, 0,0,715,0,0,0,624,283,x, 0,0,718,0,0,0,622,280,x, 0,0,721,0,0,0,619,278,x, 0,0,724,0,0,0,617,275,x, 0,0,706,0,0,0,663,259,x, 0,0,709,0,0,0,660,256,x, 0,0,712,0,0,0,658,254,x, 0,0,727,0,0,0,655,251,x, 0,0,804,0,0,0,529,436,x, 0,0,807,0,0,0,526,433,x, 0,0,798,0,0,0,534,441,x, 0,0,801,0,0,0,531,438,x, 0,0,795,0,0,0,512,409,x, 0,0,792,0,0,0,515,412,x, 0,0,789,0,0,0,517,414,x, 0,0,786,0,0,0,520,417,x, 0,0,783,0,0,0,541,321,x, 0,0,780,0,0,0,543,324,x, 0,0,767,0,0,0,557,306,x, 0,0,770,0,0,0,554,303,x, 0,0,773,0,0,0,552,301,x, 0,0,776,0,0,0,549,298,x, 0,0,822,0,0,0,517,414,x, 0,0,831,0,0,0,529,347,x, 0,0,828,0,0,0,604,256,x, 0,0,572,0,0,0,255,185,x, 0,0,557,0,0,0,260,236,x, 0,0,569,0,0,0,258,189,x, 0,0,563,0,0,0,249,260,x, 0,0,560,0,0,0,257,232,x, 0,0,548,0,0,0,258,279,x, 0,0,566,0,0,0,246,257,x, 0,0,533,0,0,0,261,281,x, 0,0,521,0,0,0,273,214,x, 0,0,509,0,0,0,287,145,x, 0,0,467,0,0,0,288,189,x, 0,0,461,0,0,0,297,168,x, 0,0,524,0,0,0,272,208,x, 0,0,518,0,0,0,298,216,x, 0,0,515,0,0,0,294,211,x, 0,0,512,0,0,0,285,147,x, 0,0,656,0,0,0,245,76,x, 0,0,653,0,0,0,248,79,x, 0,0,650,0,0,0,243,120,x, 0,0,647,0,0,0,247,123,x, 0,0,602,0,0,0,204,279,x, 0,0,611,0,0,0,231,282,x, 0,0,614,0,0,0,228,279,x, 0,0,590,0,0,0,205,281,x, 0,0,596,0,0,0,220,302,x, 0,0,599,0,0,0,217,305,x, 0,0,629,0,0,0,258,143,x, 0,0,620,0,0,0,273,123,x, 0,0,623,0,0,0,269,120,x, 0,0,626,0,0,0,261,147,x, 0,0,479,0,0,0,272,256,x, 0,0,491,0,0,0,272,301,x, 0,0,473,0,0,0,286,280,x, 0,0,482,0,0,0,269,254,x, 0,0,488,0,0,0,281,235,x, 0,0,476,0,0,0,282,280,x, 0,0,485,0,0,0,284,235,x, 0,0,506,0,0,0,296,120,x, 0,0,527,0,0,0,274,167,x, 0,0,530,0,0,0,270,163,x, 0,0,494,0,0,0,267,304,x, 0,0,497,0,0,0,294,165,x, 0,0,500,0,0,0,283,187,x, 0,0,503,0,0,0,298,123,x, 0,0,632,0,0,0,271,77,x, 0,0,635,0,0,0,267,73,x, 0,0,638,0,0,0,283,98,x, 0,0,641,0,0,0,262,101,x, 0,0,644,0,0,0,259,99,x, 0,0,617,0,0,0,285,101,x, 0,0,575,0,0,0,234,326,x, 0,0,587,0,0,0,210,324,x, 0,0,593,0,0,0,206,323,x, 0,0,605,0,0,0,196,305,x, 0,0,608,0,0,0,192,301,x, 0,0,578,0,0,0,231,324,x, 0,0,581,0,0,0,246,305,x, 0,0,584,0,0,0,243,302,x, 0,0,659,0,0,0,266,258,x, 0,0,662,0,0,0,269,170,x, 0,0,274,0,0,0,660,394,x, 0,0,1,8,A,1,situations/granicus_sit.html";
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
var swidth=2051*3;//6780; //width of biggest board
var sheight=1467*3;//3605; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=110; //no of pieces in game
var unitTotal=23; //number of types of pieces
var lastIndex=110; //index number of last piece - turn now
var gerNumber=50; //the index number of the first side B piece
var neutNumber=110; //index number of first neutral piece


var Abase = "mint/"
var Bbase = "purple/"
var Apanic=46;
var Bpanic=37;
var maxTurns = 25;
var nameA="Macedonians";
var nameB="Persians";
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

"mint/ms.jpg", "MS af:3 mf:3 vp:", "2",  "8", "n",
"mint/ps.jpg", "PS af:4 mf:3 vp:", "2", "4", "n",
"mint/pp.jpg", "PP af:6 mf:4 vp:", "3", "16", "n",
"mint/lt.jpg", "LT af:[4] mf:5 vp:", "2",  "4", "n",
"mint/lc.jpg", "LC af:1 mf:9 vp:", "1",  "2", "c",
"mint/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "2", "c",
"mint/hc.jpg", "HC af:[4] mf:7 vp:", "2",  "4", "c",
"mint/bw.jpg", "BW df:(1) mf:5 fire:2/2 vp:", "3",  "2", "f",
"mint/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "4", "f",
"mint/3l.jpg", "3L combat:+3 radius:1 mf:9 vp:", "2", "1", "l",
"mint/2l.jpg", "2L combat:+6 radius:2 mf:9 vp:", "3", "1", "l",
"mint/1l.jpg", "Alexander 1L combat:+9 radius:2 mf:9 vp:", "4", "1", "l",

"purple/ps.jpg", "PS af:4 mf:3 vp:", "2", "8", "n",
"purple/lt.jpg", "LT af:[4] mf:5 vp:", "2",  "8", "n",
"purple/lc.jpg", "LC af:1 mf:9 vp:", "1",  "8", "c",
"purple/mc.jpg", "MC af:[3] mf:9 vp:", "2",  "6", "c",
"purple/bw.jpg", "BW df:(1) mf:5 fire:2/2 vp:", "3",  "7", "f",
"purple/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "7", "f",
"purple/oc.jpg", "OC af:2 mf:9 fire:1/1 vp:", "2", "14", "f",
"purple/2l.jpg", "2L combat:+6 radius:2 mf:9 vp:", "3", "1", "l",
"purple/3l.jpg", "3L combat:+3 radius:1 mf:9 vp:", "2", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x",
];

var unitNamesA=[];


var board1 = "boards/granicus.png";
var board_setup = "boards/granicus setup.png";
var board2 = "boards/Spartan board All.png";
var board3 = "boards/spartan.jpg";

function normBoard()
{
	 document.getElementById("board").setAttribute("src", "boards/granicus.png");
}

function setupBoard()
{
	document.getElementById("board").setAttribute("src", "boards/granicus setup.png");
}

function noHexBoard()
{
	document.getElementById("board").setAttribute("src", "boards/Spartan board All.png");
}
