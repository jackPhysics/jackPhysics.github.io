var situationAddress="situations/marathon_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/kadesh_sit.html" //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/chariotWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES VIKING.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Sabines_setup.jpg";
var presetupGameData = "";
var setupGameData = "";
var setupGameData=new Array();
    setupGameData[0] = "0,0,298,0,0,0,202,191,x, 0,0,302,0,0,0,199,153,x, 0,0,263,0,0,0,257,156,x, 0,0,266,0,0,0,255,154,x, 0,0,270,0,0,0,234,167,x, 0,0,273,0,0,0,231,165,x, 0,0,276,0,0,0,229,162,x, 0,0,286,0,0,0,200,221,x, 0,0,283,0,0,0,203,223,x, 0,0,280,0,0,0,205,226,x, 0,0,294,0,0,0,168,205,x, 0,0,260,0,0,0,260,159,x, 0,0,256,0,0,0,228,204,x, 0,0,253,0,0,0,231,207,x, 0,0,250,0,0,0,233,209,x, 0,0,308,0,0,0,165,239,x, 0,0,312,0,0,0,238,140,x, 0,0,315,0,0,0,235,137,x, 0,0,228,0,0,0,200,258,x, 0,0,225,0,0,0,202,261,x, 0,0,290,0,0,0,167,242,x, 0,0,236,0,0,0,197,256,x, 0,0,305,0,0,0,226,202,x, 0,0,102,0,0,0,254,256,x, 0,0,106,0,0,0,291,237,x, 0,0,110,0,0,0,314,218,x, 0,0,114,0,0,0,345,206,x, 0,0,118,0,0,0,257,289,x, 0,0,122,0,0,0,258,324,x, 0,0,126,0,0,0,254,358,x, 0,0,211,0,0,0,319,354,x, 0,0,207,0,0,0,371,257,x, 0,0,204,0,0,0,373,260,x, 0,0,196,0,0,0,347,271,x, 0,0,200,0,0,0,349,274,x, 0,0,189,0,0,0,317,321,x, 0,0,186,0,0,0,319,324,x, 0,0,182,0,0,0,316,288,x, 0,0,179,0,0,0,319,291,x, 0,0,215,0,0,0,406,239,x, 0,0,175,0,0,0,284,272,x, 0,0,172,0,0,0,286,305,x, 0,0,169,0,0,0,285,340,x, 0,0,166,0,0,0,287,371,x, 0,0,163,0,0,0,313,249,x, 0,0,160,0,0,0,345,236,x, 0,0,157,0,0,0,370,220,x, 0,0,218,0,0,0,317,352,x, 0,0,154,0,0,0,289,374,x, 0,0,150,0,0,0,288,342,x, 0,0,146,0,0,0,289,308,x, 0,0,142,0,0,0,287,275,x, 0,0,138,0,0,0,316,252,x, 0,0,134,0,0,0,347,238,x, 0,0,130,0,0,0,372,223,x, 0,0,221,0,0,0,314,286,x, 0,0,323,0,0,0,159,166,x, 0,0,1,8,A,1,situations/marathon_sit.html";
    setupGameData[1] = "";
    setupGameData[2] = "";
    setupGameData[3] = "";
    setupGameData[4] = "";
    setupGameData[5] = "";
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

var swidth=5130; //width of biggest board
var sheight=4878; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=57; //no of pieces in game
var unitTotal=33 //number of types of pieces
//***these should all be 1 less than index given by mouseOver
var lastIndex=57; //index number of last piece - turn now
var gerNumber=21; //the index number of the first side B piece
var neutNumber=57; //index number of first neutral piece

var Abase = "green/"
var Bbase = "purple/"
var Apanic=23;
var Bpanic=31;
var maxTurns = 15;
var nameA="Greeks";
var nameB="Persians";
var D1color = "red";
var D2color = "hotwhite";
var Acolor = "red";
var Bcolor = "hotwhite";
var DcolorFlag = false;

//unit sizes - 88 fits 3 to a hex, so hex=264, so if stackin=4 size = 264/4, if stacking=1 size =264 etc.
var sunit=100; //unit width/height
var sunit2=71;
var sunitB=71; //unit width/height
var sunitB2=71;

var noOfItems=5; //no of items of data for each unit type
var itemsPerUnit = noOfItems;
//address (without the jpg bit...), mouse text, number of pieces,  type, points value,

//c=cavalry, a=artillery, e=engine, n=infantry, x=neutral, l=leader

var unitsA=[
"green/ms.jpg", "MS af:3 mf:3 vp:", "2",  "22", "n",
"green/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",

"purple/mi.jpg", "MI af:2 mf:3 vp:", "1", "8", "n",
"purple/ms.jpg", "MS af:3 mf:3 vp:", "2", "4", "n",
"purple/bi.jpg", "BI af:[6] mf:5 vp:", "3", "4", "n",
"purple/bw.jpg", "BW mf:5 fire:2/2 vp:", "3",  "8", "f",
"purple/sk.jpg", "SK af:[2] mf:5 fire:2/1 vp:", "3",  "8", "f",
"purple/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",

"neut/turn1.jpg", "TURN NOW", "", "1", "x"
];

var unitNamesA=[];


var board1 = "boards/marathon2.gif";
var board_setup = "boards/marathon_setup2.gif";
var board2 = "boards/Spartan board All.png";
var board3 = "boards/spartan.jpg";

function normBoard()
{
	 document.getElementById("board").setAttribute("src", "boards/marathon2.gif");
}

function setupBoard()
{
	document.getElementById("board").setAttribute("src", "boards/marathon_setup2.gif");
}

function noHexBoard()
{
	document.getElementById("board").setAttribute("src", "boards/armagedon.jpg");
}
