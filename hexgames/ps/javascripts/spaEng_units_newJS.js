var situationAddress="situations/spaEng_sit.html";
var tecAddress="charts/tec_spartan.html";
var crtAddress="charts/crt_prestags McA edit.html"; //"charts/goa crt.htm";
var crt2Address="charts/crt_prestags_plusD6.html"
var reinfAddress="charts/d20.htm" //reinforcments
var pbmAddress="charts/rallyCalculator.html" //PBM or spare
var seqOfPlayAddress="rules/new turn sequence.txt" //seq of play
var victoryAddress="situations/spaEng_sit.html"; //victory, situation
var weatherAddress="charts/goa weather.htm" //weather
var supplyAddress="charts/yeomanWEC.html" //supply
var rulesAddress="rules/prestags_rules.htm"
var errataAddress="rules/New prestag rules Jun09.txt" //extra rules
var manualAddress="rules/EXCLUSIVE RULES SPARTAN.htm" //battle manual
var SPAREAddress="charts/goa victory.htm" //SPARE SLOT
var boardAddress = "boards/spaEng_setup.jpg";
var presetupGameData = "";
var setupGameData = "0,0,256,0,0,0,252,188,x, 0,0,260,0,0,0,221,189,x, 0,0,264,0,0,0,194,188,x, 0,0,268,0,0,0,161,188,x, 0,0,272,0,0,0,265,163,x, 0,0,276,0,0,0,282,132,x, 0,0,310,0,0,0,207,164,x, 0,0,284,0,0,0,237,163,x, 0,0,294,0,0,0,234,160,x, 0,0,291,0,0,0,262,161,x, 0,0,297,0,0,0,249,186,x, 0,0,300,0,0,0,219,186,x, 0,0,303,0,0,0,192,186,x, 0,0,306,0,0,0,159,185,x, 0,0,313,0,0,0,205,162,x, 0,0,316,0,0,0,280,129,x, 0,0,319,0,0,0,277,127,x, 0,0,340,0,0,0,156,183,x, 0,0,325,0,0,0,232,158,x, 0,0,322,0,0,0,260,158,x, 0,0,337,0,0,0,189,183,x, 0,0,334,0,0,0,216,184,x, 0,0,331,0,0,0,247,183,x, 0,0,328,0,0,0,202,159,x, 0,0,362,0,0,0,252,134,x, 0,0,372,0,0,0,247,129,x, 0,0,365,0,0,0,249,131,x, 0,0,344,0,0,0,254,136,x, 0,0,378,0,0,0,214,181,x, 0,0,375,0,0,0,257,156,x, 0,0,381,0,0,0,244,126,x, 0,0,463,0,0,0,251,303,x, 0,0,454,0,0,0,158,299,x, 0,0,466,0,0,0,290,276,x, 0,0,469,0,0,0,320,270,x, 0,0,457,0,0,0,129,301,x, 0,0,472,0,0,0,349,267,x, 0,0,514,0,0,0,234,331,x, 0,0,460,0,0,0,98,301,x, 0,0,405,0,0,0,174,328,x, 0,0,401,0,0,0,101,303,x, 0,0,397,0,0,0,131,303,x, 0,0,409,0,0,0,253,306,x, 0,0,451,0,0,0,67,357,x, 0,0,393,0,0,0,160,302,x, 0,0,443,0,0,0,351,270,x, 0,0,447,0,0,0,370,301,x, 0,0,423,0,0,0,88,336,x, 0,0,431,0,0,0,278,303,x, 0,0,439,0,0,0,322,273,x, 0,0,427,0,0,0,293,278,x, 0,0,536,0,0,0,160,356,x, 0,0,539,0,0,0,158,353,x, 0,0,546,0,0,0,332,300,x, 0,0,550,0,0,0,98,361,x, 0,0,543,0,0,0,335,303,x, 0,0,553,0,0,0,96,358,x, 0,0,532,0,0,0,259,325,x, 0,0,529,0,0,0,262,328,x, 0,0,567,0,0,0,199,384,x, 0,0,564,0,0,0,201,386,x, 0,0,557,0,0,0,215,358,x, 0,0,560,0,0,0,212,355,x, 0,0,496,0,0,0,145,330,x, 0,0,493,0,0,0,305,297,x, 0,0,486,0,0,0,114,325,x, 0,0,490,0,0,0,307,300,x, 0,0,483,0,0,0,116,328,x, 0,0,479,0,0,0,147,333,x, 0,0,521,0,0,0,276,301,LA, 0,0,504,0,0,0,86,328,LA, 0,0,576,0,0,0,273,298,x, 0,0,573,0,0,0,84,326,x, 0,0,570,0,0,0,210,353,x, 0,0,385,0,0,0,221,134,x, 0,0,1,8,B,0,situations/spaEng_sit.html";
var setupGameData=new Array();
    setupGameData[0] = "0,0,256,0,0,0,252,188,x, 0,0,260,0,0,0,221,189,x, 0,0,264,0,0,0,194,188,x, 0,0,268,0,0,0,161,188,x, 0,0,272,0,0,0,265,163,x, 0,0,276,0,0,0,282,132,x, 0,0,310,0,0,0,207,164,x, 0,0,284,0,0,0,237,163,x, 0,0,294,0,0,0,234,160,x, 0,0,291,0,0,0,262,161,x, 0,0,297,0,0,0,249,186,x, 0,0,300,0,0,0,219,186,x, 0,0,303,0,0,0,192,186,x, 0,0,306,0,0,0,159,185,x, 0,0,313,0,0,0,205,162,x, 0,0,316,0,0,0,280,129,x, 0,0,319,0,0,0,277,127,x, 0,0,340,0,0,0,156,183,x, 0,0,325,0,0,0,232,158,x, 0,0,322,0,0,0,260,158,x, 0,0,337,0,0,0,189,183,x, 0,0,334,0,0,0,216,184,x, 0,0,331,0,0,0,247,183,x, 0,0,328,0,0,0,202,159,x, 0,0,362,0,0,0,252,134,x, 0,0,372,0,0,0,247,129,x, 0,0,365,0,0,0,249,131,x, 0,0,344,0,0,0,254,136,x, 0,0,378,0,0,0,214,181,x, 0,0,375,0,0,0,257,156,x, 0,0,381,0,0,0,244,126,x, 0,0,463,0,0,0,251,303,x, 0,0,454,0,0,0,158,299,x, 0,0,466,0,0,0,290,276,x, 0,0,469,0,0,0,320,270,x, 0,0,457,0,0,0,129,301,x, 0,0,472,0,0,0,349,267,x, 0,0,514,0,0,0,234,331,x, 0,0,460,0,0,0,98,301,x, 0,0,405,0,0,0,174,328,x, 0,0,401,0,0,0,101,303,x, 0,0,397,0,0,0,131,303,x, 0,0,409,0,0,0,253,306,x, 0,0,451,0,0,0,67,357,x, 0,0,393,0,0,0,160,302,x, 0,0,443,0,0,0,351,270,x, 0,0,447,0,0,0,370,301,x, 0,0,423,0,0,0,88,336,x, 0,0,431,0,0,0,278,303,x, 0,0,439,0,0,0,322,273,x, 0,0,427,0,0,0,293,278,x, 0,0,536,0,0,0,160,356,x, 0,0,539,0,0,0,158,353,x, 0,0,546,0,0,0,332,300,x, 0,0,550,0,0,0,98,361,x, 0,0,543,0,0,0,335,303,x, 0,0,553,0,0,0,96,358,x, 0,0,532,0,0,0,259,325,x, 0,0,529,0,0,0,262,328,x, 0,0,567,0,0,0,199,384,x, 0,0,564,0,0,0,201,386,x, 0,0,557,0,0,0,215,358,x, 0,0,560,0,0,0,212,355,x, 0,0,496,0,0,0,145,330,x, 0,0,493,0,0,0,305,297,x, 0,0,486,0,0,0,114,325,x, 0,0,490,0,0,0,307,300,x, 0,0,483,0,0,0,116,328,x, 0,0,479,0,0,0,147,333,x, 0,0,521,0,0,0,276,301,LA, 0,0,504,0,0,0,86,328,LA, 0,0,576,0,0,0,273,298,x, 0,0,573,0,0,0,84,326,x, 0,0,570,0,0,0,210,353,x, 0,0,385,0,0,0,221,134,x, 0,0,1,8,B,0,situations/spaEng_sit.html";
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

