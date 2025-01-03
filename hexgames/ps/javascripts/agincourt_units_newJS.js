var situationAddress="situations/agincourt_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags McA edit.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/agincourt_sit.html"; //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/yeomanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/Agincourt_setup.jpg";
var presetupGameData = "";
var setupGameData = "0,0,235,0,0,0,321,174,x, 0,0,251,0,0,0,302,249,x, 0,0,254,0,0,0,323,229,x, 0,0,261,0,0,0,326,236,x, 0,0,294,0,0,0,275,256,x, 0,0,297,0,0,0,281,260,x, 0,0,291,0,0,0,256,248,x, 0,0,279,0,0,0,301,273,x, 0,0,276,0,0,0,297,270,x, 0,0,270,0,0,0,323,256,x, 0,0,241,0,0,0,327,203,x, 0,0,238,0,0,0,324,178,x, 0,0,244,0,0,0,322,207,x, 0,0,248,0,0,0,299,244,x, 0,0,282,0,0,0,347,214,x, 0,0,288,0,0,0,250,244,x, 0,0,285,0,0,0,350,219,x, 0,0,273,0,0,0,327,261,x, 0,0,267,0,0,0,352,195,x, 0,0,264,0,0,0,349,189,x, 0,0,159,0,0,0,252,189,x, 0,0,163,0,0,0,255,198,x, 0,0,177,0,0,0,274,207,x, 0,0,203,0,0,0,299,164,PS, 0,0,209,0,0,0,255,222,PS, 0,0,212,0,0,0,297,189,PS, 0,0,215,0,0,0,302,194,PS, 0,0,206,0,0,0,303,167,PS, 0,0,200,0,0,0,278,175,PS, 0,0,220,0,0,0,277,233,PS, 0,0,183,0,0,0,299,216,x, 0,0,223,0,0,0,273,229,PS, 0,0,187,0,0,0,303,221,x, 0,0,180,0,0,0,277,202,x, 0,0,173,0,0,0,252,218,x, 0,0,167,0,0,0,275,180,x, 0,0,229,0,0,0,273,203,x, 0,0,232,0,0,0,300,191,x, 0,0,143,0,0,0,80,90,PS, 0,0,146,0,0,0,85,118,PS, 0,0,149,0,0,0,60,83,PS, 0,0,110,0,0,0,108,83,x, 0,0,113,0,0,0,87,97,x, 0,0,116,0,0,0,86,123,x, 0,0,119,0,0,0,86,150,x, 0,0,122,0,0,0,83,154,x, 0,0,125,0,0,0,107,80,x, 0,0,128,0,0,0,83,94,x, 0,0,131,0,0,0,81,121,x, 0,0,134,0,0,0,80,151,x, 0,0,137,0,0,0,104,84,x, 0,0,155,0,0,0,81,125,x, 0,0,300,0,0,0,372,258,x, 0,0,1,8,B,0,situations/agincourt_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0,0,235,0,0,0,321,174,x, 0,0,251,0,0,0,302,249,x, 0,0,254,0,0,0,323,229,x, 0,0,261,0,0,0,326,236,x, 0,0,294,0,0,0,275,256,x, 0,0,297,0,0,0,281,260,x, 0,0,291,0,0,0,256,248,x, 0,0,279,0,0,0,301,273,x, 0,0,276,0,0,0,297,270,x, 0,0,270,0,0,0,323,256,x, 0,0,241,0,0,0,327,203,x, 0,0,238,0,0,0,324,178,x, 0,0,244,0,0,0,322,207,x, 0,0,248,0,0,0,299,244,x, 0,0,282,0,0,0,347,214,x, 0,0,288,0,0,0,250,244,x, 0,0,285,0,0,0,350,219,x, 0,0,273,0,0,0,327,261,x, 0,0,267,0,0,0,352,195,x, 0,0,264,0,0,0,349,189,x, 0,0,159,0,0,0,252,189,x, 0,0,163,0,0,0,255,198,x, 0,0,177,0,0,0,274,207,x, 0,0,203,0,0,0,299,164,PS, 0,0,209,0,0,0,255,222,PS, 0,0,212,0,0,0,297,189,PS, 0,0,215,0,0,0,302,194,PS, 0,0,206,0,0,0,303,167,PS, 0,0,200,0,0,0,278,175,PS, 0,0,220,0,0,0,277,233,PS, 0,0,183,0,0,0,299,216,x, 0,0,223,0,0,0,273,229,PS, 0,0,187,0,0,0,303,221,x, 0,0,180,0,0,0,277,202,x, 0,0,173,0,0,0,252,218,x, 0,0,167,0,0,0,275,180,x, 0,0,229,0,0,0,273,203,x, 0,0,232,0,0,0,300,191,x, 0,0,143,0,0,0,80,90,PS, 0,0,146,0,0,0,85,118,PS, 0,0,149,0,0,0,60,83,PS, 0,0,110,0,0,0,108,83,x, 0,0,113,0,0,0,87,97,x, 0,0,116,0,0,0,86,123,x, 0,0,119,0,0,0,86,150,x, 0,0,122,0,0,0,83,154,x, 0,0,125,0,0,0,107,80,x, 0,0,128,0,0,0,83,94,x, 0,0,131,0,0,0,81,121,x, 0,0,134,0,0,0,80,151,x, 0,0,137,0,0,0,104,84,x, 0,0,155,0,0,0,81,125,x, 0,0,300,0,0,0,372,258,x, 0,0,1,8,B,0,situations/agincourt_sit.html";
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