var swidth=3294; //width of biggest board
var sheight=3984; //height of biggest board
var placePieceShift=700;//the right shift to the random placement of pieces

//var imgStart=10; //index number of first piece, add this to the piece number given on status bar
var noOfPieces=75; //no of pieces in game
var unitTotal=15; //number of types of pieces
var lastIndex=75; //index number of last piece - turn now
var gerNumber=31; //the index number of the last side A piece
var neutNumber=75; //index number of first neutral piece


var Abase = "red/"
var Bbase = "cream/"
var Apanic=40;
var Bpanic=33;
var maxTurns = 15;
var nameA="Spanish";
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

var unitsA=[

"red/pp.jpg", "PP af:6 mf:4 vp:", "3",  "8", "n",
"red/sd.jpg", "SD af:4 mf:4 vp:", "2",  "8", "n",
"red/al.jpg", "AL mf:5 fire:2/4 vp:", "2",  "8", "f",
"red/l3.jpg", "L3 mf:8 fire:2/5 vp:", "2",  "4", "c",
"red/2l.jpg", "2L combat:+6 radius:2 mf:9 vp", "3", "1", "l",
"red/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "2", "l",

"cream/ms.jpg", "MS af:3 mf:3 vp:", "2",  "8", "n",
"cream/ps.jpg", "PS af:4 mf:3 vp:", "2",  "12", "n",
"cream/hc.jpg", "HC af:[4] mf:7 vp:", "6",  "8", "c",
"cream/mc.jpg", "MC af:[3] mf:9 vp:", "4",  "4", "c",
"cream/cb.jpg", "CB mf:5 fire:2/3 vp:", "2",  "6", "f",
"cream/l3.jpg", "L3 mf:8 fire:2/5 vp:", "2",  "2", "c",
"cream/3l.jpg", "3L combat:+3 radius:1 mf:9 vp", "2", "3", "l",

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


var board1 = "boards/spaEng.jpg";
var board_setup = "boards/spaEng_setup.jpg";
var board2 = "boards/Yeomen all bnw.jpg";
var board3 = "boards/arbela1.jpg";