var multiThisNow = 0.75;
var swidth=3780; //width of biggest board
var sheight=3642; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

var Abase = "navy/";//IMPORTANT THESE ARE THE SAME AS START OF UNIT SRC
var Bbase = "cream/";
var Apanic=34;
var Bpanic=24;
var maxTurns = 15;
var nameA="French";
var nameB="English";
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

//THESE ARE ALL DUMMY VALUES - TRUE VALUES WILL BE CALCULATED BELOW...
var totalPieces = 82;
var rusPieces = 31;
var gerPieces = 40;
var neutPieces = 10;

var totUnits = 0;
var rusUnits = 0;
var gerUnits = 0;
var neutUnits =0;

var unitsA=[

"navy/mi.jpg", "MI af:2 mf:3 vp:", "1",  "20", "n",
"navy/hc.jpg", "HC af:[4] mf:7 vp:", "6",  "14", "c",
"navy/cb.jpg", "CB mf:5 fire:2/3 vp:", "2",  "2", "f",
"navy/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

"cream/hc.jpg", "HC af:[4] mf:7 vp:", "6",  "3", "c",
"cream/lb.jpg", "LB mf:5 fire:3/3 vp:", "4",  "10", "f",
"cream/2l.jpg", "2L combat:+6 radius:2 mf:9 HENRY V  vp", "3", "1", "l",

"neut/battle.jpg", "BATTLE!", "","0", "x",
"neut/turn1.jpg", "TURN NOW", "", "1", "x"
];

var unitNamesA=[];

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

var board1 = "boards/Agincourt.jpg";
var board_setup = "boards/Agincourt_setup.jpg";
var board2 = "boards/Agincourt.jpg";
var board3 = "boards/Agincourt.jpg";

/*
function normBoard()
{
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board1);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=3*realWidth;
  sheight=3*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
}

function setupBoard()
{
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board_setup);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=3*realWidth;
  sheight=3*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
}

function noHexBoard()
{
  var b1 = document.getElementById("board");
	b1.setAttribute("src", board2);
  var realWidth = b1.naturalWidth;
  var realHeight = b1.naturalHeight;
  swidth=3*realWidth;
  sheight=3*realHeight;
  var scale2 = boardSize;
	var swidth2=swidth*scale2/8;
	var	sheight2=sheight*scale2/8;
	b1.style.width = swidth2 + "px";
	b1.style.height = sheight2 + "px";
}
*/
